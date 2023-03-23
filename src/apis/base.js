import axios from 'axios'

const baseURL = 'http://127.0.0.1:8000'

const createAxiosInstance = () => {
    const instance = axios.create({
        baseURL: baseURL + '/api/restify',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers':
                'Origin, X-Requested-With, Content-Type, Accept'
        }
    })

    // Thiết lập interceptor cho request trước khi được gửi đi
    instance.interceptors.request.use(
        config => {
            // Thêm header Authorization vào các request
            const token = localStorage.getItem('token')
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }

            return config
        },
        error => Promise.reject(error)
    )

    return instance
}

export const clearToken = () => localStorage.removeItem('token')

export const setToken = accessToken => {
    localStorage.setItem('token', accessToken)
}

export const api = {
    // Index
    getPosts: async () => {
        const instance = createAxiosInstance()
        const response = await instance.get('/posts')
        return response.data
    },
    getIndexActions: async () => {
        const instance = createAxiosInstance()
        const response = await instance.get('/posts/actions')
        return response.data
    },
    getIndexGetters: async () => {
        const instance = createAxiosInstance()
        const response = await instance.get('/posts/getters')
        return response.data
    },

    // Show
    getPost: async (id) => {
        const instance = createAxiosInstance()
        const response = await instance.get(`/posts/${id}`)
        return response.data
    },
    getIndividualActions: async (id) => {
        const instance = createAxiosInstance()
        const response = await instance.get(`/posts/${id}/actions`)
        return response.data
    },
    getIndividualGetters: async (id) => {
        const instance = createAxiosInstance()
        const response = await instance.get(`/posts/${id}/getters`)
        return response.data
    },

    // Store
    storePost: async (payload) => {
        const instance = createAxiosInstance()
        const response = await instance.post('/posts', payload)
        return response.data
    },
    performIndexActions: async (actionName) => {
        const instance = createAxiosInstance()
        const response = await instance.post('/posts/actions', null, { params: { action: actionName } })
        return response.data
    },
    retrieveIndexGetters: async (getterName) => {
        const instance = createAxiosInstance()
        const response = await instance.get('/posts/getters', { params: { getter: getterName } })
        return response.data
    },
    storeMultiplePosts: async (payload) => {
        const instance = createAxiosInstance()
        const response = await instance.post('/posts/bulk', payload)
        return response.data
    },

    // Update
    updatePostPartial: async (id, payload) => {
        const instance = createAxiosInstance()
        const response = await instance.patch(`/posts/${id}`, payload)
        return response.data
    },
    updatePostFull: async (id, payload) => {
        const instance = createAxiosInstance()
        const response = await instance.put(/posts/${id}, payload)
        return response.data
    },
    updatePostWithAttachments: async (id, payload) => {
        const instance = createAxiosInstance()
        const response = await instance.post(/posts/${id}, payload)
        return response.data
    },
    // Bulk actions
    deleteMultiplePosts: async (payload) => {
        const instance = createAxiosInstance()
        const response = await instance.delete('/posts/bulk/delete', { data: payload })
        return response.data
    },
    updateMultiplePosts: async (payload) => {
        const instance = createAxiosInstance()
        const response = await instance.post('/posts/bulk/update', payload)
        return response.data
    },

// Perform individual actions
    performIndividualActions: async (id, actionName) => {
        const instance = createAxiosInstance()
        const response = await instance.post(`/posts/${id}/actions`, null, { params: { action: actionName } })
        return response.data
    },

// Retrieve individual getter
    retrieveIndividualGetter: async (id, getterName) => {
        const instance = createAxiosInstance()
        const response = await instance.get(`/posts/${id}/getters`, { params: { getter: getterName } })
        return response.data
    },

// Delete
    deletePost: async (id) => {
        const instance = createAxiosInstance()
        const response = await instance.delete(`/posts/${id}`)
        return response.data
    },
}

const base = {
    clearToken,
    setToken,
    ...api
}

export default base


