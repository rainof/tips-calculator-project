import './App.scss';
import React, { useState } from 'react';
import BillInput from './components/BillInput.js'

function App() {
  const [bill, setBill] = useState(0);

  return (
    <div className="App">
      <BillInput value={bill} onChange={setBill} />
    </div>
  );
}

export default App;
