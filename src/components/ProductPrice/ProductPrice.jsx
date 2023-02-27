import React, { useState } from 'react';
import Styles from './ProductPrice.module.css';
import PriceQuestion from '../../assets/svg/expand=false.svg';
import CounterButton from '../CounterButton/CounterButton';

export default function ProductPrice(props) {
  const [count, setCount] = useState(1);
  const totalPrice = `${count * 6370}`;

  return (
    <>
      <CounterButton count={count} setCount={setCount} />
      <section className={Styles.ProductPrice}>
        <div className={Styles.ProductPriceContainer}>
          <div className={Styles.ProductPriceTitle}>
            <span>총 상품 금액</span>
            <img src={PriceQuestion} alt="'총 상품 금액'에 대한 정보입니다" />
          </div>
          <div className={Styles.ProductPriceContent}>
            <span>총 수량 1개 |</span>
            <span>{totalPrice}원</span>
          </div>
        </div>
      </section>
    </>
  );
}
