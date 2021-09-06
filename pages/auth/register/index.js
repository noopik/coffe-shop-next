import styled from 'styled-components';
import { Button, LogoBrand, TextField } from '../../../src/components/atoms';
import { AuthLayout } from '../../../src/components/layout';
import { Breakpoints } from '../../../src/utils';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import router from 'next/router';

const RegisterPage = () => {
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    phone: Yup.number().required('Password is required'),
  });

  return (
    <StyledRegisterPage>
      <AuthLayout titlePage="Sign Up">
        <div className="header">
          <LogoBrand click />
          <Button className="btn" onClick={() => router.push('/auth/login')}>
            Login
          </Button>
        </div>
        <Formik
          initialValues={{
            email: '',
            password: '',
            phone: '',
          }}
          validationSchema={validate}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
        >
          {(formik) => (
            <>
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
                  type="password"
                  placeholder="Enter your password"
                />
                <TextField
                  label="Phone Number :"
                  name="phone"
                  type="text"
                  placeholder="Enter your phone number"
                />
                <Button>Sign Up</Button>
                <Button icon="google" disabled={true} theme="white">
                  Sign Up With Google
                </Button>
              </Form>
            </>
          )}
        </Formik>
      </AuthLayout>
      return (
    </StyledRegisterPage>
  );
};

export default RegisterPage;

// START === STYLING CURRENT PAGE

const StyledRegisterPage = styled.div`
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
    /* background-color: yellow; */
  }
`;
