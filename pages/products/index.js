import styled from 'styled-components';
import PublicRoute from '../../src/components/hoc/PublicRoute';
import { Breakpoints } from '../../src/utils';
import Image from 'next/image';
import { Button, CardProduct } from '../../src/components/atoms';
import { IMG_DummyProductCard } from '../../src/assets';
import { useState } from 'react';
import router from 'next/router';
import Pagination from '@material-ui/lab/Pagination';

const ProductsPage = () => {
  const [dataProducts, setDataProduct] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [page, setPage] = useState(1);

  // State sort untuk kebutuhan icon sort
  const [sortASC, setSortASC] = useState(true);

  // START === HANDLE PAGINATION
  const handlePagination = (event, value) => {
    setPage(value);
  };
  // END === HANDLE PAGINATION
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
          {/* <div className="card layer">
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
          </div> */}
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
        <SortFilter asc={sortASC}>
          <div
            className="icon"
            onClick={() => (sortASC ? setSortASC(false) : setSortASC(true))}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.46958 0H5.33419L0.105469 14.9391H3.07779L3.86332 12.6947H8.88152L9.6558 14.9391H12.6235L7.46958 0ZM4.84523 9.88924L6.39042 5.47425L7.91367 9.88924H4.84523Z"
                fill="#6A4029"
              />
              <path
                d="M33.9812 25.2994L28.6508 30.6298V0H25.8454V30.6298L20.515 25.2994L18.5312 27.2831L27.2481 36L35.965 27.2831L33.9812 25.2994Z"
                fill="#6A4029"
              />
              <path
                d="M12.8 21.041H0.0351562V23.8465H8.58094L0.0351562 33.7764V35.9803H12.6597V33.1748H4.25419L12.8 23.245V21.041Z"
                fill="#6A4029"
              />
            </svg>
          </div>
        </SortFilter>
        <div className="content-products">
          {dataProducts.map((index) => {
            return <CardProduct key={index} className="item" />;
          })}
          {dataProducts.length === 0 && <h1>No Product</h1>}
        </div>
        <div className="pagination">
          <Pagination
            className="page"
            count={10}
            page={page}
            onChange={handlePagination}
          />
        </div>
      </main>
    </StyledProductsPage>
  );
};

export default PublicRoute(ProductsPage);

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
      position: relative;
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
      /* Card promo */
      /* .layer {
        position: absolute;
        top: 0;
        background-color: red;
        z-index: -1;
      } */
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
      margin-bottom: 20px;
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
      gap: 50px;
      ${Breakpoints.lessThan('2xl')`
        grid-template-columns: auto auto auto; 
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
      .item {
        width: 100%;
      }
    }
    .pagination {
      margin-top: 50px;
      display: flex;
      justify-content: flex-end;
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

const SortFilter = styled.div`
  margin-bottom: 60px;
  .icon {
    svg {
      transform: ${({ asc }) => asc && 'rotate(180deg)'};
    }
    &:hover {
      cursor: pointer;
    }
  }
`;
