import React from 'react';
import Styles from './CounterButton.module.css';

export default function CounterButton(e) {
  console.log(e);
  return (
    <section className={Styles.CounterButton}>
      <div className={Styles.CounterButtonContainer}>
        <button>+</button>
        <span>1</span>
        <button>+</button>
      </div>
    </section>
  );
}
