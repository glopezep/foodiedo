import React from 'react';
import styles from './Shared.css'

const Title = props => (
  <h2 className={styles.title}>
    {props.children}
  </h2>
);

export default Title;
