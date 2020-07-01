import React from 'react';
import PropTypes from 'prop-types';
import './css/layout.css';
import '../libs/i18n';

/**
 * Component that containt default styles for all pages
 * @param {node} children component that to will be render inside to Layout
 */
const Layout = ({ children }) => <main>{children}</main>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
