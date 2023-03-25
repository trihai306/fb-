/* eslint-disable no-useless-catch */
import { api } from "../base.js";

const login = async (body) => {
  try {
    console.log("body:", body);
    const res = await api.post("/login", body);
    return res.data;
  } catch (error) {
    throw error;
  }
};

const register = async (body) => {
  try {
    return await api.post("/register", body);
  } catch (error) {
    throw error;
  }
};

export { login, register };
