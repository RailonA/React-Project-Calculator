import PropTypes from 'prop-types';
import React from 'react';

function Button({ btnName, clickHandler }) {
  const handleClick = (btnName) => clickHandler(btnName);

  return (
    <button
      onClick={() => handleClick(btnName)}
      type="button"
    >
      {btnName}
    </button>
  );
}

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  btnName: PropTypes.string.isRequired,
};

export default Button;
