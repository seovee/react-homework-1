import React, {useState} from 'react';
import Styles from './PurchageButton.module.css';
import NormalNaverLogo from '../../assets/svg/type=normal.svg';

export default function PurchageButton() {
  const HoverButton = (e) => {
    return 
  }


  return (
    <button type="button" className={Styles.ButtonContainer} onMouseOver={HoverButton}>
      <img src={NormalNaverLogo} alt="네이버 로고" />
      구매하기
    </button>
  );
}
