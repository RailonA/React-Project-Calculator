/* eslint-disable sort-vars */
/* eslint-disable react/jsx-no-bind */
import React, {useState} from "react";
import ButtonPanel from "./buttonPanel";
import Display from "./display";
import calculate from "../logic/calculate";

export default function App () {

    const state = {
            "next": null,
            "operation": null,
            "total": "0"
        },

        [
            myState,
            setMyState
        ] = useState(state),

        handleClick = (buttonName) => {

            const result = calculate(
                buttonName,
                myState
            );
            setMyState(result);

        },

        resultHander = (total, next) => {

            if (next) {

                return next;

            }
            return total;

        };

    return (
        <div>
            <Display result={resultHander(
                myState.total,
                myState.next
            )}
            />

            <ButtonPanel clickHandler={handleClick} />
        </div>
    );

}
/* eslint-enable sort-vars */
/* eslint-enable react/jsx-no-bind */

