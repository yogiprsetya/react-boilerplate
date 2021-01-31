import axios from 'axios';
import setAuthToken from 'utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER, USER_PROFILE } from '../types';

export const setCurrentUser = decoded => ({ type: SET_CURRENT_USER, payload: decoded });
export const setUserProfile = payload => ({ type: USER_PROFILE, payload });

export const loginUser = userData => dispatch => {
  axios.post(`${process.env.REACT_APP_API_HOST}login`, userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem(`${process.env.PREFIX_STORAGE}:token`, token);

      setAuthToken(token);

      const decoded = jwtDecode(token);
      dispatch(setCurrentUser(decoded));

      if (decoded) {
        window.location.reload();
      }

      return true;
    })
    .catch(err => {
      console.log(err.response.data);
    });
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem(`${process.env.PREFIX_STORAGE}:token`);
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  window.location.reload();
};
