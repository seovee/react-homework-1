import React from 'react';
import Styles from './ProductInfo.module.css';
import ProductImage from '../../assets/svg/Product.svg';

export default function ProductInfo(Product) {
  return (
    <section className={Styles.ProductInfo}>
      <div className={Styles.ProductImageContainer}>
        <img src={ProductImage} alt={Product.alt} />
      </div>
      <div className={Styles.ProductNameContainer}>
        <figcaption className={Styles.ProductName}>
          <span>래피젠 코로나 자가검사키트</span>
          <span>2개입X1박스</span>
        </figcaption>
      </div>
      <ul className={Styles.ProductPriceContainer}>
        <li className={Styles.PriceSale}>88%</li>
        <li className={Styles.PriceOriginal}>
          <span className={Styles.PriceBefore}>56,760원</span>
          <span className={Styles.PriceAfter}>6,370원</span>
        </li>
      </ul>
    </section>
  );
}
