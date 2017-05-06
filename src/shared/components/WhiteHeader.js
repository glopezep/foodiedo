import React from 'react';
import styles from './Shared.css'

const WhiteHeader = props => (
  <header className={styles.whiteHeader}>
    {props.children}
  </header>
);

export default WhiteHeader;
