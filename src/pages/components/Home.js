import React, { Component } from 'react';
import styles from './Pages.css';
import CurrentProduct from '../../product/components/CurrentProduct';
import Header from '../../shared/components/Header';
import HeaderBar from '../../shared/components/HeaderBar';
import Footer from '../../shared/components/Footer';
import Body from '../../shared/components/Body';
import BodyLeft from '../../shared/components/BodyLeft';
import BodyRight from '../../shared/components/BodyRight';
import ProductBox from '../../product/components/ProductBox';

const Home = () => (
  <section className={styles.home}>
    <Header>
      <p>Header here...</p>
    </Header>
    <Body>
      <BodyLeft>
        <HeaderBar />
        <div className={styles.container}>
          <CurrentProduct />
          <ProductBox />
        </div>
      </BodyLeft>
      <BodyRight>
        <HeaderBar />
      </BodyRight>
    </Body>
    <Footer>
    </Footer>
  </section>
)

export default Home;
