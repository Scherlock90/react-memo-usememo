import React, { useState } from 'react';
import logo from '../assets/image/logo.svg';

const MyButton = ({ text, handlerChangedCount }) => {
  console.log('MyButton rerender without memo');
  return (
    <button className="buttons" onClick={handlerChangedCount}>
      {text}
    </button>
  )
}

function WithoutMemoAndUseMemo() {
  const numbers = [5, 10, 15, 20, 25, 30];
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(5);

  const arrayNumer = numbers.filter(x => {
      console.log('iteration without useMemo')
      return x > limit
    })

  const handlerChangedCount = changedCount => () => setCount(changedCount);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Counter without memo and useMemo
        </h1>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <div>
          Count: { count }
        </div>
        <div className="container-buttons">
          <MyButton
            text="Increment"
            handlerChangedCount={handlerChangedCount(count => count + 1)}
          />
          <MyButton
            text="Decrement"
            handlerChangedCount={handlerChangedCount(count => count - 1)}
          />
        </div>
        <div className="container-array-number">
          <label>
            Filter input:
          </label>
          <input
            className="input-limit"
            type="number"
            onChange={e => setLimit(e.target.value)}
          />
          <div>
            Array Number: { arrayNumer.map((x, idx) => <span key={idx} className="number">{x}, </span>) }
          </div>
        </div>
      </header>
    </div>
  );
}

export default WithoutMemoAndUseMemo;
