/* eslint-disable react-hooks/exhaustive-deps */
import { Footer, Navbar } from '../molecules';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProfile } from '../../redux/action/userAction';
import { useRouter } from 'next/router';

const PrivateRoute = (Component, roles = []) => {
  const Private = (props) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { user, auth } = useSelector((state) => state.user);
    useEffect(() => {
      try {
        dispatch(getProfile());
        let access = false;
        for (let i = 0; i < roles.length; i++) {
          if (user.roles === roles[i]) {
            access = true;
            break;
          } else if (user.roles !== roles[i]) {
            access = false;
          }
        }
        if (!auth) {
          router.push('/auth/login');
        } else if (!access) {
          router.push('/');
        }
      } catch (error) {
        console.log(error);
      }
    }, []);
    return (
      <>
        <Navbar user={user} auth={auth} />
        <Component {...props} user={user} auth={auth} />
        <Footer />
      </>
    );
  };
  return Private;
};

export default PrivateRoute;
