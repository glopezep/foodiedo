import React from 'react';
import styles from './Shared.css'

const HeaderBar = props => (
  <header className={styles.headerBar}>
    {props.children}
  </header>
);

export default HeaderBar;
