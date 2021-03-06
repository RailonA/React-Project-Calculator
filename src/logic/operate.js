import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const bigNumberOne = numberOne
    ? new Big(numberOne)
    : null;
  const bigNumberTwo = numberTwo
    ? new Big(numberTwo)
    : null;

  switch (operation) {
    case '+':
      return bigNumberOne.plus(bigNumberTwo).toString();
    case '-':
      return bigNumberOne.minus(bigNumberTwo).toString();
    case 'X':
      return bigNumberOne.times(bigNumberTwo).toString();
    case '÷':
      try {
        bigNumberOne.div(bigNumberTwo);
        return (
          Math.round(bigNumberOne.div(bigNumberTwo) * 1000000.0) / 1000000.0
        ).toString();
      } catch (err) {
        return 'Error, division by 0';
      }
    case '%':
      return `${bigNumberOne.times(100).div(bigNumberTwo)
        .toString()}`;
    default:
      return '0';
  }
};

export default operate;
