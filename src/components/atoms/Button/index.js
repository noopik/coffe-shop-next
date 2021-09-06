import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IC_GoogleIcon, IC_CircleFb } from '../../../assets/icons';

const Button = ({ theme, onClick, children, className, icon, ...props }) => {
  // const { disabled } = props;
  const Icons = {
    //  eslint-disable-next-line @next/next/no-img-element
    google: <img alt="icon" src={IC_CircleFb} />,
  };

  // console.log('className', className);

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
    if (theme === 'orange') return '#FFBA33';
    if (theme === 'brown') return '#6A4029';
    if (theme === 'white') return '#FFFFFF';
    if (theme === 'black') return '#0B132A';
    if (theme === 'gray') return 'rgba(186, 186, 186, 0.35)';
    if (disabled) return '#a3a3a3';
    return '#FFBA33';
  }};
  color: ${({ theme, disabled }) => {
    if (theme === 'orange') return '#6A4029';
    if (theme === 'brown') return '#FFFFFF';
    if (theme === 'white') return '#000000';
    if (theme === 'black') return '#FFFFFF';
    if (theme === 'gray') return '#4F5665';
    if (disabled) return '#555555';
    return '#6A4029';
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
    if (theme === 'orange') return '0px 6px 20px rgba(196, 196, 196, 0.67)';
    if (theme === 'brown') return '0px 6px 20px rgba(106, 64, 41, 0.46);';
    if (theme === 'white') 'box-shadow: 0px 6px 20px rgba(196, 196, 196, 0.67)';
    return 'box-shadow: 0px 6px 20px rgba(196, 196, 196, 0.67)';
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
