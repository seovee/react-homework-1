import React from 'react';
import Styles from './PurchageButton.module.css';
import NormalNaverLogo from '../../assets/svg/type=normal.svg';

export default function PurchageButton() {
  console.log('PurchageButton입니다.');
  return (
    <button type="button" className={Styles.ButtonContainer}>
      <img src={NormalNaverLogo} alt="네이버 로고" />
      구매하기
    </button>
  );
}
