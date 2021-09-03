import styled from 'styled-components';
import { LogoBrand } from '../../atoms';
import Image from 'next/image';
import {
  IC_CircleFb,
  IC_CircleIg,
  IC_CircleTwitter,
} from '../../../assets/icons';
import { Breakpoints } from '../../../utils';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="description-shop">
          <LogoBrand className="logo" />
          <p className="paragraph">
            Coffee Shop is a store that sells some good meals, and especially
            coffee. We provide high quality beans
          </p>
          <div className="icon-sosmed-wrapper">
            <div className="icon">
              <Image
                src={IC_CircleFb}
                alt="facebook coffee shop"
                layout="fill"
              />
            </div>
            <div className="icon">
              <Image
                src={IC_CircleTwitter}
                alt="twitter coffee shop"
                layout="fill"
              />
            </div>
            <div className="icon">
              <Image
                src={IC_CircleIg}
                alt="instagram coffee shop"
                layout="fill"
              />
            </div>
          </div>
          <p className="copy-right">©2020CoffeeStore</p>
        </div>
        <div className="navigation">
          <div className="section">
            <h5 className="heading">Product</h5>
            <p className="nav-list">Download</p>
            <p className="nav-list">Pricing</p>
            <p className="nav-list">Locations</p>
            <p className="nav-list">Countries</p>
            <p className="nav-list">Blog</p>
          </div>
          <div className="section">
            <h5 className="heading">Product</h5>
            <p className="nav-list">Coffe Shop ? </p>
            <p className="nav-list">FAQ</p>
            <p className="nav-list">About Us</p>
            <p className="nav-list">Privacy Policy</p>
            <p className="nav-list">Terms of Service</p>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;

// STYLING

const StyledFooter = styled.footer`
  background-color: #f8f8f8;
  padding-top: 100px;
  padding-bottom: 50px;
  .container {
    display: flex;
    justify-content: space-between;
    ${Breakpoints.lessThan('md')`
      flex-direction: column;
    `}
    .description-shop {
      width: 380px;
      ${Breakpoints.lessThan('md')`
        width: 100%;
      `}
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .logo {
        margin-bottom: 22px;
      }
      .paragraph {
        font-family: Rubik;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
        color: #4f5665;
        margin-bottom: 22px;
        ${Breakpoints.lessThan('md')`
        text-align: center; 
      `}
      }
      .icon-sosmed-wrapper {
        display: flex;
        .icon {
          position: relative;
          width: 36px;
          height: 36px;
        }
      }
      .copy-right {
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 30px;
        color: #afb5c0;
      }
    }
    .navigation {
      display: flex;
      gap: 100px;
      ${Breakpoints.lessThan('md')`
        gap: 0px;
        justify-content: space-around;
        margin-top: 32px;
      `}
      .section {
        .heading {
          font-family: Rubik;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 30px;
          color: #0b132a;
          margin-bottom: 20px;
        }
        .nav-list {
          font-family: Rubik;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 30px;
          color: #4f5665;
          margin-bottom: 20px;
        }
      }
    }
  }
`;
