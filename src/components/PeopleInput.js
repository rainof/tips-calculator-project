import React, { useState } from 'react';
import personIcon from '../assets/images/icon-person.svg';
import '../styles/PeopleInput.scss';

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
        <div className='people-container'>
            <div className='people-label'>
                <label htmlFor='people'>Number of People</label>
            </div>
            <div className='people-input'>
                <img className='person-img' src={personIcon} alt="person" />
                <input
                    type='number'
                    id='people'
                    value={value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={(e) => onChange(parseInt(e.target.value) || '')}
                    placeholder='0'
                    style={{
                        color: value === 0 ? 'var(--grayish-cyan)' : 'var(--very-dark-cyan)'
                    }}
                />
            </div>
        </div>
    );
}

export default PeopleInput;