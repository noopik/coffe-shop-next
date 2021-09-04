import Link from 'next/link';
import styled from 'styled-components';

const Breadcrumbs = ({ children }) => {
  return <StyledBreadcrumb>{children}</StyledBreadcrumb>;
};

export default Breadcrumbs;

const StyledBreadcrumb = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #4f5665;
  display: flex;
  gap: 8px;
  .active {
    font-weight: bold;
    color: #6a4029;
  }
`;
