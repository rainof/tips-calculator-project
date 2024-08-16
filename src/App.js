import './App.scss';
import React, { useState } from 'react';
import BillInput from './components/BillInput';
import TipSelector from './components/TipSelector';
import PeopleInput from './components/PeopleInput';

function App() {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [people, setPeople] = useState(0);

  return (
    <div className="App">
      <BillInput value={bill} onChange={setBill} />
      <TipSelector selectedTip={tipPercentage} onChange={setTipPercentage} />
      <PeopleInput value={people} onChange={setPeople} />
    </div>
  );
}

export default App;
