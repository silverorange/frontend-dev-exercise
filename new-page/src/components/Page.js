import PropTypes from 'prop-types';
import React from 'react';

import './Page.css';

export default function Page(props) {
  const { children } = props;
  return (
    <main className="page">
      <div className="page__container">{children}</div>
    </main>
  );
}

Page.propTypes = {
  children: PropTypes.node
};
