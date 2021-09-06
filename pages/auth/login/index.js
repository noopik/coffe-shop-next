import styled from 'styled-components';
import { Button, LogoBrand, TextField } from '../../../src/components/atoms';
import { AuthLayout } from '../../../src/components/layout';
import { Breakpoints } from '../../../src/utils';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import router from 'next/router';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { login } from '../../../src/redux/action/userAction';

const LoginPage = () => {
  const dispatch = useDispatch();
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 charaters')
      .required('Password is required'),
  });

  return (
    <StyledLoginPage>
      <AuthLayout titlePage="Login">
        <div className="header">
          <LogoBrand click />
          <Button className="btn" onClick={() => router.push('/auth/register')}>
            Sign Up
          </Button>
        </div>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validate}
          onSubmit={(values, { resetForm }) => {
            dispatch(login(values,router))
            resetForm();
          }}
        >
          {(formik) => (
            <>
              <h1 className="heading-page">Login</h1>
              <Form>
                <TextField
                  label="Email Adress :"
                  name="email"
                  type="text"
                  placeholder="Enter your email adress"
                />
                <TextField
                  label="Password :"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <Link href="/auth/forgot-password">
                  <a className="forgot-password">Forgot password?</a>
                </Link>
                <Button disabled={!(formik.isValid && formik.dirty)}>
                  Sign Up
                </Button>
                <Button icon="google" disabled={true} theme="white">
                  Sign Up With Google
                </Button>
              </Form>
            </>
          )}
        </Formik>
      </AuthLayout>
    </StyledLoginPage>
  );
};

export default LoginPage;

// START === STYLING CURRENT PAGE

const StyledLoginPage = styled.div`
  /* START == BREAKPOINT */
  .header {
    display: flex;
    justify-content: space-between;
    padding: 55px;
    .btn {
      filter: drop-shadow(0px 6px 20px rgba(255, 186, 51, 0.4));
      border-radius: 50px;
      width: 150px;
      padding: 13px;
    }
  }
  .heading-page {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 41px;
    color: #6a4029;
    text-align: center;
  }
  form {
    .forgot-password {
      font-family: Rubik;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #6a4029;
      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }
    }
  }
`;
