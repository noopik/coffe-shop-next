/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ICBank, ICCars, ICHall } from '../../src/assets';
import { CardWraper, Button, CardOrder } from '../../src/components/atoms';
import PrivateRoute from '../../src/components/hoc/PrivateRoute';
import { Breakpoints } from '../../src/utils';
import { useSelector } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import { createOrder } from '../../src/redux/action/orderAction';
import router from 'next/router';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const OrdersPage = ({ user, auth }) => {
  const dispatch = useDispatch();
  const [forceUpdate, setForceUpdate] = useState(false);
  const validator = useRef(new SimpleReactValidator({ className: 'text-validator', autoForceUpdate: forceUpdate }));
  const [formOrder, setFormOrder] = useState({
    address: user.address,
    phone_number: user.phone_number,
    payment: '',
  });
  const formOrderHandler = (e) => {
    setFormOrder((oldValue) => ({
      ...oldValue,
      [e.target.name]: e.target.value,
    }));
  };
  const { cart_multi } = useSelector((state) => state.cart);
  const totalPrice = (cart_multi) => {
    let price = 0;
    cart_multi.forEach((cartValue) => {
      price += cartValue.total_price;
    });
    return price;
  };
  const formatter = new Intl.NumberFormat(['ban', 'id']);
  useEffect(() => {
    if (!totalPrice(cart_multi) > 0) {
      router.push('/carts');
    }
  }, []);
  return (
    <StyledHistoryPage>
      <div className="container">
        <div className="side-left">
          <h1 className="heading-page">Checkout your item now!</h1>
          <CardWraper className="order-summary-wrapper">
            <h3 className="heading-summary">Order Summary</h3>
            <div className="body-card-summary">
              {cart_multi.map((cartValue, index) => (
                <CardOrder
                  nameProduct={cartValue.product_name}
                  key={index}
                  imageProduct={`${process.env.NEXT_PUBLIC_API_URL}/${cartValue.product_img_product}`}
                  total={cartValue.cart_stock}
                  price={cartValue.total_price}
                  size={`Size : ${cartValue.cart_size_name}`}
                />
              ))}
            </div>
            <div className="divider" />
            <div className="total">
              <p className="text-bold">TOTAL</p>
              <p className="text-bold">IDR {formatter.format(totalPrice(cart_multi))}</p>
            </div>
          </CardWraper>
        </div>
        <div className="side-right">
          <form>
            <div className="row">
              <div className="heading-section-row">
                <h4 className="heading">Address details</h4>
                <button>Edit</button>
              </div>
              <div className="body-section-row">
                <CardWraper className="address-wrapper">
                  <textarea
                    onChange={formOrderHandler}
                    onFocus={() => validator.current.showMessageFor('address')}
                    value={formOrder.address || ''}
                    name="address"
                    placeholder="Address"
                  ></textarea>
                  {validator.current.message('address', formOrder.address, 'required|min:10')}
                  <input
                    onChange={formOrderHandler}
                    onFocus={() => validator.current.showMessageFor(`phone_number`)}
                    type="text"
                    name="phone_number"
                    value={formOrder.phone_number || ''}
                    placeholder="Your phone number"
                  />
                  {validator.current.message('phone_number', formOrder.phone_number, 'required|numeric|min:11|max:13')}
                </CardWraper>
              </div>
            </div>
            <div className="row">
              <div className="heading-section-row">
                <h4 className="heading">Payment method</h4>
              </div>
              <div className="body-section-row">
                <CardWraper className="method-wrapper">
                  <label htmlFor="card">
                    <input type="radio" onChange={formOrderHandler} name="payment" value="credit_card" id="card" />
                    <span className="circle-wrapper">
                      <div className="circle" />
                    </span>
                    <Image src={ICBank} alt="bank" width={40} height={40} />
                    <p>Card</p>
                  </label>
                  <label htmlFor="bankAccount">
                    <input type="radio" onChange={formOrderHandler} name="payment" value="bank" id="bankAccount" />
                    <span className="circle-wrapper">
                      <div className="circle" />
                    </span>
                    <Image src={ICHall} alt="hall" width={40} height={40} />
                    <p>Bank account</p>
                  </label>
                  <label htmlFor="cod">
                    <input type="radio" onChange={formOrderHandler} name="payment" value="delivery" id="cod" />
                    <span className="circle-wrapper">
                      <div className="circle" />
                    </span>
                    <Image src={ICCars} alt="bank" width={40} height={40} />
                    <p>Cash on delivery</p>
                  </label>
                  {validator.current.message('payment', formOrder.payment, 'required')}
                </CardWraper>
                <Button
                  type="button"
                  onClick={() => {
                    if (validator.current.allValid() && totalPrice(cart_multi) > 0) {
                      dispatch(createOrder(cart_multi, formOrder, totalPrice(cart_multi), router));
                    } else if (!validator.current.allValid() || !totalPrice(cart_multi) > 0) {
                      setForceUpdate(!forceUpdate);
                      validator.current.showMessages();
                      if (!totalPrice(cart_multi) > 0) {
                        toast.warn('Empty order cart');
                      }
                    }
                  }}
                  theme="brown"
                  className="button-pay"
                >
                  Confirm and Pay
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </StyledHistoryPage>
  );
};

