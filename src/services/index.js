import axios from "axios";
import { store } from "store/storeConfigure";

axios.defaults.baseURL = "https://trello-purrweb.herokuapp.com";

axios.interceptors.request.use((config) => {
  const { token } = store.getState().auth;
  if (token) {
    return { ...config, headers: { ...config.headers, Authorization: `Bearer ${token}` } };
  }
  return config;
});

export default axios;
