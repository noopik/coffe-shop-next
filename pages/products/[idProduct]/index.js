import styled from 'styled-components';
import React, { useState } from 'react';
import router from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../src/components/molecules/Navbar/Navbar';
import Footer from '../../../src/components/molecules/Footer';
import { Button } from '../../../src/components/atoms';

const ProductDetailPage = () => {
  return (
    <StyledProductDetailPage>
      <Navbar />
      <Container>
        <div className="menu">
          <Link href="/products">
            <a className="product-favourite">Favourite and Promo </a>
          </Link>
          <Link href="/products/12">
            {/* <a className="product-detail"> >  Cold Brew</a> */}
          </Link>
        </div>
        <BodyWrapper>
          <BodyLeft>
            <div className="image">
              {/* <Image src={IMG_Product} alt="" /> */}
              <img src="/IMG_Product.png" alt="" />
            </div>
            <h1>Cold Brew</h1>
            <h2>IDR 30.000</h2>
            <Button className="btn-add">Add To Cart</Button>
            <Button className="btn-ask">Ask the Staff</Button>
          </BodyLeft>
          <BodyRight>
            <div className="box">
              <div className="description">
                <h3>
                  Delivery only on{' '}
                  <span>
                    Monday to <br /> friday
                  </span>{' '}
                  at <span> 1 - 7 pm</span>{' '}
                </h3>
                <h3>
                  Cold brewing is a method of brewing that combines ground
                  coffee and cool water and uses time instead of heat to extract
                  the flavor. It is brewed in small batches and steeped for as
                  long as 48 hours.
                </h3>

                <h4>Choose a size</h4>
                <div className="size-check">
                  <label>
                    <input type="checkbox" name="" id="" />
                    <span className="btn-check"></span>
                    <h1>R</h1>
                  </label>

                  <label>
                    <input type="checkbox" name="" id="" />
                    <span className="btn-check"></span>
                    <h1>L</h1>
                  </label>

                  <label>
                    <input type="checkbox" name="" id="" />
                    <span className="btn-check"></span>
                    <h2>XL</h2>
                  </label>
                </div>
              </div>
            </div>

            <div className="delivery">
              <h1>Choose delivery methods</h1>
              <div className="delivery-check">
                <label>
                  <input type="checkbox" name="" id="" />
                  <span className="btn-check"></span>
                  <h1>Dine in</h1>
                </label>

                <label>
                  <input type="checkbox" name="" id="" />
                  <span className="btn-check"></span>
                  <h2>Door delivery</h2>
                </label>

                <label>
                  <input type="checkbox" name="" id="" />
                  <span className="btn-check"></span>
                  <h3>Take away</h3>
                </label>
              </div>

              <div className="time">
                <h1>Set Time:</h1>
                <input
                  type="text"
                  placeholder="Enter the time you'll arrived"
                />
              </div>
            </div>
          </BodyRight>
        </BodyWrapper>
      </Container>
      <BodyBottom>
        <div className="item">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/IMG_Product.png" alt="" />
          <div className="detail">
            <h1>Cold Brew</h1>
            <h2>1x Large</h2>
            <h2>1x Regular</h2>
          </div>
        </div>
        <Button className="btn-checkout">Checkout</Button>
      </BodyBottom>
      <Footer />
    </StyledProductDetailPage>
  );
};

export default ProductDetailPage;

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
`;

const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  padding-top: 20px;
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
  height: 1000px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const BodyLeft = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 10%;

  .image {
    width: 482px;
    height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    img {
      width: 400px;
      height: 400px;
      border-radius: 100%;
    }
  }

  h1 {
    font-size: 60px;
    font-weight: bolder;
  }

  h2 {
    font-size: 30px;
    font-weight: normal;
    margin-bottom: 50px;
  }

  .btn-add {
    color: white;
    background: #6a4029;
    /* // filter: drop-shadow(0px 6px 20px rgba(255, 186, 51, 0.4)); */
    border-radius: 12px;
    width: 350px;
    height: 80px;
    padding: 13px;
    margin-bottom: 30px;
  }

  .btn-ask {
    border-radius: 50px;
    border-radius: 12px;
    height: 80px;
    width: 350px;
    padding: 13px;
  }
`;
const BodyRight = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* // border: 1px solid black; */

  .description {
    width: 100%;
    height: 702px;
    border: none;
    background-color: white;
    border-radius: 20px;
    display: flex;
    padding-top: 80px;
    flex-direction: column;
    /* // align-items: center; */

    h3 {
      padding: 0px 100px 30px 100px;
      font-size: 30px;
      color: #6a4029;

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
    }

    label {
      width: 80px;
      height: 80px;
      cursor: pointer;
      border-radius: 100%;
      margin-right: 50px;

      .btn-check {
        /* // position: absolute; */
        /* // top: 0; */
        /* // left: 0; */
        display: block;
        width: 80px;
        height: 80px;
        border-radius: 100%;
        background-color: white;
        border: 3px solid #ffba33;
      }

      input[type='checkbox'] {
        -webkit-appearance: none;
      }

      h1 {
        position: relative;
        top: -55%;
        left: 85%;
        transform: translate(-50%, -50%);
        font-size: 2.5em;
        color: black;
        font-weight: bolder;
      }

      h2 {
        position: relative;
        top: -55%;
        left: 73%;
        transform: translate(-50%, -50%);
        font-size: 2.5em;
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
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 30px;
      font-weight: bolder;
    }

    .delivery-check {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding-left: 50px;
    }

    label {
      width: 150px;
      height: 60px;
      cursor: pointer;
      margin-right: 50px;

      .btn-check {
        /* // position: absolute; */
        /* // top: 0; */
        /* // left: 0; */
        display: block;
        border-radius: 15px;
        width: 150px;
        height: 60px;
        background-color: #f4f4f8;
        border: none;
      }

      input[type='checkbox'] {
        -webkit-appearance: none;
      }

      h3 {
        position: relative;
        top: -55%;
        left: 70%;
        transform: translate(-50%, -50%);
        font-size: 1.2em;
        color: gray;
        font-weight: bolder;
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

  .time {
    display: flex;
    flex-direction: row;
    margin-top: 10%;
    h1 {
      font-size: 20px;
      margin-right: 20px;
      font-weight: normal;
    }

    input {
      width: 300px;
      height: 40px;
      opacity: 0.8;
      border-bottom: 3px solid lightgray;
      background-color: #ededed;
      outline: none;
    }
  }
`;

const BodyBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  z-index: 10;
  top: 142%;
  left: 0%;

  .item {
    width: 600px;
    height: 120px;
    border: none;
    background-color: white;
    border-radius: 15px;
    margin-right: 50px;
    box-shadow: 0px 1px 8px 1px #888888;
    display: flex;
    flex-direction: row;
    padding: 20px;

    img {
      width: 80px;
      height: 80px;
      object-fit: contain;
      border-radius: 100%;
      margin-right: 50px;
    }

    h1 {
      font-weight: bolder;
      font-size: 18px;
    }
  }
  .btn-checkout {
    width: 200px;
  }
`;
