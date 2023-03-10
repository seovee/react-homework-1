import React, { useState } from 'react';
import Styles from './CounterButton.module.css';

function CounterButton({ count, setCount }) {
  const minusButton = () => {
    if (count === 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  const plusButton = () => {
    setCount(count + 1);
  };

  return (
    <section className={Styles.CounterButton}>
      <div className={Styles.CounterButtonContainer}>
        <button onClick={minusButton}>-</button>
        <span>{count}</span>
        <button onClick={plusButton}>+</button>
      </div>
    </section>
  );
}

export default CounterButton;
