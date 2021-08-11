import React from 'react';

// contorlled component
export default function Counter({
  onHandleCount: handleCount,
  isSpecial: special,
  item,
}) {
  const handleDisabled = () => {
    // if (special && count === 0) return true;
    // if (count === 'start over') return true;
    return false;
  };
  return (
    <div style={{ width: '25%' }}>
      <h2>{special && 'Special '}Counter</h2>
      <h2>{item.value}</h2>
      <div>
        <button onClick={() => handleCount(item.id, '+')}>
          {special && '2'}+
        </button>
        <button
          disabled={handleDisabled()}
          onClick={() => handleCount(item.id, '-')}
        >
          {special && '2'}-
        </button>
      </div>
      <button onClick={() => handleCount(item.id, 'rs')}>reset</button>
    </div>
  );
}
