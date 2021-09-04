import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IC_GoogleIcon, IC_CircleFb } from '../../../assets/icons';

const Button = ({ theme, onClick, children, className, icon, ...props }) => {
  const Icons = {
    //  eslint-disable-next-line @next/next/no-img-element
    google: <img alt="icon" src={IC_CircleFb} />,
  };

  return (
    <StyledButton
      theme={theme}
      onClick={onClick}
      className={className}
      {...props}
    >
      {/* {icon && Icons[icon]} */}
      {children}
    </StyledButton>
  );
};
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
};
Button.defaultProps = {
  children: 'Title Button',
};

export default Button;

const StyledButton = styled.button`
  background: ${({ theme }) => {
    switch (theme) {
      case 'orange':
        return '#FFBA33';
      case 'brown':
        return '#6A4029';
      case 'white':
        return '#FFFFFF';
      default:
        return '#FFBA33';
    }
  }};
  color: ${({ theme }) => {
    switch (theme) {
      case 'orange':
        return '#6A4029';
      case 'brown':
        return '#FFFFFF';
      case 'white':
        return '#000000';
      default:
        return '#6A4029';
    }
  }};
  border-radius: 10px;
  padding: 25px 0;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  border: 0;
  width: 100%;
  box-shadow: 0px 6px 20px rgba(196, 196, 196, 0.67);
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
