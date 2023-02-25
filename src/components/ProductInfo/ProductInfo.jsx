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
        <h2>래피젠 코로나 자가검사키트 2개입X1박스</h2>
      </div>
      <div>
        <p>88%</p>
        <p>56,760원</p>
        <p>6,370원</p>
      </div>
    </section>
  );
}
