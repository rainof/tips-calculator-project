import React, { useState } from 'react';
import dollarIcon from '../assets/images/icon-dollar.svg'
import '../styles/BillInput.scss'

function BillInput({ value, onChange }) {
    const [isPlaceHolderVisible, setIsPlaceHolderVisible] = useState(true);

    const handleFocus = () => {
        if (value === 0 && isPlaceHolderVisible) {
            onChange('');
            setIsPlaceHolderVisible(false);
        }
    };

    const handleBlur = () => {
        if (value === '') {
            onChange(0);
            setIsPlaceHolderVisible(true);
        }
    };

    return(
        <div className='bill-container'>
            <div className='bill-label'>
                <label htmlFor='bill'>Bill</label>
            </div>
            <div className='bill-input'>
                <img className='dollar-img' src={dollarIcon} alt='dollar' />
                <input
                    type='number'
                    id='bill'
                    value={value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={(e) => onChange(parseFloat(e.target.value) || '')}
                    placeholder='0'
                    style={{
                        color: value === 0 ? 'var(--grayish-cyan)' : 'var(--very-dark-cyan)'
                    }}
                />
            </div>
        </div>
    );
}

export default BillInput;