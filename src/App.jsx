import React, { useState } from 'react';

import './App.css';
import Counter from './components/Counter';

function App() {
  const counterData = [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0, isSpecial: true },
    { id: 4, value: 4 },
  ];
  const [counters, setCounters] = useState(counterData);
  return (
    <div className="App">
      <div className="d-flex">
        {counters.map((c) => (
          <Counter item={c.value} key={c.id} isSpecial={c.isSpecial} />
        ))}
      </div>
      <button>ResetAll</button>
    </div>
  );
}

export default App;
