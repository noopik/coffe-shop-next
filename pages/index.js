import styled from 'styled-components';
import { Breakpoints } from '../src/utils';

export default function Home() {
  return (
    <StyledHomePage>
      <h1>Coffee Shop</h1>
    </StyledHomePage>
  );
}

const StyledHomePage = styled.div`
  /* background-color: yellow;
  h1 {
    font-size: 50px;
    ${Breakpoints.lessThan('2xl')`
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
    `}
  } */
`;
