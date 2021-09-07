import styled from 'styled-components';
import { Breakpoints } from '../../../src/utils';
import { Button, Footer } from '../../../src/components';
import { IMG_BGForgotPassword } from '../../../src/assets';
import Image from 'next/image';
import axios from '../../../src/config/Axios';
import router from 'next/router';

const VerifEmail = (props) => {
  return (
    <>
      <StyledForgotPasswordPage>
        <div className="bg-layer-image">
          <Image src={IMG_BGForgotPassword} alt="bg" layout="fill" />
        </div>
        <div className="container">
          <h1 className="heading">Verif Email</h1>
          <h1 className="heading-1">{props.verifEmail ? 'Success' : 'Failed'}</h1>
          <p className="sub-heading">Email verification does not take long, please wait.</p>
          {props.verifEmail && (
            <Button theme="brown" onClick={() => router.push('/auth/login')} className="verif-email button">
              Login
            </Button>
          )}
          {!props.verifEmail && (
            <Button theme="brown" onClick={() => router.push('/auth/register')} className="verif-email button">
              Register
            </Button>
          )}
        </div>
      </StyledForgotPasswordPage>
      <Footer />
    </>
  );
};

export default VerifEmail;

export const getServerSideProps = async (context) => {
  let verifEmail = false;
  const headers = {
    headers: {
      Cookie: `tokenEmail=${context.params.token};`,
    },
  };
  try {
    const checkToken = await axios.patch('/users/check-token', { token: 'email' }, headers);
    if (checkToken.data.statusCode === 200) {
      await axios.post('/users/verify-email', {}, headers);
      verifEmail = true;
    }
  } catch (error) {
    return {
      redirect: {
        destination: '/auth/register',
        permanent: false,
      },
    };
  }
  return {
    props: { verifEmail },
  };
};

// START === STYLING CURRENT PAGE

const StyledForgotPasswordPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .bg-layer-image {
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    img {
      object-fit: cover;
    }
  }
  .container {
    font-family: Poppins;
    color: #ffffff;
    text-align: center;
    .heading {
      font-style: normal;
      font-weight: bold;
      font-size: 64px;
      line-height: 96px;
    }
    .heading-1 {
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 96px;
    }
    .sub-heading {
      font-size: 27px;
      font-weight: bold;
    }
    .action-wrapper {
      position: relative;
      margin: 126px 0;
      display: flex;
      gap: 2rem;
      height: 120px;
      ${Breakpoints.lessThan('md')`
        flex-direction: column;
      `}
    }
    .button {
      margin-top: 10px !important;
      width: 250px;
      ${Breakpoints.lessThan('md')` 
        width: 60%;
      `}
    }
    .verif-email {
      margin: 22px;
      ${Breakpoints.lessThan('md')` 
        margin: 0; 
      `}
    }
  }
`;
