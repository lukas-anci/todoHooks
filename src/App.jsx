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

  const handleCount = (id, operation) => {
    console.log('counter with id,', id, 'operation', operation);
    // const difference = special ? 2 : 1;
    // const countFix = isNaN(count) ? 0 : count;

    // if (operation === '-') return setCount(countFix - difference);
    // if (operation === '+') return setCount(countFix + difference);
    // if (operation === 'rs')
    //   return special ? setCount('start over') : setCount(0);
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
      <button>ResetAll</button>
    </div>
  );
}

export default App;
