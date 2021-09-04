import { Footer, Navbar } from '../molecules';
import { useSelector } from 'react-redux';

const PublicRoute = (Component) => {
  const Public = (props) => {
    const { user, auth } = useSelector((state) => state.user);
    return (
      <>
        <Navbar />
        <Component {...props} user={user} auth={auth} />
        <Footer />
      </>
    );
  };
  return Public;
};

export default PublicRoute;
