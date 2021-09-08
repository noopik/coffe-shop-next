import styled from 'styled-components';
import {Breakpoints} from '../../../src/utils';
import PrivateRoute from '../../../src/components/hoc/PrivateRoute';
import {Breadcrumb, Breadcrumbs, Button} from '../../../src/components/atoms';
import {IL_IMGDefaultCamera} from '../../../src/assets';
import Image from 'next/image';
import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
// import axios from 'axios';
import axiosConfig from '../../../src/config/Axios';
import {toast} from 'react-toastify';

export const getServerSideProps = async () => {
  try {
    const resultSizes = await axiosConfig.get(`${process.env.NEXT_PUBLIC_API_URL}/sizes/getsizes?pagination=off`);
    const resultDeliveries = await axiosConfig.get(
      `${process.env.NEXT_PUBLIC_API_URL}/deliveries/getdeliveries?pagination=off`
    );
    const resultCategories = await axiosConfig.get(
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
  const [startDate, setStartDate] = useState('');
  const [previewStartDate, setpreviewStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState('');
  const [previewEndDate, setpreviewEndDate] = useState(new Date());
  const [image, setImage] = useState();
  const [errImg, seterrImg] = useState('Please upload product image');
  const [ArrSize, setarrSize] = useState(0);
  const [ArrDelivery, setArrDelivery] = useState(0);

  const validate = Yup.object({
    name: Yup.string().required('Please insert product name').min(3).max(50),
    price: Yup.number().typeError('Price must be number').required('Please insert product price'),
    description: Yup.string().required('Please insert product description').min(10).max(150),
    stock: Yup.number('').typeError('Stock must be number').required('Please insert product stock'),
    // sizes: Yup.array().min(1),
    // deliveries: Yup.array().min(1),
    category: Yup.string().required('Please select product category'),
  });
  const handleSize = (e, formik) => {
    let arrSize = formik.values.sizes;
    if (e.target.checked) {
      arrSize.push(+e.target.value);
      setarrSize((old) => {
        return old + 1;
      });
      document.getElementById(`itemSize${e.target.value}`).className += ' select';
    } else {
      const index = arrSize.indexOf(+e.target.value);
      arrSize.splice(index, 1);
      setarrSize((old) => {
        return old - 1;
      });
      document.getElementById(`itemSize${e.target.value}`).className = 'size-item';
    }
  };

  const handleDelivery = (e, formik) => {
    let arrDeliveries = formik.values.deliveries;
    if (e.target.checked) {
      arrDeliveries.push(+e.target.value);
      setArrDelivery((old) => {
        return old + 1;
      });
      document.getElementById(`methodItem${e.target.value}`).className += ' select';
    } else {
      const index = arrDeliveries.indexOf(+e.target.value);
      arrDeliveries.splice(index, 1);
      setArrDelivery((old) => {
        return old - 1;
      });
      document.getElementById(`methodItem${e.target.value}`).className = 'method-item';
    }
  };

  const handleStartDate = (date) => {
    // 0000-00-00 00:00:00
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minute = ('0' + date.getMinutes()).slice(-2);
    const formatStartDate = `${year}-${month}-${day} ${hours}:${minute}:00`;
    setStartDate(formatStartDate);
    setpreviewStartDate(date);
  };

  const handleEndDate = (date) => {
      // 0000-00-00 00:00:00
    const year = date.getFullYear()
    const month = ("0" + (date.getMonth() + 1)).slice(-2)
    const day = ("0" + date.getDate()).slice(-2)
    const hours = ("0" + date.getHours()).slice(-2)
    const minute = ("0" + date.getMinutes()).slice(-2)
    const formatStartDate = `${year}-${month}-${day} ${hours}:${minute}:00`
    setEndDate(formatStartDate)
    setpreviewEndDate(date)
  }

  return (
    <StyledAddProducts>
      <div className="container">
        <Breadcrumbs>
          <Breadcrumb title="Favorite & Promo" />
          <Breadcrumb title="/ Add new product" active />
        </Breadcrumbs>
        <Formik
          // validateOnMount
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
          validationSchema={validate}
          onSubmit={(values, {resetForm}) => {
            values.image = image;
            values.startDate = startDate;
            values.endDate = endDate;
            // console.log('values submit', values);
            const formData = new FormData();
            formData.append('img_product', image);
            formData.append('stock', values.stock);
            formData.append('product_name', values.name);
            formData.append('delivery_start_date', `${values.startDate}`);
            // 2021-09-05 07:37:14
            formData.append('delivery_end_date', `${values.endDate}`);
            formData.append('price', values.price);
            formData.append('description', values.description);
            for (let i = 0; i < values.sizes.length; i++) {
              formData.append('size_id', values.sizes[i]);
            }
            for (let I = 0; I < values.deliveries.length; I++) {
              formData.append('delivery_id', values.deliveries[I]);
            }
            formData.append('category_id', values.category);
            axiosConfig
              .post(`${process.env.NEXT_PUBLIC_API_URL}/products`, formData)
              .then(() => {
                toast.success('Successfully add product');
                resetForm();
                setImage('');
                values.sizes.map((idSize) => {
                  values.sizes = [];
                  setarrSize(0);
                  document.getElementById(`size${idSize}`).checked = false;
                  document.getElementById(`itemSize${idSize}`).className = 'size-item';
                });
                values.deliveries.map((idDelivery) => {
                  values.deliveries = [];
                  setArrDelivery(0);
                  document.getElementById(`delivery${idDelivery}`).checked = false;
                  document.getElementById(`methodItem${idDelivery}`).className = 'method-item';
                });
                seterrImg('Please upload product image');
                document.getElementById('category-opt').selected = true;
                for (let [key, value] of formData.entries()) {
                  console.log(`FormData = ${key}: ${value}`);
                }
                console.log(`Formik values = ${values}`);
              })
              .catch((err) => {
                console.log(err.response);
                toast.warning('Insert data failed');
                for (let [key, value] of formData.entries()) {
                  console.log(`${key}: ${value}`);
                }
              });
          }}
        >
          {(formik) => (
            <Form className="form-product-wrapper">
              <div className="left-side">
                <div className="image-wrapper">
                  <div className="image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {/* <img src={IL_IMGDefaultCamera} alt="image product" /> */}
                    <Image src={image ? URL.createObjectURL(image) : IL_IMGDefaultCamera} alt="image" layout="fill" />
                  </div>
                </div>
                {errImg && <label className="error text-center block mb-5">{errImg}</label>}
                <Button className="btn" theme="black">
                  Take a Picture
                </Button>
                <div className="btn-upload-image">
                  <Button type='button' className="">Choose from Gallery</Button>
                  <input
                    type="file"
                    className="input-file"
                    accept="image/jpeg, image/png"
                    onChange={(e) => {
                      if (e.target.files[0].type === 'image/png' || e.target.files[0].type === 'image/jpeg') {
                        if (e.target.files[0].size > 1048576 * 2) {
                          seterrImg('max size file is 2mb');
                          setImage('');
                        } else {
                          setImage(e.target.files[0]);
                          seterrImg('');
                        }
                      } else {
                        seterrImg('Only image is allowed');
                        setImage('');
                      }
                    }}
                    name="image"
                  />
                </div>
                <div className="select-section">
                  <h3 className="heading">Delivery Hour :</h3>
                  <div className="select-date-time">
                    {startDate === '' && <label className='error'>Please select start date delivery</label>}
                    <DatePicker
                      className="select-custom"
                      id="startDate"
                      name="startDate"
                      selected={previewStartDate}
                      onChange={(date) => handleStartDate(date)}
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
                  {endDate === '' && <label className='error'>Please select end date delivery</label>}
                    <DatePicker
                      className="select-custom"
                      id="endDate"
                      name="endDate"
                      selected={previewEndDate}
                      onChange={(date) => handleEndDate(date)}
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
                {formik.errors.stock && <label className="error">{formik.errors.stock}</label>}
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
                  <div className={`line-bottom ${formik.errors.name && 'is-invalid'}`} />
                  {formik.errors.name && <label className="error">{formik.errors.name}</label>}
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
                  <div className={`line-bottom ${formik.errors.price && 'is-invalid'}`} />
                  {formik.errors.price && <label className="error">{formik.errors.price}</label>}
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
                  <div className={`line-bottom ${formik.errors.description && 'is-invalid'}`} />
                  {formik.errors.description && <label className="error">{formik.errors.description}</label>}
                </div>
                <div className="input-wrapper">
                  <label className="heading">Input product size :</label>
                  <p className="paragraph">Click size you want to use for this product</p>
                  <div className="select-group">
                    {sizes &&
                      sizes.map((size, index) => (
                        <div key={index}>
                          <label htmlFor={`size${size.size_id}`}>
                            <div className="size-item" id={`itemSize${size.size_id}`}>
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
                        </div>
                      ))}
                  </div>
                  {ArrSize < 1 && <label className="error">Please select size for this product</label>}
                </div>
                <div className="input-wrapper">
                  <label className="heading">Input delivery methods :</label>
                  <p className="paragraph">Click methods you want to use for this product</p>
                  <div className="select-group">
                    {deliveries &&
                      deliveries.map((delivery, index) => (
                        <div key={index}>
                          <label htmlFor={`delivery${delivery.delivery_id}`}>
                            <div className="method-item" id={`methodItem${delivery.delivery_id}`}>
                              <p>{delivery.delivery_name}</p>
                            </div>
                          </label>
                          <Checkbox
                            type="checkbox"
                            id={`delivery${delivery.delivery_id}`}
                            value={delivery.delivery_id}
                            onChange={(e) => handleDelivery(e, formik)}
                          />
                        </div>
                      ))}
                  </div>
                  {ArrDelivery < 1 && <label className="error">Please select delivery for this product</label>}
                </div>
                <div className="input-wrapper">
                  <label className="heading">Input category :</label>
                  <p className="paragraph">Select category you want to use for this product</p>
                  <div className="input-wrapper">
                    <StyledSelect name="category" id="" onChange={formik.handleChange}>
                      <option id="category-opt" value="" selected>
                        select category
                      </option>
                      {categories &&
                        categories.map((category, index) => (
                          <option key={index} value={category.category_id}>
                            {category.category_name}
                          </option>
                        ))}
                    </StyledSelect>
                    {formik.errors.category && <label className="error">{formik.errors.category}</label>}
                  </div>
                </div>
                <div className="button-action">
                  {/* <input type="submit" placeholder="submit" /> */}
                  {/* <button type="submit">Submit</button> */}
                  <Button
                    theme={
                      !(formik.isValid && formik.dirty) || !image || ArrSize < 1 || ArrDelivery < 1 || startDate === ''
                        ? 'gray'
                        : 'brown'
                    }
                    type="submit"
                    disabled={
                      !(formik.isValid && formik.dirty) || !image || ArrSize < 1 || ArrDelivery < 1 || startDate === ''
                    }
                  >
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

export default PrivateRoute(AddProducts,['admin']);

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
            &.is-invalid {
              border-color: red;
            }
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
            flex-direction: row-reverse;
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
      .error {
        color: red;
        margin-top: 10px;
        font-family: Rubik;
        font-size: 1rem;
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
