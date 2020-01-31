import React, { useState, useMemo } from 'react';
import logo from '../assets/image/logo.svg';

// const MemorizedMyButton = React.memo(({ text, handlerChangedCount }) => {
//   console.log(MyButton rerender with memo');
//   return (
//     <button className="buttons" onClick={handlerChangedCount}>
//       { text }
//     </button>
//   )
// }, (prev, next) => {
//   if(prev.text === next.text) return true;
//   return false;
// });

const MyButton = ({ text, handlerChangedCount }) => {
  console.log('MyButton rerender with memo');
  return (
    <button
      className="buttons"
      onClick={handlerChangedCount}
    >
      {text}
    </button>
  )
}

const MemorizedButton = React.memo((props) => <MyButton {...props} />, () => true)

function MemoAndUseMemo() {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(5);

  const handlerChangedCount = changedCount => () => setCount(changedCount);
  const arrayNumer = useMemo(() => {
    const numbers = [5, 10, 15, 20, 25, 30]
    const filtered = numbers.filter(x => {
      console.log('iteration with useMemo')
      return x > limit
    })
    return filtered;
  }, [limit]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Counter with memo and useMemo
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
          <MemorizedButton
            text="Increment"
            handlerChangedCount={handlerChangedCount(count => count + 1)}
          />
          <MemorizedButton
            text="Decrement"
            handlerChangedCount={handlerChangedCount(count => count - 1)}
          />
          {/* <MemorizedMyButton
            text="Increment"
            handlerChangedCount={handlerChangedCount(count => count + 1)}
          />
          <MemorizedMyButton
            text="Decrement"
            handlerChangedCount={handlerChangedCount(count => count -1)}
          /> */}
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
            Array Number: {
              arrayNumer.map((x, idx) => (
                <span key={idx} className="number">{x}, </span>
              ))
            }
          </div>
        </div>
      </header>
    </div>
  );
}

export default MemoAndUseMemo;
