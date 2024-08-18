import React from 'react';
import '../styles/ResetButton.scss';

function ResetButton({ onClick, enabled }) {
    return (
        <div className='reset-container'>
            <button
                id='reset'
                className={enabled ? 'enabled' : 'disabled'}
                disabled={!enabled}
                onClick={enabled ? onClick : null}
            >
                Reset
            </button>
        </div>
    );
}

export default ResetButton;