import axios from 'axios';
import { UAParser } from 'ua-parser-js';
import moment from 'moment-timezone';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
apiClient.interceptors.request.use(
    async (config) => {
        let userIP = '';
        if (localStorage.getItem('ip')) {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            localStorage.setItem('ip', data.ip);
        } else {
            userIP = localStorage.getItem('ip') || ''
        }
        config.headers['ip'] = userIP;
        config.headers['timezone'] = moment.tz.guess();;

        const parser = new UAParser();
        const uaResult = parser.getResult();
        config.headers['agent-config'] = JSON.stringify({
            "browser": uaResult.browser.name,
            "version": uaResult.browser.version,
            "os": uaResult.os.name,
            "platform": uaResult.os.version,
            "source": uaResult.ua
        });
        
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            console.error('Response error:', error.response.data);
        } else if (error.request) {
            // Request was made but no response was received
            console.error('Request error:', error.request);
        } else {
            console.error('Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default apiClient;
