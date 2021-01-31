import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    axios.defaults.headers.common.Accept = 'application/json';
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export default setAuthToken;
