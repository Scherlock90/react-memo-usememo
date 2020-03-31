import React, { memo } from 'react';

export default memo(({ text, handlerChangedCount }) => {
  console.log('MyButton rerender with memo');
  return (
    <button className="buttons" onClick={handlerChangedCount}>
      { text }
    </button>
  )
}, (prev, next) => {
  if(prev.text === next.text) return true;
  return false;
});