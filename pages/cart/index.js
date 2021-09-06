import styled from 'styled-components';
import React, { useState } from 'react';
import router from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import PrivateRoute from '../../src/components/hoc/PrivateRoute';
import { Breakpoints } from '../../src/utils';
import Button from '../../src/components/atoms/Button/index'
import IMG_CartItem from '../../src/assets/images/IMG_CartItem.png'
import IMG_Card from '../../src/assets/icons/IMG_Card.png'
import IMG_Bank from '../../src/assets/icons/IMG_Bank.png'
import IMG_Cod from '../../src/assets/icons/IMG_Cod.png'


const CartPage = () => {
  return (
    <StyledCartPage>
      <Container>
        <BodyWrapper>
          <BodyLeft>
            <h1>Checkout your <br /> item now!</h1>
            <div className="order-summary">
              <h2>Order Summary</h2>
              <div className="item">
                <div className="item-pic">
                  <Image src={IMG_CartItem} alt="" />
                </div>
                <div className="item-detail">
                  <h4>Hazelnut Latte</h4>
                  <h4>1x</h4>
                  <h4>Regular</h4>
                </div>
                <div className="item-price">
                  <h4>IDR 24.000</h4>
                </div>
              </div>
              <div className="price">
                <h4>Subtotal <span>IDR 120.000</span></h4>
                <h4>Tax & Fees <span>IDR 20.000</span></h4>
                <h4>Shipping <span>IDR 10.000</span></h4>
              </div>
              <div className="total"><h2>Total  <span>IDR 150.000</span></h2></div>

            </div>
          </BodyLeft>
          <BodyRight>
            <h3>Address Detail <Link href="/cart">
              <a className="edit">edit</a>
            </Link></h3>
            <div className="address">
              <h3> <span>Delivery</span> to Iskandar Street</h3>
              <hr />
              <h3>Km 5 refinery road oppsite republic <br /> road, effurun, Jakarta</h3>
              <hr />
              <h3>+62 81348287878</h3>
            </div>

            <h3>Payment methods</h3>
            <div className="methods">
              <div className="paycard">
                <input type="radio" value="Card" name="gender" /> <div className='icon-card'><Image src={IMG_Card} alt="" /></div> Card
              </div>
              <hr />
              <div className="paybank">
                  
                <input type="radio" value="Bank Account" name="gender" /> <div className='icon-bank'><Image src={IMG_Bank} alt="" /></div> Bank Account
              </div>
              <hr />
              <div className="paycod">
                <input type="radio" value="Cash on Delivery" name="gender" /> <div className='icon-cod'><Image src={IMG_Cod} alt="" /></div> Cash on Delivery
              </div>
            </div>
            <Button className="btn-confirm">Confirm and Pay</Button>
          </BodyRight>
        </BodyWrapper>
      </Container>
    </StyledCartPage>
  )
};

export default PrivateRoute(CartPage);

// START === STYLING CURRENT PAGE

const StyledCartPage = styled.div`
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

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

`

const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-image: url('BodyPayment.png');
  background-repeat: no-repeat;
  // background-attachment: fixed;
  background-position: center;
  background-size: cover;
`

const BodyLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // align-items: center;
  padding-top: 40px;

  h1 {
    font-size: 40px;
    font-weight: bolder;
    color: white;
    margin-bottom: 30px;
  }

  .order-summary {
    width: 487px;
    height: 750px;
    background-color: white;
    border: none;
    border-radius: 15px;
    margin-bottom: 100px;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;

    h2 {
      font-size: 30px;
      font-weight: bolder;
      margin-bottom: 50px;
    }

    .item {
      width: 100%;
      display: flex;
      flex-direction: row;
      padding-left : 20px;
      margin-bottom: 50px
    }

    .item-pic {
      width: 25%;
    }

    .item-detail {
      width: 50%;
      display: flex;
      flex-direction: column;
    }

    .item-price {
      width: 25%;

    }

    .price {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-left: 20px;
      padding-right: 20px;
      margin-bottom: 50px;
      
      h4 {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 18px;
        margin-bottom: 10px;

        span {
          // margin-left: 20%;
        }
      }
    }

    .total {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-left: 20px;
      padding-right: 20px;
      
      h2 {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 30px;
        margin-bottom: 10px;

        span {
          // margin-left: 20%;
        }
      }
    }


  }
`


const BodyRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // align-items: center;
  padding-left: 3%;
  padding-top: 170px;

  h3 {
    font-size: 30px;
    color: white;
    a {
      font-size: 18px;
      color: white;
      margin-left: 57%;
    }
  }

  .address {
    width: 95%;
    height: 250px;
    border: none;
    border-radius: 15px;
    background-color: white;
    margin-bottom: 30px;
    padding: 28px;

    h3 {
      font-size: 30px;
      color: black;
      margin-bottom: 10px;

      span {
        font-weight: bolder;
      }
    }
  }
  
  .methods {
    width: 95%;
    height: 300px;
    border: none;
    border-radius: 15px;
    background-color: white;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    padding: 40px 50px;

    .paycard, .paybank, .paycod {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 30px;
      margin-bottom: 20px
    }
    hr {
      margin-bottom: 10px;
    }

    .icon-card {
      width: 50px;
      height: 50px;
      border: none;
      border-radius: 15px;
      background-color: #F47B0A;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0px 20px;
    }

    .icon-bank {
      width: 50px;
      height: 50px;
      border: none;
      border-radius: 15px;
      background-color: brown;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0px 20px;
      justify-content: center;
    }

    .icon-cod {
      width: 50px;
      height: 50px;
      border: none;
      border-radius: 15px;
      background-color: orange;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0px 20px;
      justify-content: center;
    }
  }

  .btn-confirm {
    background: #6A4029;
    color: white;
    font-weight: bolder;
    border-radius: 12px;
    width: 95%;
    height: 80px;
    border: none


  }
`