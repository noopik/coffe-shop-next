import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IC_GoogleIcon } from '../../../assets/icons';

const Button = ({ theme, onClick, title, className, icon }) => {
  const Icons = {
    google: IC_GoogleIcon,
  };

  return (
    <StyledButton theme={theme} onClick={onClick} className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {icon && <img alt="icon" src={Icons[icon]} />}
      {title}
    </StyledButton>
  );
};
Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
};
Button.defaultProps = {
  title: 'Title Button',
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
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
