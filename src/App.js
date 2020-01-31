import React, { useState } from 'react';
import MemoAndUseMemo from './components/MemoAndUseMemo';
import WithoutMemoAndUseMemo from './components/WithoutMemoAndUseMemo';
import './assets/style/App.css';


function App() {
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

export default App;
