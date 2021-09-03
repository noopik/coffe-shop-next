import styled from 'styled-components';
import { Button, LogoBrand, TextField } from '../../../src/components/atoms';
import { AuthLayout } from '../../../src/components/layout';
import { Breakpoints } from '../../../src/utils';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const RegisterPage = () => {
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    phone: Yup.number()
      .min(10, 'Password must be at least 10 charaters')
      .required('Password is required'),
  });

  return (
    <StyledRegisterPage>
      <AuthLayout titlePage="Sign Up">
        <div className="header">
          <LogoBrand />
          <Button className="btn">Login</Button>
        </div>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(formik) => (
            <div>
              <h1 className="heading-page">Sign Up</h1>
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
                  type="text"
                  placeholder="Enter your password"
                />
                <TextField
                  label="Phone Number :"
                  name="phone"
                  type="text"
                  placeholder="Enter your phone number"
                />
                <Button>Sign Up</Button>
                <Button icon="google" disabled={true}>
                  Sign Up With Google
                </Button>
              </Form>
            </div>
          )}
        </Formik>
      </AuthLayout>
    </StyledRegisterPage>
  );
};

export default RegisterPage;

// START === STYLING CURRENT PAGE

const StyledRegisterPage = styled.div`
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
    /* background-color: yellow; */
  }
`;
