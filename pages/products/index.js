import styled from 'styled-components';
import PrivateRoute from '../../src/components/hoc/PrivateRoute';
import { Breakpoints } from '../../src/utils';
import Image from 'next/image';
import { Button } from '../../src/components/atoms';
import { IMG_DummyProductCard } from '../../src/assets';

const ProductsPage = () => {
  return (
    <StyledProductsPage className="container">
      <aside className="side-left">
        <h3>Promo for you</h3>
        <p className="paragraph">
          Coupons will be updated every weeks. Check them out!{' '}
        </p>
        <div className="card-promo-wrapper">
          <div className="card">
            <div className="image-wrapper">
              <Image src={IMG_DummyProductCard} alt="image" layout="fill" />
            </div>
            <h2 className="heading">Beef Spaghetti</h2>
            <h2 className="heading">20% OFF</h2>
            <p className="paragraph promo-desc">
              Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
            </p>
            <div className="divider" />
            <p className="paragraph">COUPON CODE</p>
            <h3 className="heading-bold">FNPR15RG</h3>
            <p className="paragraph">Valid untill October 10th 2020</p>
          </div>
        </div>
        <Button theme="brown">Apply Coupon</Button>
        <div className="term-section">
          <h4>Terms and Condition</h4>
          <ol>
            <li>You can only apply 1 coupon per day</li>
            <li>It only for dine in</li>
            <li>Buy 1 get 1 only for new user</li>
            <li>Should make member card to apply coupon</li>
          </ol>
        </div>
      </aside>
      <main>
        <div className="navigation-category">
          <div className="item active">
            <h5 className="heading-nav ">Favorite Product</h5>
          </div>
          <div className="item">
            <h5 className="heading-nav ">Coffee</h5>
          </div>
          <div className="item">
            <h5 className="heading-nav ">Non Coffee</h5>
          </div>
          <div className="item">
            <h5 className="heading-nav ">Foods</h5>
          </div>
          <div className="item">
            <h5 className="heading-nav ">Add-on</h5>
          </div>
        </div>
        <div className="content-products">
          <div className="card">
            <div className="image">
              <Image
                src={IMG_DummyProductCard}
                alt="name product"
                layout="fill"
              />
            </div>
            <h4 className="title-product">Veggie tomato mix</h4>
            <p className="price">IDR 34.000</p>
          </div>
          <div className="card">
            <div className="image">
              <Image
                src={IMG_DummyProductCard}
                alt="name product"
                layout="fill"
              />
            </div>
            <h4 className="title-product">Veggie tomato mix</h4>
            <p className="price">IDR 34.000</p>
          </div>
          <div className="card">
            <div className="image">
              <Image
                src={IMG_DummyProductCard}
                alt="name product"
                layout="fill"
              />
            </div>
            <h4 className="title-product">Veggie tomato mix</h4>
            <p className="price">IDR 34.000</p>
          </div>
          <div className="card">
            <div className="image">
              <Image
                src={IMG_DummyProductCard}
                alt="name product"
                layout="fill"
              />
            </div>
            <h4 className="title-product">Veggie tomato mix</h4>
            <p className="price">IDR 34.000</p>
          </div>
          <div className="card">
            <div className="image">
              <Image
                src={IMG_DummyProductCard}
                alt="name product"
                layout="fill"
              />
            </div>
            <h4 className="title-product">Veggie tomato mix</h4>
            <p className="price">IDR 34.000</p>
          </div>
          <div className="card">
            <div className="image">
              <Image
                src={IMG_DummyProductCard}
                alt="name product"
                layout="fill"
              />
            </div>
            <h4 className="title-product">Veggie tomato mix</h4>
            <p className="price">IDR 34.000</p>
          </div>
          <div className="card">
            <div className="image">
              <Image
                src={IMG_DummyProductCard}
                alt="name product"
                layout="fill"
              />
            </div>
            <h4 className="title-product">Veggie tomato mix</h4>
            <p className="price">IDR 34.000</p>
          </div>
        </div>
      </main>
    </StyledProductsPage>
  );
};

export default PrivateRoute(ProductsPage);

// START === STYLING CURRENT PAGE

