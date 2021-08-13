import React, { useState } from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
import calculate from '../logic/calculate'; // eslint-disable-line no-unused-vars

const App = () => {
  const state = {
    total: '0',
    next: '',
    operation: '',
  };

  const [myState, setMyState] = useState(state);

  const handleClick = (buttonName) => {
    const result = calculate(myState, buttonName);
    setMyState(result);
  };

  const resultHander = (total, next) => {
    if (next) {
      return next;
    }
    return total;
  };

  return (
    <div>
      <Display result={resultHander(myState.total, myState.next)} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
