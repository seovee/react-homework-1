import React, { useState } from 'react';
import Styles from './CounterButton.module.css';

function CounterButton(props) {
  const [count, setCount] = useState(0);

  const minusButton = () => {
    setCount(count - 1);
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
