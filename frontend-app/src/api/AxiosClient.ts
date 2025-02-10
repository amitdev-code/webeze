import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  CancelTokenSource,
  InternalAxiosRequestConfig,
} from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000/api/", // Replace with your API URL
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];
let refreshPromise: Promise<string | null> | null = null;
const pendingRequests = new Map<string, CancelTokenSource>();

const getRequestKey = (config: AxiosRequestConfig): string =>
  `${config.method}:${config.url}`;

const cancelPendingRequest = (config: AxiosRequestConfig): void => {
  const requestKey = getRequestKey(config);
  if (pendingRequests.has(requestKey)) {
    const cancelTokenSource = pendingRequests.get(requestKey);
    cancelTokenSource?.cancel("Duplicate request canceled");
    pendingRequests.delete(requestKey);
  }
};

// const subscribeTokenRefresh = (cb: (token: string) => void): void => {
//   refreshSubscribers.push(cb);
// };

const onRefreshed = (token: string): void => {
  refreshSubscribers.forEach((cb) => cb(token));
  refreshSubscribers = [];
};

const refreshAccessToken = async (): Promise<string | null> => {
  if (!refreshPromise) {
    refreshPromise = (async () => {
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) throw new Error("No refresh token available");
        const response = await axios.post("https://api.example.com/refresh", {
          token: refreshToken,
        });
        localStorage.setItem("token", response.data.accessToken);
        onRefreshed(response.data.accessToken);
        return response.data.accessToken;
      } catch (error) {
        console.error("Refresh token error:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
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
  (config: InternalAxiosRequestConfig) => {
    cancelPendingRequest(config);
    const token = localStorage.getItem("token"); // Retrieve token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    const cancelTokenSource = axios.CancelToken.source();
    config.cancelToken = cancelTokenSource.token;
    pendingRequests.set(getRequestKey(config), cancelTokenSource);
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    pendingRequests.delete(getRequestKey(response.config));
    return response.data;
  },
  async (error: AxiosError) => {
    if (error.config) {
      pendingRequests.delete(getRequestKey(error.config));
    }
    if (axios.isCancel(error)) {
      console.warn("Request canceled:", error.message);
      return Promise.reject(error);
    }
    const originalRequest = (error as AxiosError).config as AxiosRequestConfig & { _retry?: boolean };
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      if (!isRefreshing) {
        isRefreshing = true;
      }
      const newToken = await refreshAccessToken();
      if (newToken) {
        if (!originalRequest.headers) {
          originalRequest.headers = {};
        }
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return apiClient(originalRequest);
      }
    }
    const axiosError = error as AxiosError;
    console.error("API Error:", axiosError.response?.data || axiosError.message);
    return Promise.reject(error);
  }
);

export default apiClient;
