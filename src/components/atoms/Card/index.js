import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardWraper = ({ children, className }) => {
  return (
    <StyledCardWrapper className={className}>{children}</StyledCardWrapper>
  );
};
CardWraper.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
};

export default CardWraper;

const StyledCardWrapper = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 10px 23px rgba(0, 0, 0, 0.07);
`;
