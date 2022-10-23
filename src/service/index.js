import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api',
});

// post
const service = {
  login: async (data) => {
    try {
      const response = await api.post('/login', data);
      return response;
    } catch (err) {
      return err;
    }
  },

  // get
  getList: async (page) => {
    try {
      const response = await api.get('/users/', {
        params: {
          page,
        },
      });
      return response.data;
    } catch (err) {
      return err;
    }
  },

  // get data id
  getDetail: async (id) => {
    try {
      const res = await api.get(`/users/${id}`)
      return res.data;
    } catch (error) {
      return error;      
    }
  }
};

export default service;
