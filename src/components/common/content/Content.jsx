import React from 'react';

import logo from '../../../assets/image/logo.svg';

export default ({ h1, count, renderButtons, onChange, arrayNumbers }) =>
    <div className="App">
        <header className="App-header">
            <h1> { h1 } </h1>
            <h2>
                Please open devtools then you see how many re-renders
            </h2>
            <img src={logo} className="App-logo" alt="logo" />
            <div>
                Count: { count }
            </div>
            <div className="container-buttons">
                { renderButtons }
            </div>
            <div className="container-array-number">
                <label> Filter input: </label>
                <input
                    className="input-limit"
                    type="number"
                    {...{ onChange }}
                />
                <div>
                    Array Number: { arrayNumbers }
                </div>
            </div>
        </header>
    </div>
