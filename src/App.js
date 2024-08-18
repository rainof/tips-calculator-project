import './App.scss';
import logo from './assets/images/logo.svg';
import React, { useState, useEffect } from 'react';
import BillInput from './components/BillInput';
import TipSelector from './components/TipSelector';
import PeopleInput from './components/PeopleInput';
import ResultDisplay from './components/ResultDisplay';
import ResetButton from './components/ResetButton';

function App() {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [people, setPeople] = useState(0);
  const [customTip, setCustomTip] = useState('');
  const [showPeopleError, setShowPeopleError] = useState(false);
  const [resetButtonEnabled, setResetButtonEnabled] = useState(false);

  useEffect(() => {
    if (bill > 0 || people > 0 || tipPercentage > 0 || customTip !== '') {
      setResetButtonEnabled(true);
    } else {
      setResetButtonEnabled(false);
    }
  }, [bill, tipPercentage, people, customTip]);

  const handleReset = () => {
    setBill(0);
    setTipPercentage(0);
    setPeople(0);
    setCustomTip('');
    setShowPeopleError(false);
    setResetButtonEnabled(false);
  };

  const calculateTip = () => {
    if (people > 0) {
      const tipAmount = Math.floor(bill * tipPercentage / people) / 100;
      const totalPerPerson = parseFloat((bill / people + parseFloat(((bill * tipPercentage) / 100 / people).toFixed(2))).toFixed(2));
      return { tipAmount, totalPerPerson };
    }
    return { tipAmount: 0, totalPerPerson: 0};
  };

  const { tipAmount, totalPerPerson } = calculateTip();

  const handleBillChange = (value) => {
    setBill(value);
    setShowPeopleError(value > 0 && people <= 0);
  };

  const handlePeopleChange = (value) => {
    setPeople(value);
    setShowPeopleError(bill > 0 && value <= 0);
  };

  return (
    <div className='App'>
      <div className='logo-container'>
        <img src={logo} alt='logo' />
      </div>
      <div className='calculator-container'>
        <div className='calculate-section'>
          <div className='bill-section'>
            <BillInput
              value={bill}
              onChange={handleBillChange}
            />
          </div>
          <div className='tip-section'>
            <TipSelector
              selectedTip={tipPercentage}
              onChange={setTipPercentage}
              customTip={customTip}
              onCustomTipChange={setCustomTip}
            />
          </div>
          <div className='people-section'>
            <PeopleInput
              value={people}
              onChange={handlePeopleChange}
              showError={showPeopleError}
            />
          </div>
        </div>
        <div className='display-section'>
          <div className='inner'>
            <ResultDisplay
              tipAmount={tipAmount}
              totalPerPerson={totalPerPerson}
            />
            <ResetButton
              onClick={handleReset}
              enabled={resetButtonEnabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
