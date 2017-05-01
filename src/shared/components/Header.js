import React from 'react';
import styles from './Shared.css';

const Header = props => (
  <header className={styles.header}>
    {props.children}
  </header>
);

export default Header;
