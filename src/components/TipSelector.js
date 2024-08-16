import React, { useState } from 'react';

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
        <div className="tip-container">
            <label>Select Tip %</label>
            <div className="tip-btn">
                {tipOptions.map((tip) => (
                    <button
                        key={tip}
                        className={selectedTip === tip ? 'selected-tip' : ''}
                        onClick={() => handleTipSelect(tip)}
                    >
                        {tip}%
                    </button>
                ))}
                <input
                    type="number"
                    value={customTip}
                    onChange={handleCustomTip}
                    placeholder="Custom"
                />
            </div>
        </div>
    )
}

export default TipSelector;