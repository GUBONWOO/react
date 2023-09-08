import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);

  return (
    <div className='container'>
      <div className='banner'>
        total count: {count} {count > 10 ? 'fire' : 'ice'}
      </div>
      <div className='counters'>
        <Counter total={count} onClick={handleClick} />
        <Counter total={count} onClick={handleClick} />
      </div>
    </div>
  );
}
