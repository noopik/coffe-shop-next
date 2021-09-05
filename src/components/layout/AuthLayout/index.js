import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { IMG_BGAuth } from '../../../assets/images';
import Footer from '../../molecules/Footer';
import { Button, CardWraper } from '../../atoms';
import { Breakpoints } from '../../../utils';
import Head from 'next/head';
import router from 'next/router';

const AuthLayout = ({ children, titlePage, withCard }) => {
  return (
    <StyledAuthLayout>
      <Head>
        <title>Coffee Shop | {titlePage}</title>
      </Head>
      <div className="content cla2">
        <aside className="aside">
          <Image src={IMG_BGAuth} alt="bg" layout="fill" />
        </aside>
        <main className="main">{children}</main>
      </div>
      {withCard && (
        <div className="container card-wrapper">
          <CardWraper className="card">
            <div className="right">
              <h3 className="heading">Get your member card now!</h3>
              <p className="paragraph">
                Lets join with our member and enjoy the deals.
              </p>
            </div>
            <div className="button-wrapper">
              <Button onClick={() => router.push('/auth/register')}>
                Create Now
              </Button>
            </div>
          </CardWraper>
        </div>
      )}
      <Footer />
    </StyledAuthLayout>
  );
};

AuthLayout.propTypes = {
  titlePage: PropTypes.string.isRequired,
};
AuthLayout.defaultProps = {
  withCard: true,
};

export default AuthLayout;

// START === STYLING CURRENT PAGE

const StyledAuthLayout = styled.div`
  .content {
    display: flex;
    height: max-content;
    ${Breakpoints.lessThan('lg')`
      flex-direction: column;
    `}
    .aside {
      position: relative;
      width: 50%;
      flex: 1;
      img {
        object-fit: cover;
      }
    }
    .main {
      background-color: #ffffff;
      width: 50%;
      margin-bottom: 6rem;
      ${Breakpoints.lessThan('lg')`
        width: 100%;
      `}
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

  form {
    margin: 50px auto;
    width: 70%;
    display: flex;
    gap: 2rem;
    flex-direction: column;
  }

  footer {
    padding-top: 8rem;
    ${Breakpoints.lessThan('sm')`
      padding-top: 12rem;
    `}
    ${Breakpoints.lessThan('xsm')`
      padding-top: 16rem;

    `}
  }
`;
