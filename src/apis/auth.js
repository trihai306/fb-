import base from "./base";

export function login(email, password) {
    return base.post('/api/login', {email, password})
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw  error.response.data;
        });
}

export function register(name, email, password) {
    return base.post('/api/register', {name, email, password})
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw  error.response.data;
        });
}
