import styled from 'styled-components';
import { Button, LogoBrand, TextField } from '../../../src/components/atoms';
import { AuthLayout } from '../../../src/components/layout';
import { Breakpoints } from '../../../src/utils';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import router from 'next/router';
import axios from '../../../src/config/Axios'
import { resetPassword } from '../../../src/redux/action/userAction';
import AuthRoute from '../../../src/components/hoc/AuthRoute';


const ResetPasswordPage = (props) => {
  const validate = Yup.object({
    password: Yup.string()
      .min(8, 'Password must be at least 8 charaters')
      .max(255, 'Password must be at least 255 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  });

  return (
    <StyledLoginPage>
      <AuthLayout titlePage="Reset Password" withCard={false}>
        <div className="header">
          <LogoBrand click />
        </div>
        <Formik
          initialValues={{
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validate}
          onSubmit={(values, { resetForm }) => {
            resetPassword(values, router, props.token);
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
                <Button disabled={!(formik.isValid && formik.dirty)}>Submit</Button>
              </Form>
            </>
          )}
        </Formik>
      </AuthLayout>
    </StyledLoginPage>
  );
};

export default AuthRoute(ResetPasswordPage);

export const getServerSideProps = async (context) => {
  let resetPassword = false;
  const headers = {
    headers: {
      Cookie: `tokenPassword=${context.params.token};`,
    },
  };
  try {
    const checkToken = await axios.patch('/users/check-token', { token: 'password' }, headers);
    if (checkToken.data.statusCode === 200) {
      resetPassword = true;
    } else {
      return {
        redirect: {
          destination: '/auth/register',
          permanent: false,
        },
      };
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
    props: { resetPassword, token: context.params.token },
  };
};

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
