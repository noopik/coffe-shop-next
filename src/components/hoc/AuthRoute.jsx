const AuthRoute = (Component) => {
  const Auth = (props) => {
    return (
      <>
        <Component {...props} />
      </>
    );
  };
  return Auth;
};

export default AuthRoute;
