/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components';
import React, { useState } from 'react';
import router from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../src/components/molecules/Navbar/Navbar';
import Footer from '../../../src/components/molecules/Footer';
import { Breadcrumb, Button, Breadcrumbs } from '../../../src/components/atoms';
import PublicRoute from '../../../src/components/hoc/PublicRoute';
import PrivateRoute from '../../../src/components/hoc/PrivateRoute';
import axiosConfig from '../../../src/config/Axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Breakpoints } from '../../../src/utils';
import { ModalAlertValidation } from '../../../src/components/molecules';

export const getServerSideProps = async (ctx) => {
  try {
    const { params } = ctx;
    // console.log(params);
    const { data } = await (
      await axiosConfig.get(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${params.idProducts}`
      )
    ).data;
    console.log(data);

    return {
      props: {},
    };
  } catch (error) {
    console.log(error.response);
    return {
      props: {},
    };
  }
};

const ProductDetailPage = () => {
  const dummyData = {
    product_id: 15,
    product_name: 'white coffee v1',
    category_id: 1,
    description: 'white coffee dengan citarasa yang enak dan mantap',
    stock: 2,
    price: '100000',
    img_product:
      'https://statik.tempo.co/data/2018/06/03/id_709908/709908_720.jpg',
    delivery_start_date: '2021-09-05T00:37:14.000Z',
    delivery_end_date: '2021-09-05T00:37:14.000Z',
    size: [
      {
        size_id: 32,
        size_name: 'Raa',
      },
      {
        size_id: 33,
        size_name: 'L',
      },
    ],
    delivery: [
      {
        delivery_id: 1,
        delivery_name: 'bink',
      },
      {
        delivery_id: 3,
        delivery_name: 'bink',
      },
    ],
  };

  // MODAL STATE
  const [showModal, setShowModal] = useState(false);

  // Mata Uang Rupiah
  const formatter = new Intl.NumberFormat(['ban', 'id']);
  const [dateBirth, setDateBirth] = useState(new Date());

  // Date Converter
  const start = new Date(dummyData.delivery_start_date);
  const startDay = start.getDay();
  console.log('startDay', startDay);

  return (
    <StyledProductDetailPage>
      <div className="container">
        <Breadcrumbs>
          <Breadcrumb title="Products" to="/products" />
          <Breadcrumb title="> Cold Brew" to="#" active />
        </Breadcrumbs>
        <BodyWrapper>
          <BodyLeft>
            <div className="image">
              {/* <Image src={IMG_Product} alt="" /> */}
              <img src={dummyData.img_product} alt={dummyData.product_name} />
            </div>
            <div className="desc">
              <h1 className="title-product">{dummyData.product_name}</h1>
              <h2>IDR {formatter.format(dummyData.price)}</h2>
            </div>
            <div className="button-action">
              <Button className="btn btn-add">Add To Cart</Button>

              {/* Conditinal rendering : Ini untuk role customer */}
              <Button className="btn btn-ask">Ask the Staff</Button>

              {/* Conditinal rendering : Ini untuk role admin */}
              <Button className="btn btn-ask">Edit Product</Button>
              {/* Conditinal rendering : Ini untuk role admin udah terintegrasi modal coba ditesting dulu*/}
              <Button
                className="btn btn-ask"
                theme="black"
                onClick={() => setShowModal(true)}
              >
                Delete Menu
              </Button>
            </div>
          </BodyLeft>
          <BodyRight>
            <div className="box">
              <div className="description">
                <h3 className="delivery-time">
                  Delivery only on{' '}
                  <span>
                    Monday to <br /> friday
                  </span>{' '}
                  at <span> 1 - 7 pm</span>{' '}
                </h3>
                <h3 className="desc-detail">
                  Cold brewing is a method of brewing that combines ground
                  coffee and cool water and uses time instead of heat to extract
                  the flavor. It is brewed in small batches and steeped for as
                  long as 48 hours.
                </h3>

                <h4>Choose a size</h4>
                <div className="size-check">
                  <label htmlFor={`size_name_R`}>
                    <input type="radio" name="size" id={`size_name_R`} />
                    <span className="btn-check">
                      <p>R</p>
                    </span>
                    <h1></h1>
                  </label>

                  <label htmlFor={`size_name_L`}>
                    <input type="radio" name="size" id={`size_name_L`} />
                    <span className="btn-check">
                      <p>L</p>
                    </span>
                  </label>

                  <label htmlFor={`size_name_XL`}>
                    <input type="radio" name="size" id={`size_name_XL`} />
                    <span className="btn-check">
                      <p>XL</p>
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div className="delivery">
              <h1 className="heading">Choose delivery methods</h1>
              <div className="delivery-check">
                <label htmlFor={`delivery_dine_in`}>
                  <input type="radio" name="delivery" id={`delivery_dine_in`} />
                  <span className="btn-check">
                    <p>Dine in</p>
                  </span>
                </label>

                <label htmlFor={`delivery_door`}>
                  <input type="radio" name="delivery" id={`delivery_door`} />
                  <span className="btn-check">
                    <p>Door delivery</p>
                  </span>
                </label>

                <label htmlFor={`delivery_take_away`}>
                  <input
                    type="radio"
                    name="delivery"
                    id={`delivery_take_away`}
                  />
                  <span className="btn-check">
                    <p>Take away</p>
                  </span>
                </label>
              </div>

              <div className="time">
                <h1>Set Time:</h1>
                <DatePicker
                  name="birth"
                  selected={dateBirth}
                  onChange={(date) => setDateBirth(date)}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                />
              </div>
            </div>
          </BodyRight>
        </BodyWrapper>
        <BodyBottom>
          <div className="content">
            <div className="item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/IMG_Product.png" alt="" />
              <div className="detail">
                <h1 className="title">Cold Brew</h1>
                <h2 className="list">1x Large</h2>
                <h2 className="list">1x Regular</h2>
              </div>
              <div className="counter-wrapper">
                <div className="counter min">
                  <svg
                    width="12"
                    height="5"
                    viewBox="0 0 12 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9479 0.175049V4.75005H0.297852V0.175049H11.9479Z"
                      fill="#6A4029"
                    />
                  </svg>
                </div>
                <div className="result">50</div>
                <div className="counter plus">
                  <svg
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3902 9.05H9.66524V12.875H4.34023V9.05H0.615234V3.975H4.34023V0.125H9.66524V3.975H13.3902V9.05Z"
                      fill="#6A4029"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <Button
              className="btn-checkout"
              onClick={() => router.push('/orders')}
            >
              Checkout
            </Button>
          </div>
        </BodyBottom>
      </div>
      <ModalAlertValidation
        show={showModal}
        onClose={() => setShowModal(false)}
        actionDelete={() => {
          // Menghapus data terpilih
          console.log('delete item 1');
          setShowModal(false);
        }}
      />
    </StyledProductDetailPage>
  );
};

export default PrivateRoute(ProductDetailPage, ['member', 'admin']);

// START === STYLING CURRENT PAGE

const StyledProductDetailPage = styled.div`
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

  background-color: #ededed;
  .container {
    padding-top: 125px;
  }
`;

const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  margin-right: 5%;

  .menu {
    display: flex;
    flex-direction: row;
    a:visited {
      color: brown;
      margin: 0 10px;
    }
  }
`;

const BodyWrapper = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-bottom: 100px;
  margin-top: 32px;
  gap: 150px;
  ${Breakpoints.lessThan('xl')`
  gap: 100px;
    `}
  ${Breakpoints.lessThan('2xl')`
  gap: 80px;
    `}
  ${Breakpoints.lessThan('lg')`
  gap: 40px;
  align-items: flex-start; 
  flex-direction: column; 
  padding-bottom: 50px;
    `} /* ${Breakpoints.lessThan('2xl')`
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

const BodyLeft = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Breakpoints.lessThan('lg')`
      flex-direction: row; 
      width: 100%;
      width:max-content;
    width: 100%;
    gap: 10px;
  `}
  ${Breakpoints.lessThan('md')`
      flex-direction: column; 
    `}

  .image {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${Breakpoints.lessThan('lg')`
    width:max-content;
    `}
    img {
      width: 400px;
      height: 400px;
      border-radius: 100%;
      ${Breakpoints.lessThan('2xl')`
      width:300px;
      height:300px;
      `}
      ${Breakpoints.lessThan('lg')`
        width:150px;
        height:150px;
      `}
    }
  }

  .desc {
    ${Breakpoints.lessThan('lg')`
    flex: 1; 
    `}
    h1.title-product {
      font-size: 60px;
      text-align: center;
      font-weight: bolder;
      ${Breakpoints.lessThan('2xl')`
      font-size: 40px;
    `}
      ${Breakpoints.lessThan('lg')`
    text-align: left; 
    `}
        ${Breakpoints.lessThan('md')`
      width: 100%;
    `}
    }

    h2 {
      font-size: 30px;
      font-weight: normal;
      margin-bottom: 50px;
      ${Breakpoints.lessThan('md')`
       text-align: center;
       margin-bottom: 20px;

    `}
    }
  }

  .button-action {
    width: 250px;
    ${Breakpoints.lessThan('md')`
      width: 100%;
    `}
    .btn {
      margin-bottom: 1rem;
    }
    .btn-add {
      color: white;
      background: #6a4029;
      /* // filter: drop-shadow(0px 6px 20px rgba(255, 186, 51, 0.4)); */
      border-radius: 12px;
      width: 100%;
      height: 80px;
      padding: 13px;
      /* margin-bottom: 30px; */
      ${Breakpoints.lessThan('lg')`
      margin-bottom: 10px; 
    `}
    }

    .btn-ask {
      border-radius: 50px;
      border-radius: 12px;
      height: 80px;
      width: 100%;
      padding: 13px;
    }
  }
`;
const BodyRight = styled.div`
  width: 60%;
  height: 100%;
  ${Breakpoints.lessThan('lg')`
    width: 100%;
    `}
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* // border: 1px solid black; */

  .description {
    width: 100%;
    /* height: 702px; */
    border: none;
    background-color: #ffffff;
    border-radius: 20px;
    /* display: flex; */
    padding: 35px 60px;
    flex-direction: column;
    /* // align-items: center; */

    h3 {
      /* padding: 0px 100px 30px 100px; */
      font-size: 30px;
      color: #6a4029;
      &.delivery-time {
      }
      &.desc-detail {
        margin: 20px 0;
      }
      span {
        font-weight: bolder;
      }
    }

    h4 {
      text-align: center;
      font-size: 30px;
      font-weight: bolder;
    }

    .size-check {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding-left: 50px;
      margin-top: 20px;
      label {
        width: 80px;
        height: 80px;
        cursor: pointer;
        border-radius: 100%;
        margin-right: 50px;
        &:hover input ~ .btn-check {
          background-color: #ffba33;
        }
        input:checked ~ .btn-check {
          background-color: #ffba33;
        }

        /* input[type='radio']:checked ~ {
          -webkit-appearance: none;
        } */

        .btn-check {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80px;
          height: 80px;
          border-radius: 100%;
          background-color: white;
          border: 3px solid #ffba33;
          p {
            position: relative;
            font-size: 2.5em;
            color: black;
            font-weight: bolder;
          }
        }
        input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
      }

      h2 {
        position: relative;
        /* top: -55%; */
        /* left: 73%; */
        /* transform: translate(-50%, -50%); */
        /* font-size: 2.5em; */
        color: black;
        font-weight: bolder;
      }

      input[type='checkbox']:checked ~ .btn-check {
        background-color: #ffba33;
      }
    }
  }

  .delivery {
    margin-top: 20px;
    h1.heading {
      font-size: 30px;
      font-weight: bolder;
      text-align: center;
      margin-bottom: 20px;
    }

    .delivery-check {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding-left: 50px;
      ${Breakpoints.lessThan('sm')`
      flex-direction: column;
      gap: 16px;
    `}
      label {
        width: 150px;
        height: 60px;
        cursor: pointer;
        margin-right: 50px;
        ${Breakpoints.lessThan('sm')`
          width: 100%;
        `}
        &:hover input ~ .btn-check {
          background: #6a4029;
          p {
            color: #ffffff;
          }
        }
        input:checked ~ .btn-check {
          background: #6a4029;
          box-shadow: 0px 6px 20px rgba(137, 85, 55, 0.4);
          p {
            color: #ffffff;
          }
        }
        .btn-check {
          /* // position: absolute; */
          /* // top: 0; */
          /* // left: 0; */
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 15px;
          width: 150px;
          height: 60px;
          background-color: #f4f4f8;
          border: none;
          ${Breakpoints.lessThan('sm')`
          width: 100%;
        `}
          p {
            position: relative;
            font-size: 1.2em;
            color: gray;
            font-weight: bolder;
          }
        }

        input[type='radio'] {
          -webkit-appearance: none;
          position: absolute;
        }

        h2 {
          position: relative;
          top: -55%;
          left: 60%;
          transform: translate(-50%, -50%);
          font-size: 1.2em;
          color: gray;
          font-weight: bolder;
        }

        h1 {
          position: relative;
          top: -55%;
          left: 76%;
          transform: translate(-50%, -50%);
          font-size: 1.2em;
          color: gray;
          font-weight: bolder;
        }

        input[type='checkbox']:checked ~ .btn-check {
          background-color: #6a4029;
        }

        input[type='checkbox']:checked ~ h1 {
          color: white;
        }

        input[type='checkbox']:checked ~ h2 {
          color: white;
        }

        input[type='checkbox']:checked ~ h3 {
          color: white;
        }
      }
    }
  }

  .time {
    display: flex;
    margin-top: 32px;
    justify-content: center;
    h1 {
      width: 100px;
      margin-right: 1rem;
      font-size: 20px;
      font-weight: normal;
    }
    .react-datepicker-wrapper {
      width: max-content;
    }
    input {
      border-bottom: 3px solid lightgray;
      background-color: #ededed;
      outline: none;
    }
  }
`;

const BodyBottom = styled.div`
  position: relative;
  .content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    top: -60px;
    width: 100%;
    ${Breakpoints.lessThan('lg')`
      position: relative;
      top: 0;
    `}
    ${Breakpoints.lessThan('xsm')`
      flex-direction: column;
      gap: 20px;
    `}
       ${Breakpoints.lessThan('md')`
        flex-direction: column; 
      `}
    .item {
      width: 600px;
      padding: 16px 32px;
      height: max-content;
      border: none;
      background-color: #ffffff;
      border-radius: 15px;
      margin-right: 50px;
      box-shadow: 0px 1px 8px 1px #888888;
      display: flex;
      flex-direction: row;
      align-items: center;
      /* padding: 20px; */

      ${Breakpoints.lessThan('sm')`
        width: 100%;
      `}
      ${Breakpoints.lessThan('xsm')`
      flex-direction: column;
    `}
      .detail {
        flex: 1;
        h1.title {
          font-weight: bolder;
          font-size: 18px;
          font-family: Poppins;
          font-style: normal;
          font-weight: 900;
          font-size: 25px;
          line-height: 37px;
          color: #000000;
        }
        h2.list {
          font-family: Poppins;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 30px;
          color: #000000;
        }
      }
      .counter-wrapper {
        display: flex;
        width: 150px;
        justify-content: space-between;
        ${Breakpoints.lessThan('xsm')`
          margin-top: 1rem;
        `}
        .counter {
          width: 40px;
          height: 40px;
          border-radius: 100%;
          background-color: rgba(231, 170, 54, 0.52);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .result {
          font-family: Poppins;
          font-style: normal;
          font-weight: 900;
          font-size: 25px;
          line-height: 37px;
          text-align: center;
          color: #000000;
        }
      }
      img {
        width: 125px;
        height: 125px;
        object-fit: contain;
        border-radius: 100%;
        margin-right: 25px;
      }
    }
    .btn-checkout {
      width: 200px;
      ${Breakpoints.lessThan('md')`
      width: 100%;
      margin-top: 30px;
      `}
    }
  }
`;
