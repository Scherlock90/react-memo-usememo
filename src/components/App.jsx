import React, { useState } from 'react';
import MemoAndUseMemo from './memo-and-usememo/MemoAndUseMemo';
import WithoutMemoAndUseMemo from './without-memo-and-usememo/WithoutMemoAndUseMemo';

import '../assets/style/App.css';

export default function () {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="container-toogle-button">
        <button
          className="toogle-button"
          onClick={() => setToggle(!toggle)}
        >
          Toggle Components
        </button>
      </div>
      {toggle === true && <MemoAndUseMemo />}
      {toggle === false && <WithoutMemoAndUseMemo />}
    </div>
  );
}
