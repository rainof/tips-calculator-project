import React, { useState } from "react";

function PeopleInput({ value, onChange }) {
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

    return (
        <div className="people-container">
            <label htmlFor="people">Number of People</label>
            <input
                type="number"
                id="people"
                value={value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => onChange(parseInt(e.target.value) || '')}
                placeholder="0"
            />
        </div>
    );
}

export default PeopleInput;