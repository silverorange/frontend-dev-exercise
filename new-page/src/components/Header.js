import PropTypes from 'prop-types';
import React from 'react';

import './Header.css';

export default function Header(props) {
  const { children } = props;
  return (
    <header className="header">
      <div className="header__container">{children}</div>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node
};
