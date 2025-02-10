import axios, { InternalAxiosRequestConfig } from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.example.com', // Replace with your API URL
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

let isRefreshing = false;
let refreshSubscribers: any[] = [];
let refreshPromise: Promise<any> | null = null;
const pendingRequests = new Map();

const getRequestKey = (config: InternalAxiosRequestConfig<any>) => `${config.method}:${config.url}`;

const cancelPendingRequest = (config: InternalAxiosRequestConfig<any>) => {
    const requestKey = getRequestKey(config);
    if (pendingRequests.has(requestKey)) {
        const cancelTokenSource = pendingRequests.get(requestKey);
        cancelTokenSource.cancel('Duplicate request canceled');
        pendingRequests.delete(requestKey);
    }
};

// const subscribeTokenRefresh = (cb) => {
//     refreshSubscribers.push(cb);
// };

const onRefreshed = (token: any) => {
    refreshSubscribers.forEach((cb) => cb(token));
    refreshSubscribers = [];
};

const refreshAccessToken = async () => {
    if (!refreshPromise) {
        refreshPromise = (async () => {
            try {
                const refreshToken = localStorage.getItem('refreshToken');
                if (!refreshToken) throw new Error('No refresh token available');
                const response = await axios.post('https://api.example.com/refresh', { token: refreshToken });
                localStorage.setItem('token', response.data.accessToken);
                onRefreshed(response.data.accessToken);
                return response.data.accessToken;
            } catch (error) {
                console.error('Refresh token error:', error);
                localStorage.removeItem('token');
                localStorage.removeItem('refreshToken');
                return null;
            } finally {
                isRefreshing = false;
                refreshPromise = null;
            }
        })();
    }
    return refreshPromise;
};

// Request Interceptor
apiClient.interceptors.request.use(
    (config) => {
        cancelPendingRequest(config);
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        const cancelTokenSource = axios.CancelToken.source();
        config.cancelToken = cancelTokenSource.token;
        pendingRequests.set(getRequestKey(config), cancelTokenSource);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response Interceptor
apiClient.interceptors.response.use(
    (response) => {
        pendingRequests.delete(getRequestKey(response.config));
        return response.data;
    },
    async (error) => {
        pendingRequests.delete(getRequestKey(error.config));
        if (axios.isCancel(error)) {
            console.warn('Request canceled:', error.message);
            return Promise.reject(error);
        }
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            if (!isRefreshing) {
                isRefreshing = true;
            }
            const newToken = await refreshAccessToken();
            if (newToken) {
                originalRequest.headers.Authorization = `Bearer ${newToken}`;
                return apiClient(originalRequest);
            }
        }
        console.error('API Error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default apiClient;
