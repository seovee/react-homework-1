import React from 'react';
import Styles from './ProductPrice.module.css';

export default function ProductPrice() {
  return (
    <section className={Styles.ProductPrice}>
      <div className={Styles.ProductPriceContainer}>
        <div className={Styles.ProductPriceTitle}>
          <span>총 상품 금액</span>
          <img src="" alt="" />
        </div>
        <div className={Styles.ProductPriceContent}>
          <span>총 수량 1개 |</span>
          <span>6,370원</span>
        </div>
      </div>
    </section>
  );
}