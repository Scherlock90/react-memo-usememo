import React, { useState } from 'react';

import Content from '../common/content/Content';
import MyButton from '../common/my-button/MyButton';

function WithoutMemoAndUseMemo() {
  const numbers = [5, 10, 15, 20, 25, 30];
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(5);

  const arrayNumer = numbers.filter(x => {
      console.log('iteration without useMemo');
      return x > limit
  });

  const handlerChangedCount = changedCount => () => setCount(changedCount);

  return (
    <Content
      h1={'Counter without memo and useMemo'}
      {... { count }}
      renderButtons={
        <>
          <MyButton
            text="Increment"
            word={'without'}
            handlerChangedCount={handlerChangedCount(count => count + 1)}
          />
          <MyButton
            text="Decrement"
            word={'without'}
            handlerChangedCount={handlerChangedCount(count => count - 1)}
          />
        </>
      }
      onChange={e => setLimit(e.target.value)}
      arrayNumbers={arrayNumer.map((x, idx) => <span key={idx} className="number">{x}, </span>)}
    />
  )
}

export default WithoutMemoAndUseMemo;
