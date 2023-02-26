import React from 'react';
import Styles from './DeliveryInfo.module.css';

export default function DeliveryInfo() {
  return (
    <section className={Styles.DeliveryInfo}>
      <div className={Styles.DeliveryInfoContainer}>
        <div className={Styles.DeliveryInfo1}>
          <span>택배배송</span>
          <span>|</span>
          <span>3,000원</span>
          <span>(주문시 결제)</span>
        </div>
        <span className={Styles.DeliveryInfo2}>10개마다 부과</span>
      </div>
    </section>
  );
}
