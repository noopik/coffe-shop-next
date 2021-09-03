import styled from 'styled-components';
import { Breakpoints } from '../../src/utils';

const ProductsPage = () => {
  return <StyledProductsPage>Products Page</StyledProductsPage>;
};

export default ProductsPage;

// START === STYLING CURRENT PAGE

const StyledProductsPage = styled.div`
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
