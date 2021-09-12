import styled from 'styled-components';
import { IMG_DefaultProduct, IMG_DummyProduct } from '../../../../src/assets';
import {
  Breadcrumb,
  Breadcrumbs,
  Button,
  TextFieldAdmin,
} from '../../../../src/components/atoms';
import PrivateRoute from '../../../../src/components/hoc/PrivateRoute';
import { Breakpoints, Toastify } from '../../../../src/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axiosConfig from '../../../../src/config/Axios';
import { ErrorMessage } from 'formik';
import { useRouter } from 'next/router';

export const getServerSideProps = async (context) => {
  try {
    const { idProduct } = context.query;
    const resultSizes = await axiosConfig.get('/sizes/getsizes?pagination=off');
    const resultDeliveries = await axiosConfig.get(
      '/deliveries/getdeliveries?pagination=off'
    );
    const resultCategories = await axiosConfig.get(
      '/categories/getcategory?pagination=off'
    );
    const resultDataProduct = await axiosConfig.get(`/products/${idProduct}`);
    const sizes = resultSizes.data.data;
    const deliveries = resultDeliveries.data.data;
    const categories = resultCategories.data.data;
    const product = resultDataProduct.data.data;
    return {
      props: {
        sizes,
        deliveries,
        categories,
        product,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      // props: {},
      redirect: {
        permanent: false,
        destination: '/404',
      },
    };
  }
};

const EditProduct = (props) => {
  const { query } = useRouter();
  const { idProduct } = query;
  const { product } = props;
  const sizes = props.sizes;
  const deliveries = props.deliveries;
  const categories = props.categories;
  const [priviewImage, setPreviewImage] = useState('');
  const [defaultImage, setDefaultImage] = useState(
    `${process.env.NEXT_PUBLIC_API_URL}/${product.img_product}`
  );
  const [stockCounter, setStockCounter] = useState(product.stock);
  const [sizeProduct, setsizeProduct] = useState(product.size);
  const [deliveryProduct, setdeliveryProduct] = useState(product.delivery);

  // START = VALIDATION FORM
  const validate = Yup.object({
    name: Yup.string().required('Name product is required'),
    price: Yup.number().required('Price is required'),
    description: Yup.string().required('Description is required'),
    // size: Yup.array().min(1),
    // method: Yup.array().min(1),
    // category: Yup.string().required('Please select category product')
  });
  // END = VALIDATION FORM

  const handleSize = (e, data) => {
    if (e.target.checked) {
      setsizeProduct((old) => {
        return [...old, data];
      });
      document.getElementById(`itemSize${e.target.value}`).className =
        'size-item select';
    } else {
      const index = sizeProduct.findIndex((element) => {
        return element.size_id === data.size_id;
      });
      sizeProduct.splice(index, 1);
      document.getElementById(`itemSize${e.target.value}`).className =
        'size-item';
    }
  };

  const handleDelivery = (e, data) => {
    if (e.target.checked) {
      setdeliveryProduct((old) => {
        return [...old, data];
      });
      document.getElementById(`method${e.target.value}`).className =
        'method-item select';
    } else {
      // const index = deliveryProduct.indexOf(data);
      const index = deliveryProduct.findIndex((element) => {
        return element.delivery_id === data.delivery_id;
      });
      deliveryProduct.splice(index, 1);
      document.getElementById(`method${e.target.value}`).className =
        'method-item';
    }
  };
  // };
  // START = HANDLE STOCK LOGIC
  const stockIncrement = () => {
    const increment = stockCounter + 1;
    setStockCounter(increment);
  };
  const stockDecrement = () => {
    if (stockCounter === 1) {
      return null;
    }
    const increment = stockCounter - 1;
    setStockCounter(increment);
  };
  // END = HANDLE STOCK LOGIC

  // START = HANDLE PRIVIEW IMAGE
  const handlePreviewImage = (e) => {
    setDefaultImage(false);
    setPreviewImage(e.target.files[0]);
  };
  // END = HANDLE PRIVIEW IMAGE
  // console.log('categories', categories);
  return (
    <StyledEditProduct className="container main">
      <Breadcrumbs>
        <Breadcrumb title="Products" to="/products" />
        <Breadcrumb title={`> ${product.product_name}`} to="#" active />
        <Breadcrumb title="> Edit product" to="#" active />
      </Breadcrumbs>
      <Formik
        initialValues={{
          name: product.product_name,
          price: product.price,
          description: product.description,
          size: sizeProduct,
          method: deliveryProduct,
          category: product.category_id,
        }}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
          const image = priviewImage ? priviewImage : defaultImage;
          if (!image) {
            return Toastify('Images required!', 'error');
          }

          const formData = new FormData();
          formData.append('product_name', values.name);
          formData.append('price', values.price);
          formData.append('category_id', values.category);
          formData.append('description', values.description);
          formData.append('stock', stockCounter);
          for (let i = 0; i < sizeProduct.length; i++) {
            formData.append('size_id', sizeProduct[i].size_id);
          }
          for (let itr = 0; itr < deliveryProduct.length; itr++) {
            formData.append('delivery_id', deliveryProduct[itr].delivery_id);
          }
          image !== defaultImage && formData.append('img_product', image);
          // for (let [key, value] of formData.entries()) {
          //   console.log(`${key}: ${value}`);
          // }
          axiosConfig
            .post(`/products/${idProduct}`, formData)
            .then(() => {
              Toastify('Update product successfull', 'success');
            })
            .catch((err) => {
              console.log(err.response);
              Toastify(
                'Update product failed, please try again later',
                'error'
              );
            });
        }}
      >
        {(formik) => (
          <Form>
            <div className="side-left">
              <div className="image-wrapper">
                {!defaultImage && !priviewImage && (
                  <Image
                    src={IMG_DefaultProduct}
                    alt="image name"
                    layout="fill"
                  />
                )}
                {defaultImage && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={defaultImage} alt="image" className="image" />
                )}
                {priviewImage && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={URL?.createObjectURL(priviewImage)}
                    alt="image"
                    className="image"
                  />
                )}

                <div className="btn-circle-wrapper">
                  {(priviewImage || defaultImage) && (
                    <div
                      className="btn delete"
                      onClick={() => {
                        setDefaultImage(false);
                        setPreviewImage(false);
                      }}
                    >
                      <svg
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 6H4.11111M4.11111 6H21M4.11111 6V20C4.11111 20.5304 4.33353 21.0391 4.72944 21.4142C5.12535 21.7893 5.66232 22 6.22222 22H16.7778C17.3377 22 17.8746 21.7893 18.2706 21.4142C18.6665 21.0391 18.8889 20.5304 18.8889 20V6H4.11111ZM7.27778 6V4C7.27778 3.46957 7.5002 2.96086 7.89611 2.58579C8.29202 2.21071 8.82899 2 9.38889 2H13.6111C14.171 2 14.708 2.21071 15.1039 2.58579C15.4998 2.96086 15.7222 3.46957 15.7222 4V6M9.38889 11V17M13.6111 11V17"
                          stroke="#6A4029"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                  {!(priviewImage || defaultImage) && (
                    <div className="btn upload">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="10"
                          width="4"
                          height="24"
                          rx="2"
                          fill="#6A4029"
                        />
                        <rect
                          x="24"
                          y="10"
                          width="4"
                          height="24"
                          rx="2"
                          transform="rotate(90 24 10)"
                          fill="#6A4029"
                        />
                      </svg>
                      <input
                        accept="image/jpeg, image/png"
                        type="file"
                        name="image"
                        className="input-file"
                        onChange={(e) => handlePreviewImage(e)}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="date-wrapper">
                <p className="text">
                  Delivery only on{' '}
                  <span className="bold">Monday to friday at 1 - 7 pm</span>
                </p>
              </div>
            </div>
            <div className="side-right">
              <div className="row">
                <TextFieldAdmin
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  placeholder="Name Product"
                  defaultValue={formik.values.name}
                  className="heading-name-product"
                />
                <div className="line" />
                {formik.errors.name && (
                  <p className="input-invalid">{formik.errors.name}</p>
                )}
              </div>
              <div className="row price-wrapper">
                <p className="price">IDR</p>
                <TextFieldAdmin
                  type="text"
                  name="price"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                  placeholder="0"
                  defaultValue={formik.values.price}
                  className="price"
                />
                <div className="line" />
              </div>
              {formik.errors.price && (
                <p className="input-invalid outside-form">
                  {formik.errors.price}
                </p>
              )}
              <div className="row">
                <textarea
                  // id=" "
                  // name=" "
                  name="description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  className="text"
                  defaultValue={formik.values.description}
                ></textarea>
                <div className="line" />
                {formik.errors.description && (
                  <p className="input-invalid">{formik.errors.description}</p>
                )}
              </div>
              <div className="row">
                {/* {sizes &&
                  sizes.map((size, index) => (
                    <>
                      {sizeProduct.find((element) => element.size_id === size.size_id) ? (
                        <>
                          <span>{size.size_name}</span>
                          <input
                            onChange={(e) => handleSize(e, size)}
                            id={`size${size.size_id}`}
                            key={index}
                            value={size.size_id}
                            type="checkbox"
                            defaultChecked
                          />
                          <br />
                        </>
                      ) : (
                        <>
                          <span>{size.size_name}</span>
                          <input
                            onChange={(e) => handleSize(e, size)}
                            id={`size${size.size_id}`}
                            key={index}
                            value={size.size_id}
                            type="checkbox"
                          />
                          <br />
                        </>
                      )}
                    </>
                  ))} */}
                <div className="select-group">
                  {sizes &&
                    sizes.map((size, index) => (
                      <>
                        {sizeProduct.find(
                          (element) => element.size_id === size.size_id
                        ) ? (
                          <>
                            <div key={index}>
                              <label htmlFor={`size${size.size_id}`}>
                                <div
                                  className="size-item select"
                                  id={`itemSize${size.size_id}`}
                                >
                                  <p>{size.size_name}</p>
                                </div>
                              </label>
                              <Checkbox
                                type="checkbox"
                                name="size"
                                id={`size${size.size_id}`}
                                value={size.size_id}
                                onChange={(e) => handleSize(e, size)}
                                defaultChecked
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div key={index}>
                              <label htmlFor={`size${size.size_id}`}>
                                <div
                                  className="size-item"
                                  id={`itemSize${size.size_id}`}
                                >
                                  <p>{size.size_name}</p>
                                </div>
                              </label>
                              <Checkbox
                                type="checkbox"
                                name="size"
                                id={`size${size.size_id}`}
                                value={size.size_id}
                                onChange={(e) => handleSize(e, size)}
                              />
                            </div>
                          </>
                        )}
                      </>
                    ))}
                </div>
              </div>
              <div className="row">
                <div className="select-group">
                  {deliveries &&
                    deliveries.map((delivery, index) => (
                      <>
                        {deliveryProduct.find(
                          (element) =>
                            element.delivery_id === delivery.delivery_id
                        ) ? (
                          <>
                            <div key={index}>
                              <label
                                htmlFor={`delivery${delivery.delivery_id}`}
                              >
                                <div
                                  className="method-item select"
                                  id={`method${delivery.delivery_id}`}
                                >
                                  <p>{delivery.delivery_name}</p>
                                </div>
                              </label>
                              <Checkbox
                                type="checkbox"
                                name="delivery"
                                id={`delivery${delivery.delivery_id}`}
                                value={delivery.delivery_id}
                                onChange={(e) => handleDelivery(e, delivery)}
                                defaultChecked
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div key={index}>
                              <label
                                htmlFor={`delivery${delivery.delivery_id}`}
                              >
                                <div
                                  className="method-item"
                                  id={`method${delivery.delivery_id}`}
                                >
                                  <p>{delivery.delivery_name}</p>
                                </div>
                              </label>
                              <Checkbox
                                type="checkbox"
                                name="delivery"
                                id={`delivery${delivery.delivery_id}`}
                                value={delivery.delivery_id}
                                onChange={(e) => handleDelivery(e, delivery)}
                              />
                            </div>
                          </>
                        )}
                      </>
                    ))}
                </div>
              </div>
              <div className="row">
                <select
                  name="category"
                  id="category"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.category}
                  placeholder="Select Delivery Methods"
                >
                  <option value="">Select Category Product</option>
                  {categories &&
                    categories.map((category) => (
                      <>
                        <option
                          id={category.category_id}
                          value={category.category_id}
                        >
                          {category.category_name}
                        </option>
                      </>
                    ))}
                </select>
                {formik.errors.category && (
                  <p className="input-invalid">{formik.errors.category}</p>
                )}
              </div>
              <div className="row button-wrapper">
                <div className="counter-wrapper">
                  <svg
                    onClick={stockIncrement}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 15.6H15.7515V21H8.24853V15.6H3V8.43529H8.24853V3H15.7515V8.43529H21V15.6Z"
                      fill="#9F9F9F"
                    />
                  </svg>
                  <p>{stockCounter}</p>
                  <svg
                    onClick={stockDecrement}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 8V15.0687H3V8H21Z" fill="#9F9F9F" />
                  </svg>
                </div>
                <Button type="button">Add to Cart</Button>
              </div>
              {formik.errors.stock && (
                <p className="input-invalid">{formik.errors.stock}</p>
              )}
              <div className="btn-saved-wrapper">
                {/* <Button disabled={!(formik.isValid && formik.dirty)} type="submit" className={formik.errors}> */}
                <Button
                  disabled={
                    !formik.isValid ||
                    sizeProduct.length < 1 ||
                    deliveryProduct.length < 1
                  }
                  type="submit"
                  className={formik.errors}
                >
                  Saved
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </StyledEditProduct>
  );
};

export default PrivateRoute(EditProduct, ['admin']);

// START === STYLING CURRENT PAGE

const StyledEditProduct = styled.div`
  /* START == BREAKPOINT */
  /* ${Breakpoints.lessThan('2xl')`
      background-color: yellow;
    `}
  ${Breakpoints.lessThan('xl')`
      background-color: blue;
    `}
    ${Breakpoints.lessThan('lg')`
    background-color: cyan;
    `}
    ${Breakpoints.lessThan('md')`
    background-color: pink;
    `}
    ${Breakpoints.lessThan('sm')`
    background-color: green;
    `}
    ${Breakpoints.lessThan('xsm')`
    background-color: pink;
    `} */
  padding-bottom: 80px;
  form {
    font-family: Poppins;
    font-style: normal;
    display: flex;
    gap: 61px;
    margin-top: 60px;
    ${Breakpoints.lessThan('lg')`
      flex-direction: column; 
    `}
    .side-left {
      width: 50%;
      ${Breakpoints.lessThan('lg')`
        width: 100%;
      `}
      ${Breakpoints.lessThan('md')`
        width: 100%;
        height: 500px;
      `}
      .image-wrapper {
        position: relative;
        width: 100%;
        height: 80%;
        margin-bottom: 52px;
        ${Breakpoints.lessThan('md')`
          margin-bottom: 25px; 
        `}
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        .btn-circle-wrapper {
          background-color: blue;
          position: absolute;
          background: #ffffff;
          border: 6px solid #ffba33;
          width: 40px;
          height: 40px;
          box-sizing: content-box;
          border-radius: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          right: 10px;
          top: 10px;
          &:hover {
            cursor: pointer;
          }
          .upload {
            position: relative;
            input.input-file {
              width: 100%;
              height: 100%;
              opacity: 0;
              position: absolute;
              top: 0%;
              z-index: 9;
            }
          }
        }
      }
      .date-wrapper {
        width: 60%;
        ${Breakpoints.lessThan('xl')`
          width: 100%;
        `}
      }
    }
    .side-right {
      width: 50%;
      ${Breakpoints.lessThan('lg')`
        width: 100%;
      `}
      .heading-name-product {
        font-weight: 900;
        font-size: 65px;
        line-height: 97px;
        color: #000000;
      }

      .price {
        font-weight: 500;
        font-size: 40px;
        line-height: 60px;
        color: #000000;
      }
      .row {
        margin-bottom: 1.5rem;
        &.price-wrapper {
          display: flex;
          .price {
            padding: 10px 0;
            margin-right: 10px;
          }
          border-bottom: 2px solid #9f9f9f;
        }
        textarea {
          width: 100%;
          height: 100px;
          background-color: transparent;
          &:focus {
            outline: none;
          }
        }
        .line {
          margin-top: 12px;
          border-bottom: 1px solid #9f9f9f;
        }
        select {
          border: 1px solid #9f9f9f;
          box-sizing: border-box;
          border-radius: 10px;
          width: 100%;
          padding: 25px 31px;
          background-color: transparent;
          font-size: 20px;
          line-height: 138.84%;
          letter-spacing: 0.03em;
          color: #9f9f9f;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          option {
            /* width: 50%; */
            /* background-color: yellow; */
          }
          &:focus {
            outline: none;
          }
          &:valid {
            color: #363636;
          }
        }
        &.button-wrapper {
          display: flex;
          gap: 1rem;
          ${Breakpoints.lessThan('xsm')`
            flex-direction: column; 
          `}
          .counter-wrapper {
            display: flex;
            justify-content: space-between;
            width: 250px;
            padding: 24px 28px;
            gap: 1rem;
            align-items: center;
            font-weight: bold;
            font-size: 24px;
            color: #000000;
            border: 1px solid #9f9f9f;
            border-radius: 10px;
            ${Breakpoints.lessThan('xsm')`  
              width: 100%;
          `}
          }
        }
      }
    }
    /* Global Styling in current scope */
    .text {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 25px;
      line-height: 138.84%;
      color: #000000;
      .bold {
        font-weight: bold;
        font-size: 25px;
      }
    }
    .input-invalid {
      color: red;
      font-size: 20px;
      margin-top: 10px;
      &.outside-form {
        margin-top: -10px;
        margin-bottom: 10px;
      }
    }
    .select-group {
      /* width: 415px; */
      overflow: auto;
      display: flex;
      /* flex-direction: row-reverse; */
      /* background-color: yellow; */
      width: 100%;
      gap: 1rem;
      ${Breakpoints.lessThan('lg')`
              flex-wrap: wrap;
            `}
      ${Breakpoints.lessThan('sm')`
              flex-wrap: wrap;
              width: 100%;
            `}
            .size-item {
        width: 70px;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(186, 186, 186, 0.35);
        border-radius: 100%;
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 22px;
        text-align: center;
        color: #4f5665;
        &:hover {
          cursor: pointer;
          opacity: 0.5;
        }
        &.select {
          font-weight: bold;
          font-size: 30px;
        }
      }
      .method-item {
        padding: 18px 24px;
        font-family: Rubik;
        font-style: normal;
        font-size: 20px;
        line-height: 24px;
        border-radius: 20px;
        background: rgba(186, 186, 186, 0.35);
        &.select {
          color: #6a4029;
          font-weight: bold;
        }
        &:hover {
          cursor: pointer;
          opacity: 0.5;
        }
      }
      .select {
        background: #ffba33;
      }
    }
  }
`;

const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;

  .item {
    height: 35px;
    background-color: #ffba33;
    min-width: 100px;
    padding: 2px 5px;
    padding-left: 20px;
    padding-right: 40px;
    margin: 5px;
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 50px;
  }

  button,
  span {
    background-color: grey;
    color: white;
    position: absolute;
    right: 0;
    width: 30px;
    height: 30px;
    border-radius: 50px;
  }
`;

const Checkbox = styled.input`
  display: none;
`;
