import React from 'react';
import '../../style.css';
import ProductInfo from '../ProductInfo/ProductInfo';
import DeliveryInfo from '../DeliveryInfo/DeliveryInfo';
import ProductPrice from '../ProductPrice/ProductPrice';

export default function App() {
  return (
    <>
      <ProductInfo />
      <DeliveryInfo />
      <ProductPrice />
    </>
  );
}
