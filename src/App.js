import './App.scss';
import logo from './assets/images/logo.svg';
import React, { useState } from 'react';
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

  const handleReset = () => {
    setBill('');
    setTipPercentage(0);
    setPeople('');
    setCustomTip('');
  }

  const calculateTip = () => {
    if (people > 0) {
      const tipAmount = Math.floor(bill * tipPercentage / people) / 100;
      const totalPerPerson = parseFloat((bill / people + parseFloat(((bill * tipPercentage) / 100 / people).toFixed(2))).toFixed(2));
      return { tipAmount, totalPerPerson };
    }
    return { tipAmount: 0, totalPerPerson: 0};
  }

  const { tipAmount, totalPerPerson } = calculateTip();

  return (
    <div className='App'>
      <div className='logo-container'>
        <img src={logo} alt='logo' />
      </div>
      <div className='calculator-container'>
        <BillInput
          value={bill}
          onChange={setBill}
        />
        <TipSelector
          selectedTip={tipPercentage}
          onChange={setTipPercentage}
          customTip={customTip}
          onCustomTipChange={setCustomTip}
        />
        <PeopleInput
          value={people}
          onChange={setPeople}
        />
        <div className='display-container'>
          <ResultDisplay
            tipAmount={tipAmount}
            totalPerPerson={totalPerPerson}
          />
          <ResetButton
            onClick={handleReset}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
