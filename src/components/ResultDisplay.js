import React from 'react';
import '../styles/ResultDisplay.scss';

function ResultDisplay({ tipAmount, totalPerPerson }) {
    return (
        <div>
            <div className='result-container'>
                <div className='tip-amount'>
                    <div className='amount-title'>
                        <h3>Tip Amount</h3>
                        <p>/ person</p>
                    </div>
                    <div className='amount-value'>
                        <p>${tipAmount.toFixed(2)}</p>
                    </div>
                </div>
                <div className='total'>
                    <div className='amount-title'>
                        <h3>Total</h3>
                        <p>/ person</p>
                    </div>
                    <div className='amount-value'>
                        <p>${totalPerPerson.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultDisplay;