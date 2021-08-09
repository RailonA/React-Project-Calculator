/* eslint-disable init-declarations */
/* eslint-disable sort-vars */
/* eslint-disable one-var */

import operate from "./operate";

const operations = [
        "+",
        "−",
        "×",
        "÷",
        "%",
        "AC",
        "=",
        "+/-",
        "."
    ],

    calculate = (buttonName, data) => {

        const {next, operation, total} = data;
        let totalGen;

        if (operations.includes(buttonName)) {

            totalGen = operate(
                buttonName,
                next,
                total
            );

            return {buttonName,
                next,
                totalGen};

        }

        const newNext = buttonName;
        return {newNext,
            operation,
            total};

    };

export default calculate;
/* eslint-enable init-declarations */
/* eslint-enable sort-vars */
/* eslint-enable one-var */
