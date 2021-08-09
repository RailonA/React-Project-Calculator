/* eslint-disable no-magic-numbers */
/* eslint-disable no-ternary */

import Big from "big.js";

const operate = (firstnumber, secondNumber, operation) => {

    const numberOne = new Big(firstnumber),
        numberTwo = new Big(secondNumber);
    let result = 0;

    switch (operation) {

    case "+":
        result = numberOne.plus(numberTwo);
        break;

    case "-":
        result = numberOne.minus(numberTwo);
        break;

    case "x":
        result = numberOne.times(numberTwo);
        break;

    case "%":
        result = numberOne.mod(numberTwo);
        break;

    case "/":
        result = numberOne.div(numberTwo);
        break;

    case "+/-":
        result = secondNumber
            ? numberTwo * -1
            : numberOne * -1;
        break;

    case "AC":
        result = 0;
        break;

    case ".":
        result = 0.0;
        break;

    default:
        break;

    }

    return result;

};

export default operate;
/* eslint-disable no-ternary */
/* eslint-disable no-ternary */