import axios from '../../config/Axios';

export const getProducts = async (limit, order, page = 1, search = '', fieldOrder = '') => {
  try {
    const data = await (
      await axios.get(`/products?order=${order}&limit=${limit}&page=${page}&search=${search}&fieldOrder=${fieldOrder}`)
    ).data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductsById = async (id, limit, order, page = 1, search = '', fieldOrder = '') => {
  try {
    const data = await (
      await axios.get(
        `/products/category/${id}?order=${order}&limit=${limit}&page=${page}&search=${search}&fieldOrder=${fieldOrder}`
      )
    ).data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async (order, pagination) => {
  try {
    const data = await (await axios.get(`/categories/getcategory?order=${order}&pagination=${pagination}`)).data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
