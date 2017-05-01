import React from 'react';
import styles from './Shared.css';

const BodyLeft = props => (
  <div className={styles.bodyLeft}>
    {props.children}
  </div>
);

export default BodyLeft;
