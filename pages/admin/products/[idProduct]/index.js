import styled from 'styled-components';
import { IMG_DummyProduct } from '../../../../src/assets';
import {
  Breadcrumb,
  Breadcrumbs,
  Button,
  TextFieldAdmin,
} from '../../../../src/components/atoms';
import PrivateRoute from '../../../../src/components/hoc/PrivateRoute';
import { Breakpoints } from '../../../../src/utils';
import Image from 'next/image';

const EditProduct = () => {
  return (
    <StyledEditProduct className="container main">
      <Breadcrumbs>
        <Breadcrumb title="Favorite & Promo" to="#" />
        <Breadcrumb title="> Cold Brew" to="#" active />
        <Breadcrumb title="> Edit product" to="#" active />
      </Breadcrumbs>
      <form>
        <div className="side-left">
          <div className="image-wrapper">
            <Image src={IMG_DummyProduct} alt="image name" layout="fill" />
            <div className="btn-circle-wrapper">
              {true && (
                <div className="btn delete">
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
              {false && (
                <div className="btn upload">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="10" width="4" height="24" rx="2" fill="#6A4029" />
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
              placeholder="Name Product"
              defaultValue="COLD BREW"
              className="heading-name-product"
            />
          </div>
          <div className="row">
            <TextFieldAdmin
              placeholder="IDR 0"
              defaultValue="IDR 30.000"
              className="price"
            />
          </div>
          <div className="row">
            <textarea
              // id=" "
              // name=" "
              className="text"
              defaultValue="Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours."
            ></textarea>
            <div className="line" />
          </div>
          <div className="row">
            <select name="size" id="size" placeholder="Select Size">
              <option value="">Select Size</option>

              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="row">
            <select name="size" id="size" placeholder="Select Delivery Methods">
              <option value="">Select Delivery Methods</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="row button-wrapper">
            <div className="counter-wrapper">
              <svg
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
              <p>2</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 8V15.0687H3V8H21Z" fill="#9F9F9F" />
              </svg>
            </div>
            <Button>Add to Cart</Button>
          </div>
          <div className="btn-saved-wrapper">
            <Button theme="gray">Saved</Button>
          </div>
        </div>
      </form>
    </StyledEditProduct>
  );
};

export default PrivateRoute(EditProduct);

// START === STYLING CURRENT PAGE

const StyledEditProduct = styled.div`
  form {
    font-family: Poppins;
    font-style: normal;
    display: flex;
    gap: 61px;
    margin-top: 60px;
    ${Breakpoints.lessThan('lg')`
      gap: 32px;
    `}
    ${Breakpoints.lessThan('md')`
      flex-direction: column; 
    `}
    ${Breakpoints.lessThan('md')`
      gap: 3px;
    `}
    .side-left {
      width: 50%;
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
      ${Breakpoints.lessThan('md')`
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
          border: 1px solid #9f9f9f;
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
  }
`;
