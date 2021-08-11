/* eslint-disable no-magic-numbers */
/* eslint-disable no-ternary */
/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
/* eslint-disable no-undef */
/* eslint-disable max-statements */
/* eslint-disable sort-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-statements-per-line */

const calculate = (data, buttonName) => {

    let {total, next, operation} = data;
    const operands = [
            "+",
            "X",
            "−",
            "÷"
        ],
        nums = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9"
        ];
    if (buttonName === "AC") {

        [
            total,
            next,
            operation
        ] = [
            "0",
            null,
            null
        ];

    }
    if (buttonName === "+/-") {

        if (total) {

            total *= -1;

        }
        if (next) {

            next *= -1;

        }
        operation = null;

    }
    if (buttonName === "%") {

        if (total) {

            next = (0.01 * total).toString();

        }

    }
    if (buttonName === "=") {

        if (total && next && operation) {

            total = operate(
                total,
                next,
                operation
            );
            next = null;
            operation = null;

        }disable;

    }
    if (operands.includes(buttonName)) {

        if (total) {

            operation = buttonName;

        }

    } else if (operation && nums.includes(buttonName)) {

        next = next
            ? next + buttonName
            : buttonName;

    } else if (total && nums.includes(buttonName)) {

        if (total === "0") {

            total = buttonName;

        } else {

            total = buttonName + total;

        }

    } else if (nums.includes(buttonName)) {

        total = total
            ? total + buttonName
            : buttonName;

    } else if (!next && !operation && buttonName === ".") {

        total = total.includes(buttonName)
            ? total
            : total + buttonName;

    } else if (total && operation && buttonName === ".") {

        next = next.includes(buttonName)
            ? next
            : next + buttonName;

    }
    return {
        next,
        operation,
        total
    };

};

export default calculate;
/* eslint-enable no-magic-numbers */
/* eslint-enable no-ternary */
/* eslint-enable max-lines-per-function */
/* eslint-enable complexity */
/* eslint-enable no-undef */
/* eslint-enable max-statements */
/* eslint-enable sort-vars */
/* eslint-enable no-unused-expressions */
/* eslint-enable max-statements-per-line */
