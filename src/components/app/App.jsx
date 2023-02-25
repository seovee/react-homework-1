import React from 'react';
import PurchageButton from '../PurchageButton/PurchageButton';
import '../../style.css';

export default function App() {
  console.log(PurchageButton);
  return (
    <>
      <div>
        <h1>저걸 어떻게 만들지?</h1>
        <p>래피젠 코로나 자가 검사 키트</p>
        <p>2개입X1박스</p>
        <PurchageButton />
      </div>
    </>
  );
}
