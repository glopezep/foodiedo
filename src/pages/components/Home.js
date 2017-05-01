import React, { Component } from 'react';
import styles from './Pages.css';
import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';
import Body from '../../shared/components/Body';
import BodyLeft from '../../shared/components/BodyLeft';
import BodyRight from '../../shared/components/BodyRight';

const Home = () => (
  <section className={styles.home}>
    <Header>
      <p>Header here...</p>
    </Header>
    <Body>
      <BodyLeft>
        <p>Body left here...</p>
      </BodyLeft>
      <BodyRight>
        <p>Body right here...</p>
      </BodyRight>
    </Body>
    <Footer>
      <p>Footer here...</p>
    </Footer>
  </section>
)

export default Home;
