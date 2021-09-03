import styled from 'styled-components';
import { Breakpoints } from '../../../src/utils';

const ForgotPasswordPage = () => {
  return (
    <StyledForgotPasswordPage>Forgot Password Page</StyledForgotPasswordPage>
  );
};

export default ForgotPasswordPage;

// START === STYLING CURRENT PAGE

const StyledForgotPasswordPage = styled.div`
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
`;
