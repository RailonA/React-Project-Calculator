import PropTypes from 'prop-types';
import React from 'react';
import Button from './button';

function ButtonPanel({ clickHandler }) {
  const handleClick = (btnName) => clickHandler(btnName);

  const groups = [
    [
      'AC',
      '+/-',
      '%',
      '÷',
    ],
    [
      '7',
      '8',
      '9',
      'X',
    ],
    [
      '4',
      '5',
      '6',
      '-',
    ],
    [
      '1',
      '2',
      '3',
      '+',
    ],
    [
      '0',
      '.',
      '=',
    ],
  ];
  return (
    <div className="button-panel">
      {groups.map((group) => (
        <div key={`group-${groups.indexOf(group)}`}>
          {group.map((btnName) => (
            <Button
              key={`btnName-${group.indexOf(btnName)}`}
              btnName={btnName}
              clickHandler={handleClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

ButtonPanel.propTypes = { clickHandler: PropTypes.func.isRequired };

export default ButtonPanel;
