import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Breadcrumb = ({ to, title, active }) => {
  return (
    <Link href={`${to}`}>
      <a className={`breadcrumb ${active && 'active'}`}>{title}</a>
    </Link>
  );
};

Breadcrumb.propTypes = {
  active: PropTypes.bool,
};

Breadcrumb.defaultProps = {
  title: 'Title Breadcrumb',
  to: '#',
};
export default Breadcrumb;
