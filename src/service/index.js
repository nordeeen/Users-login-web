import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api',
});

const service = {
  login: async (data) => {
    try {
      const response = await api.post('/login',data);
      return response;
    } catch (err) {
      return err;
    }
  },
};

export default service;
