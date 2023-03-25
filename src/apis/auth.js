import base from "./base";

export function login(email, password) {
    return base.post('/login', {email, password})
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw  error.response.data;
        });
}

export function register(name, email, password) {
    return base.post('/register', {name, email, password})
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw  error.response.data;
        });
}
