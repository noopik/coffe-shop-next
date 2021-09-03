import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { IMG_BGAuth } from '../../../assets/images';
import Footer from '../../molecules/Footer';
import { Button, CardWraper } from '../../atoms';

const AuthLayout = ({ children }) => {
  return (
    <StyledAuthLayout>
      <div className="content">
        <aside className="aside">
          <Image src={IMG_BGAuth} alt="bg" layout="fill" />
        </aside>
        <main className="main">
          <h1>Hello</h1>
        </main>
      </div>
      <div className="container card-wrapper">
        <CardWraper>
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
  type: PropTypes.string.isRequired,
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
  .card {
    background-color: yellow;
  }
`;
