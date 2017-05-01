import React from 'react';
import styles from './Shared.css'

const Body = props => (
  <section className={styles.body}>
    {props.children}
  </section>
);

export default Body;
