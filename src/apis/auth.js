/* eslint-disable import/no-named-as-default-member */
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

export function register(input_obj) {
    return base.post('/register', input_obj)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log(error)
            throw  error;
        });
}
