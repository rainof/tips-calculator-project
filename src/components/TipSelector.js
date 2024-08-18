import React, { useState } from 'react';
import '../styles/TipSelector.scss'

function TipSelector({ selectedTip, onChange, customTip, onCustomTipChange }) {
    const tipOptions = [5, 10, 15, 25, 50];

    const handleTipSelect = (tip) => {
        onCustomTipChange('');
        onChange(tip);
    };

    const handleCustomTip = (e) => {
        const value = parseFloat(e.target.value);
        onCustomTipChange(e.target.value);
        onChange(value || 0);
    };

    return (
        <div className='tip-container'>
            <div className='select-tip'>
                <label>Select Tip %</label>
            </div>
            <div className='button-container'>
                <div className='grid-item'>
                    {tipOptions.slice(0, 1).map((tip) => (
                    <button
                        key={tip}
                        className={selectedTip === tip ? 'selected-tip' : ''}
                        onClick={() => handleTipSelect(tip)}
                    >
                        {tip}%
                    </button>
                    ))}
                </div>
                <div className='grid-item'>
                    {tipOptions.slice(1, 2).map((tip) => (
                    <button
                        key={tip}
                        className={selectedTip === tip ? 'selected-tip' : ''}
                        onClick={() => handleTipSelect(tip)}
                    >
                        {tip}%
                    </button>
                    ))}
                </div>
                <div className='grid-item'>
                    {tipOptions.slice(2, 3).map((tip) => (
                    <button
                        key={tip}
                        className={selectedTip === tip ? 'selected-tip' : ''}
                        onClick={() => handleTipSelect(tip)}
                    >
                        {tip}%
                    </button>
                    ))}
                </div>
                <div className='grid-item'>
                    {tipOptions.slice(3, 4).map((tip) => (
                    <button
                        key={tip}
                        className={selectedTip === tip ? 'selected-tip' : ''}
                        onClick={() => handleTipSelect(tip)}
                    >
                        {tip}%
                    </button>
                    ))}
                </div>
                <div className='grid-item'>
                    {tipOptions.slice(4).map((tip) => (
                    <button
                        key={tip}
                        className={selectedTip === tip ? 'selected-tip' : ''}
                        onClick={() => handleTipSelect(tip)}
                    >
                        {tip}%
                    </button>
                    ))}
                </div>
                <div className='grid-item grid-input'>
                    <input
                        type='number'
                        value={customTip}
                        onChange={handleCustomTip}
                        placeholder='Custom'
                    />
                </div>
            </div>
        </div>
    );
}

export default TipSelector;