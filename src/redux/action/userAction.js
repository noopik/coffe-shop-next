import axios from '../../config/Axios';
import { toast } from 'react-toastify';

export const login = (formData, history) => async (dispatch) => {
  try {
    console.log(formData);
    const { data } = await (await axios.post('/users/auth/login', formData)).data;
    dispatch({ type: 'LOGIN', payload: data });
    toast.success('Login successful');
    history.push('/');
  } catch (error) {
    toast.error(error?.response?.data?.message);
    console.log(error);
  }
};
