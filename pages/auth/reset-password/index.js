import styled from 'styled-components';
import { Button, LogoBrand, TextField } from '../../../src/components/atoms';
import { AuthLayout } from '../../../src/components/layout';
import { Breakpoints } from '../../../src/utils';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import router from 'next/router';
import Link from 'next/link';

const resetPasswordPage = () => {
  const validate = Yup.object({
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  });

  return (
    <StyledLoginPage>
      <AuthLayout titlePage="Reset Password" withCard={false}>
        <div className="header">
          <LogoBrand />
        </div>
        <Formik
          initialValues={{
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validate}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
        >
          {(formik) => (
            <>
              <h1 className="heading-page">Reset Password</h1>
              <Form>
                <TextField
                  label="New Password :"
                  name="password"
                  type="password"
                  placeholder="Enter your new password"
                />
                <TextField
                  label="Confirmation New Password :"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirmation new password"
                />
                <Button disabled={!(formik.isValid && formik.dirty)}>
                  Submit
                </Button>
              </Form>
            </>
          )}
        </Formik>
      </AuthLayout>
    </StyledLoginPage>
  );
};

export default resetPasswordPage;

// START === STYLING CURRENT PAGE

const StyledLoginPage = styled.div`
  /* START == BREAKPOINT */
  .header {
    display: flex;
    justify-content: center;
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
