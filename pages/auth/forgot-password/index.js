import styled from 'styled-components';
import { Breakpoints } from '../../../src/utils';
import { Button, Footer } from '../../../src/components';
import { IMG_BGForgotPassword } from '../../../src/assets';
import Image from 'next/image';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import router from 'next/router';

const ForgotPasswordPage = () => {
  const [reSend, setReSend] = useState();
  const [email, setEmail] = useState(null);
  const [counter, setCounter] = useState(0);
  const [btnSend, setbtnSend] = useState('');
  const [bntResend, setbntResend] = useState('');
  const reSendEmail = () => {
    console.log('send email again');
    setReSend(true);
    countDown();
  };

  useEffect(() => {
    setTimeout(() => {
      setReSend(false);
    }, 2000);
  }, [reSend, counter]);

  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
  });

  const countDown = () => {
    setbtnSend(true);
    setbntResend(true);
    const duration = 60 * 2;
    var timer = duration,
      minutes,
      seconds;
    const loop = setInterval(() => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      setCounter(minutes + ':' + seconds);
      timer--;
      // console.log(counter);
      if (timer < 1) {
        setCounter(2);
        setbntResend('');
        clearInterval(loop);
      }
    }, 1000);
  };
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
                <div className="input-wrapper">
                  <input
                    placeholder="Enter your email adress to get link"
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className={` ${formik.errors.email && 'is-invalid'}`}
                  />
                  {formik.errors.email && (
                    <p className="text-error">Email Invalid</p>
                  )}
                </div>

                {/* router.push('/auth/reset-password') */}
                <Button
                  theme="orange"
                  className="button"
                  type="submit"
                  onClick={() => countDown()}
                  disabled={btnSend}
                >
                  Send
                </Button>
              </Form>
            )}
          </Formik>
          {counter !== 0 && (
            <div className="resend-email-wrapper">
              <p className="sub-heading">
                Click here if you didn’t receive any link in 2 minutes
              </p>
              <Button
                theme="brown"
                className="re-send"
                onClick={reSendEmail}
                disabled={bntResend}
              >
                Resend Link
              </Button>
              {counter !== 2 && <p className="sub-heading">{counter}</p>}
            </div>
          )}
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
  ${Breakpoints.lessThan('xsm')`
      height: max-content;
      padding: 50px 0;
    `}
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
    text-align: center;
    .heading {
      font-style: normal;
      font-weight: bold;
      font-size: 64px;
      line-height: 96px;
      ${Breakpoints.lessThan('xsm')`
        font-size: 48px;
        line-height: 56px;
      `}
    }
    .sub-heading {
      font-size: 27px;
      font-weight: bold;
      ${Breakpoints.lessThan('xsm')`
        font-size: 20px;
        margin-top: 25px;
      `}
    }
    .action-wrapper {
      position: relative;
      margin: 126px 0;
      display: flex;
      gap: 2rem;
      height: 120px;
      ${Breakpoints.lessThan('md')`
        flex-direction: column;
        margin: 50px 0;
      `}
      .input-wrapper {
        flex: 1;
        ${Breakpoints.lessThan('md')`
          height: 70px;
        `}
        input {
          border: 0;
          background: #ffffff;
          border-radius: 20px;
          padding: 42px 35px;
          font-size: 30px;
          line-height: 45px;
          height: 100%;
          color: #9f9f9f;
          width: 100%;
          ${Breakpoints.lessThan('lg')`
            flex: 0;
            width: 100%;
          `}
          &:focus {
            outline: none;
          }
          &:valid {
            color: #000000;
          }
          &.is-invalid {
            /* background-color: red !important; */
            border: 2px solid red !important;
            color: red;
          }
        }
      }
      .text-error {
        font-family: Poppins;
        position: absolute;
        bottom: -40px;
        color: red;
        font-size: 20px;
        font-weight: 600;
      }
      .button {
        width: 250px;
        ${Breakpoints.lessThan('lg')`
          width: 250px !important;
        `}
        ${Breakpoints.lessThan('md')` 
          width: 100% !important;
        `}
      }
    }
    .resend-email-wrapper {
      padding-top: 50px;
      width: 100%;
      .re-send {
        margin-top: 25px;
        ${Breakpoints.lessThan('2xl')`
          width: 100% !important;
        `}
        ${Breakpoints.lessThan('md')` 
          margin-top: 35px; 
      `}
      }
    }
  }
`;