const StyledProductsPage = styled.div`
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
  display: flex;
  ${Breakpoints.lessThan('md')`
    flex-direction: column; 
  `}
  aside.side-left {
    border-right: 1px solid #9f9f9f;
    padding: 125px 25px 100px 25px;
    ${Breakpoints.lessThan('md')`
      display: none; 
    `}
    h3 {
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 25px;
      line-height: 30px;
      color: #6a4029;
      text-align: center;
      margin-bottom: 40px;
    }
    .paragraph {
      width: 300px;
      ${Breakpoints.lessThan('xl')`
        width: 200px; 
        margin: 0 auto;
      `}
    }
    .card-promo-wrapper {
      margin: 40px 0;
      .card {
        border-radius: 20px;
        background: #ffcb65;
        display: flex;
        flex-direction: column;
        align-items: center;
        .image-wrapper {
          position: relative;
          width: 128px;
          height: 128px;
          margin-top: 50px;
          margin-bottom: 1rem;
          img {
            object-fit: cover;
            border-radius: 100%;
          }
        }
        .heading {
          font-family: Poppins;
          font-style: normal;
          font-weight: bold;
          font-size: 22px;
          line-height: 101.34%;
          color: #000000;
          margin-bottom: 1rem;
        }
        .heading-bold {
          font-weight: bold;
          font-size: 33px;
          margin: 20px 0;
        }
        .promo-desc {
          padding: 0 30px;
        }
        .divider {
          border: 2px dashed #000000;
          margin: 27px 0;
          width: 100%;
        }
        &:last-child {
          padding-bottom: 40px;
        }
      }
    }
    .term-section {
      margin-top: 130px;
      font-family: Rubik;
      color: #4f5665;
      h4 {
        font-weight: bold;
        font-size: 16px;
        line-height: 14px;
      }
      ol {
        list-style-type: decimal;
        padding-left: 1rem;
        li {
          font-size: 14px;
          line-height: 14px;
          margin-top: 10px;
        }
      }
    }
  }
  main {
    padding-top: 125px;
    flex: 1;
    margin-left: 90px;
    ${Breakpoints.lessThan('md')`
      margin-left: 0px;
    `}
    .navigation-category {
      display: flex;
      margin-bottom: 70px;
      justify-content: space-between;
      ${Breakpoints.lessThan('xl')`
        flex-wrap: wrap;
      `}
      ${Breakpoints.lessThan('xl')`
        justify-content: flex-start; 
      `}
      .item {
        padding: 8px 12px 0 8px;
        width: 100%;
        ${Breakpoints.lessThan('xl')`
          width: 150px;
        `}
        font-size: 20px;
        line-height: 24px;
        .heading-nav {
          font-family: Rubik;
          font-style: normal;
          margin-bottom: 12px;
          text-align: center;
          color: #9f9f9f;
        }
        &.active {
          border-bottom: 3px solid #6a4029;
          font-weight: bold;
          font-size: 20px;
          .heading-nav {
            color: #6a4029;
          }
        }
        &:hover {
          cursor: pointer;
          opacity: 0.5;
          border-bottom: 3px solid #6a4029;
        }
      }
    }
    .content-products {
      display: grid;
      grid-template-columns: auto auto auto auto auto;
      width: 100%;
      gap: 55px;
      ${Breakpoints.lessThan('2xl')`
        grid-template-columns: auto auto auto auto;
      `}
      ${Breakpoints.lessThan('xl')`
        grid-template-columns: auto auto auto;
      `}
      ${Breakpoints.lessThan('lg')`
        grid-template-columns: auto auto;
      `}
      ${Breakpoints.lessThan('md')`
        grid-template-columns: auto auto auto;
      `}
      ${Breakpoints.lessThan('sm')`
        grid-template-columns: auto auto;
      `}
      .card {
        background: #ffffff;
        box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
        border-radius: 30px;
        width: max-content;
        padding: 21px;
        font-family: Poppins;
        .image {
          position: relative;
          margin: 0 auto;
          margin-top: -50px;
          width: 100px;
          height: 100px;
          img {
            object-fit: cover;
            border-radius: 100%;
          }
        }
        .title-product {
          width: 115px;
          font-style: normal;
          font-weight: 900;
          font-size: 22px;
          line-height: 101.34%;
          text-align: center;
          color: #000000;
          margin: 10px 0;
        }
        .price {
          font-weight: bold;
          font-size: 17px;
          line-height: 25px;
          text-align: center;
          color: #6a4029;
        }
      }
    }
  }
  /* GLOBAL CURRENT PAGE */
  .paragraph {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #000000;
  }
`;
