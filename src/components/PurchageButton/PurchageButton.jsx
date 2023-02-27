import React, { useState } from 'react';
import Styles from './PurchageButton.module.css';
import NormalNaverLogo from '../../assets/svg/type=normal.svg';
import DisabledNaverLogo from '../../assets/svg/type=disabled.svg';

export default function PurchageButton({ disabled }) {
  return (
    <button
      type="button"
      className={Styles.ButtonContainer}
      disabled={disabled}
    >
      {disabled ? (
        <img
          src={DisabledNaverLogo}
          alt="비활성화된 네이버 로고"
          className={Styles.DisabledButton}
        />
      ) : (
        <img
          src={NormalNaverLogo}
          alt="활성화된 네이버 로고"
          className={Styles.NormalButton}
        />
      )}
      구매하기
    </button>
  );
}
