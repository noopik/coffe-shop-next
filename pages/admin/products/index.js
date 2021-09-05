import styled from 'styled-components';
import { Breakpoints } from '../../../src/utils';
import PrivateRoute from '../../../src/components/hoc/PrivateRoute';
import Link from 'next/link';
import { Breadcrumb, Breadcrumbs, Button } from '../../../src/components/atoms';
import { IL_IMGDefaultCamera } from '../../../src/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export const getServerSideProps = async () => {
  try {
    const resultSizes = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/sizes/getsizes?pagination=off`
    );
    const resultDeliveries = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/deliveries/getdeliveries?pagination=off`
    );
    const resultCategories = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/getcategory?pagination=off`
    );
    const sizes = resultSizes.data.data;
    const deliveries = resultDeliveries.data.data;
    const categories = resultCategories.data.data;
    return {
      props: {
        sizes,
        deliveries,
        categories,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};

const AddProducts = (props) => {
  const sizes = props.sizes;
  const deliveries = props.deliveries;
  const categories = props.categories;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [image, setImage] = useState();

  const validate = Yup.object({
    image: Yup.string().required('Image is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    phone: Yup.number().required('Password is required'),
  });

  const handleSize = (e, formik) => {
    let arrSize = formik.values.sizes;
    if (e.target.checked) {
      arrSize.push(+e.target.value);
      document.getElementById(`itemSize${e.target.value}`).className +=
        ' select';
    } else {
      const index = arrSize.indexOf(+e.target.value);
      arrSize.splice(index, 1);
      document.getElementById(`itemSize${e.target.value}`).className =
        'size-item';
    }
    // console.log(e);
  };

  const handleDelivery = (e, formik) => {
    let arrDeliveries = formik.values.deliveries;
    if (e.target.checked) {
      arrDeliveries.push(+e.target.value);
      document.getElementById(`methodItem${e.target.value}`).className +=
        ' select';
    } else {
      const index = arrDeliveries.indexOf(+e.target.value);
      arrDeliveries.splice(index, 1);
      document.getElementById(`methodItem${e.target.value}`).className =
        'method-item';
    }
  };

  return (
    <StyledAddProducts>
      <div className="container">
        <Breadcrumbs>
          <Breadcrumb title="Favorite & Promo" />
          <Breadcrumb title="/ Add new product" active />
        </Breadcrumbs>
        <Formik
          initialValues={{
            image: '',
            startDate: '',
            endDate: '',
            stock: '',
            name: '',
            price: '',
            description: '',
            sizes: [],
            deliveries: [],
            category: '',
          }}
          // validationSchema={validate}
          onSubmit={(values, { resetForm }) => {
            console.log('values submit', values);
            console.log('images', image);
            console.log('startDate', startDate);
            console.log('endDate', endDate);
            resetForm();
          }}
        >
          {(formik) => (
            <Form className="form-product-wrapper">
              <div className="left-side">
                <div className="image-wrapper">
                  <div className="image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {/* <img src={IL_IMGDefaultCamera} alt="image product" /> */}
                    <Image
                      src={IL_IMGDefaultCamera}
                      alt="image"
                      layout="fill"
                    />
                  </div>
                </div>
                <Button className="btn" theme="black">
                  Take a Picture
                </Button>
                <div className="btn-upload-image">
                  <Button className="">Choose from Gallery</Button>
                  <input
                    type="file"
                    className="input-file"
                    onChange={(e) => {
                      // console.log(e.target.files);
                      setImage(e.target.files);
                    }}
                    // value={image}
                    name="image"
                  />
                </div>
                <div className="select-section">
                  <h3 className="heading">Delivery Hour :</h3>
                  <div className="select-date-time">
                    <DatePicker
                      className="select-custom"
                      id="startDate"
                      name="startDate"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      // onChange={formik.handleChange}
                      // value={formik.values.startDate}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      timeCaption="time"
                      dateFormat="MMMM d, yyyy h:mm aa"
                    />
                  </div>
                  <div className="select-date-time">
                    <DatePicker
                      className="select-custom"
                      id="endDate"
                      name="endDate"
                      selected={endDate}
                      // onChange={formik.handleChange}
                      // value={formik.values.endDate}
                      onChange={(date) => setEndDate(date)}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      timeCaption="time"
                      dateFormat="MMMM d, yyyy h:mm aa"
                    />
                  </div>
                </div>
                <div className="select-section">
                  <h3 className="heading">Input stock :</h3>
                  <input
                    type="text"
                    name="stock"
                    className="select-custom"
                    placeholder="Input stock"
                    onChange={formik.handleChange}
                    value={formik.values.stock}
                  />
                </div>
              </div>
              <div className="right-side">
                <div className="input-wrapper">
                  <label className="heading">Name :</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder="Type product name min. 50 characters"
                  />
                  <div className="line-bottom" />
                </div>
                <div className="input-wrapper">
                  <label className="heading">Price :</label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                    placeholder="Type the price"
                  />
                  <div className="line-bottom" />
                </div>
                <div className="input-wrapper">
                  <label className="heading">Description :</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    placeholder="Describe your product min. 150 characters"
                  />
                  <div className="line-bottom" />
                </div>
                <div className="input-wrapper">
                  <label className="heading">Input product size :</label>
                  <p className="paragraph">
                    Click size you want to use for this product
                  </p>
                  <div className="select-group">
                    {sizes &&
                      sizes.map((size) => (
                        <>
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
                            onChange={(e) => handleSize(e, formik)}
                          />
                        </>
                      ))}
                  </div>
                </div>
                <div className="input-wrapper">
                  <label className="heading">Input delivery methods :</label>
                  <p className="paragraph">
                    Click methods you want to use for this product
                  </p>
                  <div className="select-group">
                    {deliveries &&
                      deliveries.map((delivery) => (
                        <>
                          <label htmlFor={`delivery${delivery.delivery_id}`}>
                            <div
                              className="method-item"
                              id={`methodItem${delivery.delivery_id}`}
                            >
                              <p>{delivery.delivery_name}</p>
                            </div>
                          </label>
                          <Checkbox
                            type="checkbox"
                            id={`delivery${delivery.delivery_id}`}
                            value={delivery.delivery_id}
                            onChange={(e) => handleDelivery(e, formik)}
                          />
                        </>
                      ))}
                  </div>
                </div>
                <div className="input-wrapper">
                  <label className="heading">Input category :</label>
                  <p className="paragraph">
                    Select category you want to use for this product
                  </p>
                  <div className="input-wrapper">
                    <StyledSelect
                      name="category"
                      id=""
                      onChange={formik.handleChange}
                    >
                      <option value="" selected>
                        select category
                      </option>
                      {categories &&
                        categories.map((category, index) => (
                          <option key={index} value={category.category_id}>
                            {category.category_name}
                          </option>
                        ))}
                    </StyledSelect>
                  </div>
                </div>
                <div className="button-action">
                  {/* <input type="submit" placeholder="submit" /> */}
                  {/* <button type="submit">Submit</button> */}
                  <Button theme="brown" type="submit">
                    Save Product
                  </Button>
                  <Button theme="gray">Cancel</Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </StyledAddProducts>
  );
};

export default PrivateRoute(AddProducts);

// START === STYLING CURRENT PAGE

const StyledAddProducts = styled.div`
  .container {
    margin-top: 120px;
    .form-product-wrapper {
      display: flex;
      gap: 148px;
      ${Breakpoints.lessThan('lg')`
          gap: 100px;
          `}
      ${Breakpoints.lessThan('sm')`
          gap: 20px;
          `}
      ${Breakpoints.lessThan('sm')`
        flex-direction: column;
      `} 
      margin-top: 94px;
      margin-bottom: 110px;
      .left-side {
        width: 391px;
        ${Breakpoints.lessThan('lg')`
          width: 250px;
        `}
        ${Breakpoints.lessThan('lg')`
          width: 100%;
        `}
        .image-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 34px;
          .image {
            position: relative;
            width: 300px;
            height: 300px;
            ${Breakpoints.lessThan('lg')`
              width: 200px;
              height: 200px;
            `}
            img {
              border-radius: 100%;
              object-fit: cover;
            }
          }
        }
        .btn {
          margin-bottom: 1rem;
        }
        .btn-upload-image {
          position: relative;
          margin-bottom: 80px;
          .input-file {
            position: absolute;
            width: 100%;
            left: 0;
            height: 100%;
            opacity: 0;
          }
        }
        .select-section {
          .heading {
          }
          input.select-custom {
            width: 100%;
            padding: 16px;
            background: #ffffff;
            border: 1px solid #9f9f9f;
            border-radius: 20px;
            font-family: Poppins;
            font-size: 20px;
            line-height: 138.84%;
            letter-spacing: 0.03em;
            color: #9f9f9f;
            margin-bottom: 24px;
            &:focus {
              outline: none;
            }
            &:valid {
              color: #4f5665;
            }
          }
        }
      }
      .right-side {
        flex: 1;
        .input-wrapper {
          display: flex;
          flex-direction: column;
          margin-bottom: 3rem;
          label {
            margin-bottom: 8px;
          }
          input {
            padding: 10px 0;
            font-family: Rubik;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 24px;
            color: #9f9f9f;
            background-color: transparent;

            &:focus {
              outline: none;
            }
            &:valid {
              color: #4f5665;
            }
          }
          .line-bottom {
            border: 1px solid #4f5665;
          }
          .paragraph {
            font-family: Rubik;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 24px;
            color: #9f9f9f;
            margin-bottom: 20px;
          }
          .select-group {
            width: 415px;
            overflow: auto;
            display: flex;
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
        .button-action {
          button {
            margin-bottom: 25px;
          }
        }
      }
      /* Global Styling di Scope Form-Product-Wrapper */
      .heading {
        font-family: Rubik;
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 30px;
        color: #6a4029;
        margin-bottom: 20px;
      }
    }
  }
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
`;

const Checkbox = styled.input`
  display: none;
`;

const StyledSelect = styled.select`
  background-color: rgba(186, 186, 186, 0.35);
  color: #4f5665;
  width: 100%;
  height: 64px;
  border-radius: 10px;
  padding-left: 25px;
  font-size: 18px;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 992px) {
    width: 50%;
  }
`;
