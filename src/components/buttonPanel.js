import PropTypes from 'prop-types';
import React from 'react';
import Button from './button';

function ButtonPanel({ clickHandler }) {
  const handleClick = (btnName) => clickHandler(btnName);

  return (
    <div>
      <div>
        <Button name="AC" color="button" clickHandler={handleClick} />
        <Button name="+/-" color="button" clickHandler={handleClick} />
        <Button name="%" color="button" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} />
      </div>
      <div>
        <Button name="7" color="button" clickHandler={handleClick} />
        <Button name="8" color="button" clickHandler={handleClick} />
        <Button name="9" color="button" clickHandler={handleClick} />
        <Button name="X" clickHandler={handleClick} />
      </div>
      <div>
        <Button name="4" color="button" clickHandler={handleClick} />
        <Button name="5" color="button" clickHandler={handleClick} />
        <Button name="6" color="button" clickHandler={handleClick} />
        <Button name="−" clickHandler={handleClick} />
      </div>
      <div>
        <Button name="1" color="button" clickHandler={handleClick} />
        <Button name="2" color="button" clickHandler={handleClick} />
        <Button name="3" color="button" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} />
      </div>
      <div>
        <Button name="0" wide color="button" clickHandler={handleClick} />
        <Button name="." color="button" clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = { clickHandler: PropTypes.func.isRequired };

export default ButtonPanel;
