import React, { Component } from 'react';
import styles from './Pages.css';
import Advertising from '../../shared/components/Advertising';
import Body from '../../shared/components/Body';
import BodyLeft from '../../shared/components/BodyLeft';
import BodyRight from '../../shared/components/BodyRight';
import Footer from '../../shared/components/Footer';
import Header from '../../shared/components/Header';
import OrderBox from '../../order/components/OrderBox';
import WhiteHeader from '../../shared/components/WhiteHeader';
import Title from '../../shared/components/Title';



const Waiting = () => (
  <section className={styles.home}>
    <Header>
      <p>Header here...</p>
    </Header>
    <Body>
      <BodyLeft>
        <WhiteHeader>
          <Title>Order</Title>
        </WhiteHeader>
        <div className={styles.container}>
          <Advertising />
        </div>
      </BodyLeft>
      <BodyRight>
        <WhiteHeader>
          <Title>Order</Title>
        </WhiteHeader>
        <OrderBox />
      </BodyRight>
    </Body>
    <Footer>
    </Footer>
  </section>
)

export default Waiting;
