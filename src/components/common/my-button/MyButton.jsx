import React from 'react';

export default ({ text, handlerChangedCount, word }) => {
    console.log(`MyButton re-render ${word} memo`);
    return (
        <button className="buttons" onClick={handlerChangedCount}>
            {text}
        </button>
    )
}