/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
/* eslint-disable max-statements */

import operate from "./operate";

const calculate = (btnName, data = {}) => {

    let {total, next, operation} = data;
    const numbers = Array(10).
            fill(null).
            map((num, int) => int.toString()),
        operators = [
            "+",
            "-",
            "X",
            "÷",
            "%"
        ];

    if (btnName === "+/-") {

        return {
            ...data,
            "next": next * -1,
            "total": total * -1
        };

    }

    if (btnName === "AC") {

        return {
            ...data,
            "next": null,
            "operation": null,
            "total": null
        };

    }

    if (btnName === ".") {

        if (!next.includes(".")) {

            next += btnName;

        }

    }

    if (numbers.includes(btnName)) {

        while (next === null) {

            next = "";

        }
        next += btnName;

    }

    if (operators.includes(btnName)) {

        while (next !== null && operation !== null) {

            total = operate(
                total,
                next,
                operation
            );
            operation = btnName;
            next = null;
            operation = null;

        }
        while (next !== null) {

            total = next;
            next = null;

        }
        if (next === null || operation === null) {

            operation = btnName;

        }

    }

    if (btnName === "=") {

        if (total && !next) {

            const result = total;
            total = result;

        }
        if (!total && !next) {

            total = 0;

        }
        if (total && next && operation) {

            total = operate(
                total,
                next,
                operation
            );
            next = null;
            operation = null;

        }

    }

    return {next,
        operation,
        total};

};

export default calculate;
/* eslint-enable no-magic-numbers */
/* eslint-enable max-lines-per-function */
/* eslint-enable complexity */
/* eslint-enable max-statements */
