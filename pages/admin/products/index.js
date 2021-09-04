import styled from 'styled-components';
import { Breakpoints } from '../../../src/utils';
import PrivateRoute from '../../../src/components/hoc/PrivateRoute';

const AddProducts = () => {
  return <StyledAddProducts>Admin Add Product</StyledAddProducts>;
};

export default PrivateRoute(AddProducts);

// START === STYLING CURRENT PAGE

const StyledAddProducts = styled.div`
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
