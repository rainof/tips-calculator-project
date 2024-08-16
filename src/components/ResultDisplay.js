import React from 'react';

function ResultDisplay({ tipAmount, totalPerPerson }) {
    return (
        <div className="result-container">
            <div>
                <div>
                    <h3>Tip Amount</h3>
                    <p>/ person</p>
                </div>
                <div>
                    <p>${tipAmount.toFixed(2)}</p>
                </div>
            </div>
            <div>
                <div>
                    <h3>Total</h3>
                    <p>/ person</p>
                </div>
                <div>
                    <p>${totalPerPerson.toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}

export default ResultDisplay;