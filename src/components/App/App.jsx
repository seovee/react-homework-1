import React from 'react';
import '../../style.css';
import ProductInfo from '../ProductInfo/ProductInfo';
import DeliveryInfo from '../DeliveryInfo/DeliveryInfo';
import PurchageButton from '../PurchageButton/PurchageButton';
import ProductPrice from '../ProductPrice/ProductPrice';
import CounterButton from '../CounterButton/CounterButton';

export default function App() {
  return (
    <>
      <ProductInfo />
      <DeliveryInfo />
      <CounterButton />
      <ProductPrice />
      <PurchageButton />
    </>
  );
}
