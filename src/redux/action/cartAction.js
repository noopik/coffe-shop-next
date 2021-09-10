import axios from '../../config/Axios';
import { toast } from 'react-toastify';

export const addOrderCart = (cartParam) => async (dispatch, getState) => {
  let {
    cart: { cart_multi: updateCarts },
  } = getState();
  if (cartParam.cart_size_id === null) {
    toast.error('Please select the product size');
  }
  if (cartParam.cart_deliver_id === null) {
    toast.error('please select product delivery');
  }
  const { data: detailProduct } = await (await axios.get(`/products/${cartParam.cart_product_id}`)).data;
  let totalAllProduct = 0;
  let foundProduct = false;
  if (cartParam.cart_size_id !== null && cartParam.cart_deliver_id !== null) {
    ////
    updateCarts.forEach((currentCart) => {
      if (currentCart.cart_product_id === cartParam.cart_product_id) {
        totalAllProduct += currentCart.cart_stock;
      }
    });
    if (totalAllProduct + cartParam.cart_stock > detailProduct.stock) {
      return toast.error('the number of goods exceeds the existing goods');
    } else {
      for (let i = 0; i < updateCarts.length; i++) {
        if (
          updateCarts[i].cart_product_id === cartParam.cart_product_id &&
          updateCarts[i].cart_deliver_id === cartParam.cart_deliver_id &&
          updateCarts[i].cart_size_id === cartParam.cart_size_id
        ) {
          updateCarts[i].cart_stock += cartParam.cart_stock;
          updateCarts[i].total_price += cartParam.cart_stock * parseInt(detailProduct.price, 10);
          foundProduct = true;
        }
      }
    }
    if (foundProduct === false) {
      cartParam.total_price = cartParam.cart_stock * parseInt(detailProduct.price, 10);
      updateCarts.push(cartParam);
    }
    dispatch({ type: 'CART_MUTLI', payload: updateCarts });
    toast.success('successful add to cart');
    ////
  }
};

export const deleteOrderCart = (product_id, deliver_id, size_id) => (dispatch, getState) => {
  try {
    let {
      cart: { cart_multi: oldCarts },
    } = getState();
    const index = oldCarts.findIndex(
      (oldCart) =>
        oldCart.cart_product_id === product_id &&
        oldCart.cart_deliver_id === deliver_id &&
        oldCart.cart_size_id === size_id
    );
    oldCarts.splice(index, 1);
    dispatch({ type: 'CART_MUTLI', payload: oldCarts });
    toast.success('Successful delete cart');
  } catch (error) {
    console.log(error);
  }
};

export const decQuantity = (product_id, deliver_id, size_id) => async (dispatch, getState) => {
  try {
    const { data: detailProduct } = await (await axios.get(`/products/${product_id}`)).data;
    let {
      cart: { cart_multi: oldCarts },
    } = getState();
    oldCarts.forEach((oldCart) => {
      if (
        oldCart.cart_product_id === product_id &&
        oldCart.cart_deliver_id === deliver_id &&
        oldCart.cart_size_id === size_id
      ) {
        if (oldCart.cart_stock === 1) {
          return false;
        } else if (oldCart.cart_stock > 1) {
          oldCart.cart_stock -= 1;
          oldCart.total_price -= parseInt(detailProduct.price, 10);
        }
      }
    });
    dispatch({ type: 'CART_MUTLI', payload: oldCarts });
  } catch (error) {
    console.log(error);
  }
};

export const incQuantity = (product_id, deliver_id, size_id) => async (dispatch, getState) => {
  try {
    const { data: detailProduct } = await (await axios.get(`/products/${product_id}`)).data;
    let {
      cart: { cart_multi: oldCarts },
    } = getState();
    let oldProductQuantity = 0;
    oldCarts.forEach((oldCart) => {
      if (oldCart.cart_product_id === product_id) {
        oldProductQuantity += oldCart.cart_stock;
      }
    });
    if (oldProductQuantity + 1 <= detailProduct.stock) {
      oldCarts.forEach((oldCart) => {
        if (
          oldCart.cart_product_id === product_id &&
          oldCart.cart_deliver_id === deliver_id &&
          oldCart.cart_size_id === size_id
        ) {
          if (oldCart.cart_stock + 1 > detailProduct.stock) {
            return false;
          } else if (oldCart.cart_stock + 1 <= detailProduct.stock) {
            oldCart.cart_stock += 1;
            oldCart.total_price += parseInt(detailProduct.price, 10);
          }
        }
      });
    }
    dispatch({ type: 'CART_MUTLI', payload: oldCarts });
  } catch (error) {
    console.log(error);
  }
};