export default PrivateRoute(OrdersPage, ['member', 'admin']);

// START === STYLING CURRENT PAGE

const StyledHistoryPage = styled.div`
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
  background-image: url('/BGPaymentsPage.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  .text-validator {
    color: red;
    fonr-size: 10px;
  }
  .container {
    display: flex;
    padding-top: 125px;
    padding-bottom: 100px;
    ${Breakpoints.lessThan('lg')`
      gap: 20px; 
    `}
    ${Breakpoints.lessThan('md')`
      flex-direction: column;
    `}
    .side-left {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
      ${Breakpoints.lessThan('md')`
      width: 100%;
      align-items: flex-start;
    `}
      .heading-page {
        font-family: Rubik;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 47px;
        color: #ffffff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
        width: 400px;
        margin-bottom: 32px;
        ${Breakpoints.lessThan('md')`
          width: 100%;
          text-align: center;
        `}
      }
      .order-summary-wrapper {
        width: 500px;
        padding: 43px;
        font-family: Poppins;
        font-style: normal;

        ${Breakpoints.lessThan('lg')`
          width: 100%; 
        `}
        ${Breakpoints.lessThan('md')`
          width: 100%;
        `}
        .heading-summary {
          font-weight: bold;
          font-size: 35px;
          line-height: 52px;
          color: #362115;
          text-align: center;
          margin-bottom: 50px;
        }
        .body-card-summary {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-height: 300px;
          overflow-y: scroll;
        }
        .divider {
          border: 0.5px solid #000000;
          margin: 18px 0;
          opacity: 0.3;
        }
        .row {
          display: flex;
          justify-content: space-between;
          .sub-heading {
            /* font-family: Poppins;
font-style: normal;
font-weight: normal; */
            font-size: 20px;
            line-height: 30px;
            color: #362115;
          }
        }
        .total {
          font-family: Poppins;
          font-style: normal;
          font-weight: bold;
          font-size: 30px;
          line-height: 45px;
          color: #362115;
          display: flex;
          justify-content: space-between;
          margin-top: 45px;
        }
      }
    }
    .side-right {
      width: 50%;
      font-family: Poppins;
      font-style: normal;
      display: flex;
      flex-direction: column;
      align-items: center;
      ${Breakpoints.lessThan('lg')`
      width: 40%;
      `}
      ${Breakpoints.lessThan('md')`
      align-items: stretch;
      width: 100%;
    `}
      .row {
        max-width: 700px;
        margin-bottom: 40px;
        .heading-section-row {
          display: flex;
          justify-content: space-between;
          .heading {
            font-weight: bold;
            font-size: 25px;
            line-height: 37px;
            color: #ffffff;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
            margin-bottom: 1rem;
          }
          button {
            font-weight: bold;
            font-size: 15px;
            line-height: 22px;
            color: #ffffff;
          }
        }
        .body-section-row {
          .address-wrapper {
            display: flex;
            flex-direction: column;
            padding: 1rem;
            font-family: Poppins;
            font-style: normal;
            .row {
              margin: 0;
              display: flex;
              ${Breakpoints.lessThan('xl')`
                flex-direction: column;
              `}
              label {
                font-weight: bold;
                font-size: 20px;
                line-height: 30px;
                color: #000000;
              }
            }
          }
          input,
          textarea {
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 30px;
            color: #000000;
            &:focus {
              outline: none;
            }
            ${Breakpoints.lessThan('xl')`
            width: 100%;
          `}
          }
          .method-wrapper {
            padding: 16px;
            label {
              display: flex;
              align-items: center;
              gap: 1rem;
              margin-bottom: 16px;
              ${Breakpoints.lessThan('md')`
                margin-bottom: 16px;
              `}
              &:hover {
                cursor: pointer;
              }
              input[type='radio'] {
                -webkit-appearance: none;
                position: absolute;
              }
              &:hover input:checked ~ .circle-wrapper {
                display: flex;
                justify-content: center;
                align-items: center;
                .circle {
                  width: 10px;
                  border-radius: 100%;
                  height: 10px;
                  background-color: #6a4029;
                }
              }
              input:checked ~ .circle-wrapper {
                display: flex;
                justify-content: center;
                align-items: center;
                .circle {
                  width: 10px;
                  border-radius: 100%;
                  height: 10px;
                  background-color: #6a4029;
                }
              }
              .circle-wrapper {
                border: 1px solid #6a4029;
                box-sizing: border-box;
                height: 20px;
                width: 20px;
                border-radius: 100%;
              }
            }
          }
          .button-pay {
            margin-top: 32px;
          }
        }
      }
    }
  }
`;
