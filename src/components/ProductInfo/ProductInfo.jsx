import React from 'react';
import Styles from './ProductInfo.module.css';
import ProductImage from '../../assets/svg/Product.svg';

export default function ProductInfo(Product) {
  return (
    <section className={Styles.ProductInfo}>
      <div className={Styles.ProductImageContainer}>
        <img src={ProductImage} alt={Product.alt} />
      </div>
      <div>
        <span>래피젠 코로나 자가검사키트</span>
        <span>2개입X1박스</span>
      </div>
      <div>
        <p>88%</p>
        <p>56,760원</p>
        <p>6,370원</p>
      </div>
    </section>
  );
}
