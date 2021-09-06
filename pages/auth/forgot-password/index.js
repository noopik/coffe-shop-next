import styled from 'styled-components';
import { Breakpoints } from '../../../src/utils';
import { Button, Footer } from '../../../src/components';
import { IMG_BGForgotPassword } from '../../../src/assets';
import Image from 'next/image';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';

const ForgotPasswordPage = () => {
  const [reSend, setReSend] = useState();
  const [email, setEmail] = useState(null);
  const [counter, setCounter] = useState(0);
  const reSendEmail = () => {
    console.log('send email again');
  };

  useEffect(() => {
    setTimeout(() => {
      setCounter(0);
      setReSend(false);
    }, 2000);
  }, [reSend, counter]);

  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
  });
  // console.log('reSend', reSend);
  return (
    <>
      <StyledForgotPasswordPage>
        <div className="bg-layer-image">
          <Image src={IMG_BGForgotPassword} alt="bg" layout="fill" />
        </div>
        <div className="container">
          <h1 className="heading">Forgot your password?</h1>
          <p className="sub-heading">Don’t worry, we got your back!</p>
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={validate}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              setEmail(values.email);
              setReSend(true);
              setCounter('Wait 2 minute again');
              resetForm();
            }}
          >
            {(formik) => (
              <Form className="action-wrapper">
                <input
                  placeholder="Enter your email adress to get link"
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <Button theme="orange" className="button" type="submit">
                  Send
                </Button>
              </Form>
            )}
          </Formik>
          <p className="sub-heading">
            Click here if you didn’t receive any link in 2 minutes
          </p>
          <Button theme="brown" className="re-send" onClick={reSendEmail}>
            Resend Link
          </Button>
          {counter !== 0 && <p className="sub-heading">{counter}</p>}
        </div>
      </StyledForgotPasswordPage>
      <Footer />
    </>
  );
};

export default ForgotPasswordPage;

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
    .sub-heading {
      font-size: 27px;
      font-weight: bold;
    }
    .action-wrapper {
      margin: 126px 0;
      display: flex;
      gap: 2rem;
      height: 120px;
      ${Breakpoints.lessThan('md')`
        flex-direction: column;
      `}
      input {
        flex: 1;
        border: 0;
        background: #ffffff;
        border-radius: 20px;
        padding: 42px 35px;
        font-size: 30px;
        line-height: 45px;
        color: #9f9f9f;
        &:focus {
          outline: none;
        }
        &:valid {
          color: #000000;
        }
      }
    }
    .button {
      width: 250px;
      ${Breakpoints.lessThan('md')` 
        width: 100%;
      `}
    }
    .re-send {
      margin: 22px;
      ${Breakpoints.lessThan('md')` 
        margin: 0; 
      `}
    }
  }
`;
