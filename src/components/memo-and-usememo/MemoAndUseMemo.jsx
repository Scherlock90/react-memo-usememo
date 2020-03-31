import React, { useState, useMemo } from 'react';

import Content from '../common/content/Content';
import MyButton from '../common/my-button/MyButton';

//if you want to another way implemented
// import MemorizedMyButton from './memorized-my-button/MemorizedMyButton';

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
    <Content
      h1={'Counter with memo and useMemo'}
      {... { count }}
      renderButtons={
        <>
          <MemorizedButton
            text="Increment"
            word={'with'}
            handlerChangedCount={handlerChangedCount(count => count + 1)}
          />
          <MemorizedButton
            text="Decrement"
            word={'with'}
            handlerChangedCount={handlerChangedCount(count => count - 1)}
          />
          {/* if you want to another way implemented */}
          {/* <MemorizedMyButton
            text="Increment"
            handlerChangedCount={handlerChangedCount(count => count + 1)}
          />
          <MemorizedMyButton
            text="Decrement"
            handlerChangedCount={handlerChangedCount(count => count -1)}
          /> */}
        </>
      }
      onChange={e => setLimit(e.target.value)}
      arrayNumbers={arrayNumer.map((x, idx) => (
        <span key={idx} className="number">{x}, </span>
      ))}
    />
  )
}

export default MemoAndUseMemo;
