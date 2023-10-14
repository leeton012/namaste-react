import { useState } from 'react';

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);

  return (
    <div className='user-card'>
      <div className='user'>
        <h2>Name: {name}</h2>
        <h2>Count: {count}</h2>
        <h2>Count1: {count1}</h2>
        <button
          onClick={() => {
            setCount(count + 1);
          }}>
          count ++
        </button>
        <h2>Location: Kolkata</h2>
        <h2>Contact: @PrinceM47510445</h2>
      </div>
    </div>
  );
};

export default User;
