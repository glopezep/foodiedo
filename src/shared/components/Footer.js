import React from 'react';
import styles from './Shared.css';

const Footer = props => (
  <footer className={styles.footer}>
    {props.children}
  </footer>
);

export default Footer;
