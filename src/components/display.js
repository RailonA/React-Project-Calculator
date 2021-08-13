import PropTypes from 'prop-types';
import React from 'react';

function Display({ result }) {
  return (
    <div className="element text">
      {result}
    </div>
  );
}

Display.propTypes = { result: PropTypes.string };

Display.defaultProps = { result: '0' };

export default Display;
