import axios from '../../config/Axios';
import { toast } from 'react-toastify';

export const register = async (formData, history) => {
  try {
    await axios.post('/users/auth/register', formData);
    toast.success('Please check your email for email verification!');
    history.push('/auth/login');
  } catch (error) {
    if (error.response?.data?.statusCode === 422) {
      toast.error(error?.response?.data?.error[0].msg);
    } else {
      toast.error('Registration failed');
      console.log(error);
    }
  }
};

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

export const forgotPassword = async (formData) => {
  try {
    await axios.patch('/users/forgot-password', formData);
    toast.success('Please check your email for confirm reset password!');
  } catch (error) {
    toast.error(error?.response?.data?.message);
    console.log(error);
  }
};

export const resetPassword = async (formData, history, token) => {
  try {
    await axios.patch('/users/reset-password', { password: formData.password, tokenPassword: token });
    toast.success('Successfully reset password!');
    history.push('/auth/login');
  } catch (error) {
    toast.error(error?.response?.data?.message);
    console.log(error);
  }
};
