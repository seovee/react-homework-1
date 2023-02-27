import React, { useState } from 'react';
import Styles from './ProductPrice.module.css';
import PriceQuestion from '../../assets/svg/expand=false.svg';
import CounterButton from '../CounterButton/CounterButton';
import { convertPriceToString } from '../../lib/convertPriceToString.js';
import PurchageButton from '../PurchageButton/PurchageButton';

export default function ProductPrice() {
  const [count, setCount] = useState(1);

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
            <span>총 수량 {count}개 |</span>
            <span>{convertPriceToString(6370 * count)}원</span>
          </div>
        </div>
      </section>
      <PurchageButton disabled={count === 0 ? true : false} />
    </>
  );
}
