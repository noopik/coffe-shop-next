import styled from 'styled-components';

const ProductDetailPage = () => {
  return <StyledProductDetailPage>Product Detail Page</StyledProductDetailPage>;
};

export default ProductDetailPage;

// START === STYLING CURRENT PAGE

const StyledProductDetailPage = styled.div`
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
