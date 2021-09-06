import axios from '../../config/Axios';
import { toast } from 'react-toastify';

export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await (await axios.post('/users/auth/login', formData)).data;
    dispatch({ type: 'LOGIN', payload: data });
    toast.success('Login successful');
    history.push('/');
  } catch (error) {
    toast.error(error?.response?.data?.message);
    console.log(error);
  }
};

export const logout = (history) => async (dispatch, getState) => {
  try {
    await axios.delete('/users/logout');
    dispatch({ type: 'LOGOUT', payload: {} });
    history.push('/auth/login');
  } catch (error) {
    toast.error('Error', 'Logout failed', 'error');
  }
};

export const getProfile = () => async (dispatch) => {
  try {
    const { data } = await (await axios.get('/users/profile')).data;
    dispatch({ type: 'PROFILE', payload: data });
  } catch (error) {
    dispatch({ type: 'LOGOUT', payload: {} });
  }
};