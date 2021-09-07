/* eslint-disable react-hooks/exhaustive-deps */
import { Footer, Navbar } from '../molecules';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProfile } from '../../redux/action/userAction';

const PublicRoute = (Component) => {
  const Public = (props) => {
    const dispacth = useDispatch();
    const { user, auth } = useSelector((state) => state.user);
    useEffect(() => {
      dispacth(getProfile());
    }, []);
    return (
      <>
        <Navbar user={user} auth={auth} />
        <Component {...props} user={user} auth={auth} />
        <Footer />
      </>
    );
  };
  return Public;
};

export default PublicRoute;
