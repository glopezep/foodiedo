import React from 'react';
import styles from './Shared.css'

const Button = props => (
  <button className={styles.button} onClick={props.onClick}>
    {props.children}
  </button>
);

export default Button;
