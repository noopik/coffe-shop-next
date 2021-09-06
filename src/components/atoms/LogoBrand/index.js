import styled from 'styled-components';
import Image from 'next/image';
import { IC_Logo } from '../../../assets/icons';
import router from 'next/router';
import PropTypes from 'prop-types';

const LogoBrand = ({ click, className }) => {
  const anchorToHome = () => {
    return router.push('/');
  };
  return (
    <StyledLogoBrand
      className={className}
      onClick={click ? anchorToHome : null}
    >
      <Image src={IC_Logo} alt="coffe shop logo" width={30} height={33} />
      <p>Coffee Shop</p>
    </StyledLogoBrand>
  );
};

LogoBrand.propTypes = {
  click: PropTypes.bool,
  className: PropTypes.string,
};

export default LogoBrand;

const StyledLogoBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #0b132a;
  }
`;
