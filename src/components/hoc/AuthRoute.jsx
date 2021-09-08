/* eslint-disable react-hooks/exhaustive-deps */
import router from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../../src/redux/action/userAction';
const AuthRoute = (Component) => {
  const Auth = (props) => {
    const { auth } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
      try {
        dispatch(getProfile());
        if (auth) {
          router.push('/');
        }
      } catch (error) {
        console.log(error);
      }
    }, []);
    return (
      <>
        <Component {...props} />
      </>
    );
  };
  return Auth;
};

export default AuthRoute;
