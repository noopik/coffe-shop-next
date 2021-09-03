import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { IMG_BGAuth } from '../../../assets/images';
import Footer from '../../molecules/Footer';
import { Button, CardWraper } from '../../atoms';
import { Breakpoints } from '../../../utils';
import Head from 'next/head';

const AuthLayout = ({ children, titlePage }) => {
  return (
    <StyledAuthLayout>
      <Head>
        <title>Coffee Shop | {titlePage}</title>
      </Head>
      <div className="content">
        <aside className="aside">
          <Image src={IMG_BGAuth} alt="bg" layout="fill" />
        </aside>
        <main className="main">{children}</main>
      </div>
      <div className="container card-wrapper">
        <CardWraper className="card">
          <div className="right">
            <h3 className="heading">Get your member card now!</h3>
            <p className="paragraph">
              Lets join with our member and enjoy the deals.
            </p>
          </div>
          <div className="button-wrapper">
            <Button>Create Now</Button>
          </div>
        </CardWraper>
      </div>
      <Footer />
    </StyledAuthLayout>
  );
};

AuthLayout.propTypes = {
  titlePage: PropTypes.string.isRequired,
};

export default AuthLayout;

// START === STYLING CURRENT PAGE

const StyledAuthLayout = styled.div`
  .content {
    display: flex;
    height: 100vh;
    .aside {
      position: relative;
      width: 50%;
      height: 100vh;
      img {
        object-fit: cover;
      }
    }
    .main {
      background-color: #ffffff;
      width: 50%;
    }
  }

  .card-wrapper {
    position: relative;
    display: flex;
    justify-content: center;

    .card {
      width: 80%;
      display: flex;
      justify-content: space-between;
      padding: 40px 70px;
      position: absolute;
      top: -80px;
      z-index: 1;

      ${Breakpoints.lessThan('lg')`
        flex-direction: column;
        top: -120px;
        padding: 30px 50px;
      `}
      .right {
        width: 500px;
        ${Breakpoints.lessThan('lg')` 
          width: 100%;
        `}
        .heading {
          font-family: Rubik;
          font-style: normal;
          font-weight: 500;
          font-size: 35px;
          line-height: 45px;
          color: #0b132a;
          ${Breakpoints.lessThan('lg')` 
            font-size: 24px;
            text-align: center; 
          `}
        }
        .paragraph {
          font-family: Rubik;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 30px;
          color: #4f5665;
          ${Breakpoints.lessThan('lg')` 
            text-align: center; 
          `}
        }
      }
      .button-wrapper {
        width: 250px;
        ${Breakpoints.lessThan('lg')`
        margin-top: 1rem;
        width: 100%;
      `}
        button {
          ${Breakpoints.lessThan('lg')` 
            padding: 10px;
          `}
        }
      }
    }
  }
`;
