import baseAPI from './base';

const crud = {
    // Index
    get: async (link) => {
        const response = await baseAPI.request('get', link);
        return response.data;
    },
    getIndexActions: async (link) => {
        const response = await baseAPI.request('get', link);
        return response.data;
    },
    getIndexGetters: async (link) => {
        const response = await baseAPI.request('get', link);
        return response.data;
    },

    // Show
    show: async (id, link) => {
        const response = await baseAPI.request('get', `${link}/${id}`);
        return response.data;
    },
    getIndividualActions: async (id, link) => {
        const response = await baseAPI.request('get', `${link}/${id}`);
        return response.data;
    },
    getIndividualGetters: async (id, link) => {
        const response = await baseAPI.request('get', `${link}/${id}`);
        return response.data;
    },

    // Store
    store: async (payload, link) => {
        const response = await baseAPI.request('post', link, payload);
        return response.data;
    },
    performIndexActions: async (actionName, link) => {
        const response = await baseAPI.request('post', `${link}/actions`, null, {
            params: {action: actionName},
        });
        return response.data;
    },
    retrieveIndexGetters: async (getterName, link) => {
        const response = await baseAPI.request('get', `${link}/getters`, null, {
            params: {getter: getterName},
        });
        return response.data;
    },
    storeMultiple: async (payload, link) => {
        const response = await baseAPI.request('post', `${link}/bulk`, payload);
        return response.data;
    },

    // Update
    updatePartial: async (id, payload, link) => {
        const response = await baseAPI.request('patch', `${link}/${id}`, payload);
        return response.data;
    },
    updateFull: async (id, payload, link) => {
        const response = await baseAPI.request('put', `${link}/${id}`, payload);
        return response.data;
    },
    updateWithAttachments: async (id, payload, link) => {
        const response = await baseAPI.request('post', `${link}/${id}`, payload);
        return response.data;
    },

    // Bulk actions
    deleteMultiple: async (payload, link) => {
        const response = await baseAPI.request('delete', `${link}/bulk/delete`, {
            data: payload,
        });
        return response.data;
    },
    updateMultiple: async (payload, link) => {
        const response = await baseAPI.request('post', `${link}/bulk/update`, payload);
        return response.data;
    },

    // Delete

    delete: async (id, link) => {
        const response = await baseAPI.request('delete', `${link}/${id}`);
        return response.data;
    },
    performIndividualActions: async (id, actionName, link) => {
        const response = await baseAPI.request('post', `${link}/${id}/actions`, null, {
            params: {action: actionName},
        });
        return response.data;

    },
    retrieveIndividualGetters: async (id, getterName, link) => {
        const response = await baseAPI.request('get', `${link}/${id}/getters`, null, {
            params: {getter: getterName},
        });
        return response.data;
    }
};

export default crud;
