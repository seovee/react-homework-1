import React from 'react';
import '../../style.css';
import ProductInfo from '../ProductInfo/ProductInfo';
import DeliveryInfo from '../DeliveryInfo/DeliveryInfo';
import PurchageButton from '../PurchageButton/PurchageButton';

export default function App() {
  return (
    <>
      <ProductInfo />
      <DeliveryInfo />
      <PurchageButton />
    </>
  );
}
