import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IC_GoogleIcon, IC_CircleFb } from '../../../assets/icons';

const Button = ({ theme, onClick, children, className, icon, ...props }) => {
  const { disabled } = props;
  const Icons = {
    //  eslint-disable-next-line @next/next/no-img-element
    google: <img alt="icon" src={IC_CircleFb} />,
  };

  // console.log('disabled', disabled);

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
  background: ${({ theme, disabled }) => {
    switch ((theme, disabled)) {
      case 'orange':
        return '#FFBA33';
      case 'brown':
        return '#6A4029';
      case 'white':
        return '#FFFFFF';
      case disabled === true:
        return '#a3a3a3';
      default:
        return '#FFBA33';
    }
  }};
  color: ${({ theme, disabled }) => {
    switch ((theme, disabled)) {
      case 'orange':
        return '#6A4029';
      case 'brown':
        return '#FFFFFF';
      case 'white':
        return '#000000';
      case disabled === true:
        return '#555555';
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
  box-shadow: ${({ theme }) => {
    switch (theme) {
      case 'orange':
        return '0px 6px 20px rgba(196, 196, 196, 0.67)';
      case 'brown':
        return '0px 6px 20px rgba(106, 64, 41, 0.46);';
      case 'white':
        return 'box-shadow: 0px 6px 20px rgba(196, 196, 196, 0.67)';
      default:
        return 'box-shadow: 0px 6px 20px rgba(196, 196, 196, 0.67)';
    }
  }};
  &:hover {
    cursor: ${({ disabled }) => {
      disabled ? null : 'pointer';
    }};
    opacity: ${({ disabled }) => {
      disabled ? 1 : 0.7;
    }};
  }
`;
