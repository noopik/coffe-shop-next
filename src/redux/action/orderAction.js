import axios from '../../config/Axios';
import { toast } from 'react-toastify';

export const createOrder =
  (carts, formOrder, totalPrice, router) => async (dispatch) => {
    try {
      await axios.post('/orders', {
        phone_number: formOrder.phone_number,
        address: formOrder.address,
        payment: formOrder.payment,
        carts,
        cartOrders: carts,
        total_price: totalPrice,
      });
      router.push('/products');
      toast.success('Successful Order Product');
      dispatch({ type: 'CART_MUTLI', payload: [] });
    } catch (error) {
      console.log(error.response);
    }
  };
