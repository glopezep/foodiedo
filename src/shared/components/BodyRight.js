import React from 'react';
import styles from './Shared.css';

const BodyRight = props => (
  <div className={styles.bodyRight}>
    {props.children}
  </div>
);

export default BodyRight;
