import { Footer, Navbar } from '../molecules';
import { useSelector } from 'react-redux';

const PrivateRoute = (Component) => {
  const Private = (props) => {
    const { user, auth } = useSelector((state) => state.user);
    return (
      <>
        <Navbar />
        <Component {...props} user={user} auth={auth} />
        <Footer />
      </>
    );
  };
  return Private;
};

export default PrivateRoute;
