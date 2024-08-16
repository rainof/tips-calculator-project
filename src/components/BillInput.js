import React, { useState } from 'react';

function BillInput({ value, onChange }) {
    const [isPlaceHolderVisible, setIsPlaceHolderVisible] = useState(true);

    const handleFocus = () => {
        if (value === 0 && isPlaceHolderVisible) {
            onChange('');
            setIsPlaceHolderVisible(false);
        }
    }

    const handleBlur = () => {
        if (value === '') {
            onChange(0);
            setIsPlaceHolderVisible(true);
        }
    }

    return(
        <div className="bill-container">
            <label htmlFor="bill">Bill</label>
            <input
                type="number"
                id="bill"
                value={value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => onChange(parseFloat(e.target.value) || '')}
                placeholder="0"
            />
        </div>
    );
}

export default BillInput;