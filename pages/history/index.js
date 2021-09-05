import Pagination from '@material-ui/lab/Pagination';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';
import { IMG_BGHistoryPage, IMG_DummyProductCard } from '../../src/assets';
import PrivateRoute from '../../src/components/hoc/PrivateRoute';
import { ModalAlertValidation } from '../../src/components/molecules';
import { Breakpoints } from '../../src/utils';

const HistoryPage = () => {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState('');
  const handlePagination = (event, value) => {
    setPage(value);
  };
  const [showModal, setShowModal] = useState(false);

  const [dataHistory, setDataHistory] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  return (
    <StyledHistoryPage>
      <Image
        src={IMG_BGHistoryPage}
        alt="background page"
        layout="fill"
        className="bg-page"
      />
      <div className="container">
        <h1 className="heading">Let’s see what you have bought!</h1>
        <p className="sub-heading">Click card to delete item</p>
        <div className="content-history">
          {dataHistory.map((index) => {
            return (
              <div
                className="item"
                key={index}
                onClick={() =>
                  selected === index ? setSelected('') : setSelected(index)
                }
              >
                <div className="image-product">
                  <Image
                    src={IMG_DummyProductCard}
                    alt="name product"
                    layout="fill"
                  />
                </div>
                <div className="desc">
                  <h4 className="title-product">Veggie tomato mix</h4>
                  <p className="text">IDR 34.000</p>
                  <p className="text">Delivered to Table 4</p>
                </div>
                {selected === index && (
                  <div className="btn-wrapper">
                    <div
                      className="btn delete"
                      onClick={() => setShowModal(true)}
                    >
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 4.2H2.55556M2.55556 4.2H15M2.55556 4.2V15.4C2.55556 15.8243 2.71944 16.2313 3.01117 16.5314C3.30289 16.8314 3.69855 17 4.11111 17H11.8889C12.3014 17 12.6971 16.8314 12.9888 16.5314C13.2806 16.2313 13.4444 15.8243 13.4444 15.4V4.2H2.55556ZM4.88889 4.2V2.6C4.88889 2.17565 5.05278 1.76869 5.3445 1.46863C5.63622 1.16857 6.03189 1 6.44444 1H9.55556C9.96811 1 10.3638 1.16857 10.6555 1.46863C10.9472 1.76869 11.1111 2.17565 11.1111 2.6V4.2M6.44444 8.2V13M9.55556 8.2V13"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="btn close">
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.95234 14L7.27734 10.125L5.02734 14H0.402344L5.00234 6.87499L0.277344 0.0499878H5.07734L7.75234 3.89999L10.0023 0.0499878H14.6273L9.95234 7.07499L14.7523 14H9.95234Z"
                          fill="#6A4029"
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
        <Pagination
          className="page"
          count={10}
          page={page}
          onChange={handlePagination}
        />
      </div>
      <ModalAlertValidation
        show={showModal}
        onClose={() => setShowModal(false)}
        actionDelete={() => {
          console.log('delete item 1');
          setShowModal(false);
        }}
      />
    </StyledHistoryPage>
  );
};

export default PrivateRoute(HistoryPage);

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
