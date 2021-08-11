import React, { useState } from 'react';

import './App.css';
import Counter from './components/Counter';

function App() {
  const counterData = [
    { id: 1, value: 4 },
    { id: 2, value: 3 },
    { id: 3, value: 0, isSpecial: true },
    { id: 4, value: 4 },
  ];
  const [counters, setCounters] = useState(counterData);

  const handleCount = (counterToEditId, operation) => {
    console.log('counter with id,', counterToEditId, 'operation', operation);

    const counterCopy = [...counters];
    const foundCounterToEdit = counterCopy.find(
      (c) => c.id === counterToEditId
    );
    let { value, isSpecial } = foundCounterToEdit;
    const count = value;
    const difference = isSpecial ? 2 : 1;
    const countFix = isNaN(count) ? 0 : count;

    if (operation === '-') foundCounterToEdit.value = countFix - difference;
    if (operation === '+') foundCounterToEdit.value = countFix + difference;
    if (operation === 'rs') {
      foundCounterToEdit.value = isSpecial ? 'start over' : 0;
    }

    setCounters(counterCopy);
  };

  const resetCounters = () => {
    const countersAfterReset = counters.map((c) => ({
      ...c,
      value: c.isSpecial ? 'start over' : 0,
    }));
    console.log(countersAfterReset);
    setCounters(countersAfterReset);
  };

  return (
    <div className="App">
      <div className="d-flex">
        {counters.map((c) => (
          <Counter
            onHandleCount={handleCount}
            item={c}
            key={c.id}
            isSpecial={c.isSpecial}
          />
        ))}
      </div>
      <button onClick={resetCounters}>ResetAll</button>
    </div>
  );
}

export default App;
