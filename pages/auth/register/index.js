import styled from 'styled-components';
import { AuthLayout } from '../../../src/components/layout';
import { Breakpoints } from '../../../src/utils';

const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <AuthLayout></AuthLayout>
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
`;
