import axios from 'axios';

const baseURL = 'http://localhost:8001';
const HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
};

const baseAPI = axios.create({
    baseURL: `${baseURL}/api`,
    headers: HEADERS
});

// Thiết lập interceptor cho request trước khi được gửi đi
baseAPI.interceptors.request.use(
    (config) => {
        // Thêm header Authorization vào các request
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export const setToken = (accessToken) => {
    localStorage.setItem('token', accessToken);
};

export const clearToken = () => {
    localStorage.removeItem('token');
};

export const get = async (url, params = {}) => {
    try {
        const response = await baseAPI.get(url, { params });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};

export const post = async (url, data = {}) => {
    try {
        const response = await baseAPI.post(url, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};

export const put = async (url, data = {}) => {
    try {
        const response = await baseAPI.put(url, data);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};

export const remove = async (url, params = {}) => {
    try {
        const response = await baseAPI.delete(url, { params });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};

export default {
    setToken,
    clearToken,
    get,
    post,
    put,
    remove,
};
