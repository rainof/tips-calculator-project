import React from 'react';
import '../styles/ResetButton.scss';

function ResetButton({ onClick }) {
    return (
        <div className='reset-container'>
            <button
                id='reset'
                onClick={onClick}
            >
                Reset
            </button>
        </div>
    );
}

export default ResetButton;