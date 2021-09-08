/* eslint-disable @next/next/no-img-element */
import Pagination from '@material-ui/lab/Pagination';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IMG_BGHistoryPage, IMG_DummyProductCard } from '../../src/assets';
import PrivateRoute from '../../src/components/hoc/PrivateRoute';
import { ModalAlertValidation } from '../../src/components/molecules';
import { Breakpoints } from '../../src/utils';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrderCart, decQuantity, incQuantity } from '../../src/redux/action/cartAction';

const CartsPage = () => {
  // const [page, setPage] = useState(1);
  const [selected, setSelected] = useState('');
  // const handlePagination = (event, value) => {
  //   setPage(value);
  // };
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const { cart_multi } = useSelector((state) => state.cart);
  return (
    <StyledHistoryPage>
      <Image src={IMG_BGHistoryPage} alt="background page" layout="fill" className="bg-page" />
      <div className="container">
        <h1 className="heading">Carts</h1>
        <p className="sub-heading">List of carts you have</p>
        <div className="content-history">
          {cart_multi.map((cartValue, index) => {
            return (
              <div
                className="item"
                key={index}
                onClick={() => (selected === index ? setSelected('') : setSelected(index))}
              >
                <div className="image-product">
                  <img src={`${process.env.NEXT_PUBLIC_API_URL}/${cartValue.product_img_product}`} alt="name product" />
                </div>
                <div className="desc">
                  <h4 className="title-product">{cartValue.product_name}</h4>
                  <p className="text">IDR {cartValue.total_price}</p>
                  <p className="text-utility">Quantity : {cartValue.cart_stock}</p>
                  <p className="text-utility">Size : {cartValue.card_size_name}</p>
                  <p className="text-utility">Delivery method : {cartValue.cart_deliver_name}</p>
                </div>
                {selected === index && (
                  <div className="btn-wrapper">
                    <div
                      className="btn delete"
                      onClick={() => {
                        dispatch(
                          decQuantity(cartValue.cart_product_id, cartValue.cart_deliver_id, cartValue.cart_size_id)
                        );
                      }}
                    >
                      <svg width="24" height="4" viewBox="0 0 24 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="24" width="4" height="24" rx="2" transform="rotate(90 24 0)" fill="white" />
                      </svg>
                    </div>
                    <div
                      className="btn delete"
                      onClick={() => {
                        dispatch(
                          incQuantity(cartValue.cart_product_id, cartValue.cart_deliver_id, cartValue.cart_size_id)
                        );
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" width="4" height="24" rx="2" fill="white" />
                        <rect x="24" y="10" width="4" height="24" rx="2" transform="rotate(90 24 10)" fill="white" />
                      </svg>
                    </div>
                    <div
                      className="btn close"
                      onClick={() => {
                        dispatch(
                          deleteOrderCart(cartValue.cart_product_id, cartValue.cart_deliver_id, cartValue.cart_size_id)
                        );
                      }}
                    >
                      <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M2 6H4.11111M4.11111 6H21M4.11111 6V20C4.11111 20.5304 4.33353 21.0391 4.72944 21.4142C5.12535 21.7893 5.66232 22 6.22222 22H16.7778C17.3377 22 17.8746 21.7893 18.2706 21.4142C18.6665 21.0391 18.8889 20.5304 18.8889 20V6H4.11111ZM7.27778 6V4C7.27778 3.46957 7.5002 2.96086 7.89611 2.58579C8.29202 2.21071 8.82899 2 9.38889 2H13.6111C14.171 2 14.708 2.21071 15.1039 2.58579C15.4998 2.96086 15.7222 3.46957 15.7222 4V6M9.38889 11V17M13.6111 11V17"
                          stroke="#6A4029"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="pagination">
        {/* <Pagination className="page" count={10} page={page} onChange={handlePagination} /> */}
      </div>
      <ModalAlertValidation
        show={showModal}
        onClose={() => setShowModal(false)}
        actionDelete={() => {
          console.log('delete item 1');
          // setShowModal(false);
        }}
      />
    </StyledHistoryPage>
  );
};

export default PrivateRoute(CartsPage, ['member', 'admin']);

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
  position: relative;
  padding-top: 150px;
  img {
    z-index: -10;
    object-fit: cover;
  }
  .heading {
    font-family: Rubik;
    font-weight: bold;
    font-size: 40px;
    line-height: 47px;
    text-align: center;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
    margin-bottom: 32px;
  }
  .sub-heading {
    font-family: Rubik;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
    margin-bottom: 40px;
  }
  .content-history {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 26px;
    ${Breakpoints.lessThan('2xl')` 
      grid-template-columns: auto auto auto; 
    `}
    ${Breakpoints.lessThan('xl')` 
      grid-template-columns: auto auto; 
    `}
    ${Breakpoints.lessThan('md')` 
      grid-template-columns: auto; 
    `}
    .item {
      background: #ffffff;
      box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
      border-radius: 20px;
      padding: 16px 28px;
      display: flex;
      gap: 1rem;
      align-items: center;
      position: relative;
      .image-product {
        position: relative;
        width: 75px;
        height: 75px;
        img {
          object-fit: cover;
          z-index: 1;
          border-radius: 100%;
        }
      }
      .desc {
        font-family: Poppins;
        font-style: normal;
        .title-product {
          font-weight: bold;
          font-size: 20px;
          color: #000000;
        }
        .text {
          font-size: 20px;
          color: #895537;
        }
        .text-utility {
          font-size: 15px;
          color: #895537;
        }
      }
      .btn-wrapper {
        display: flex;
        gap: 10px;
        position: absolute;
        right: -20px;
        top: -20px;
        ${Breakpoints.lessThan('xsm')`
          flex-direction: column;
          height: 100%;
          right: 8px;
          top: 0;
          justify-content: center;
        `}
        .btn {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 100%;
          &.delete {
            background: #6a4029;
          }
          &.close {
            background: #ffba33;
          }
          &:hover {
            cursor: pointer;
            opacity: 0.9;
          }
        }
      }
      &:hover {
        cursor: pointer;
        background: #f1f1f1;
      }
    }
  }
  .pagination {
    margin-top: 50px;
    padding: 16px 0;
    display: flex;
    justify-content: center;
    background-color: #ffffff;
    .page {
      ul li button {
        font-size: 18px;
      }
    }
  }
`;
