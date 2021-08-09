/* eslint-disable max-lines-per-function */
import Button from "./button";
import PropTypes from "prop-types";
import React from "react";

export default function ButtonPanel (props) {

    const handleClick = (name) => {

            props.clickHandler(name);

        },


        symbols = [
            "AC",
            "+/-",
            "%",
            "/"
        ],
        firstGroup = [
            "7",
            "8",
            "9",
            "X"
        ],
        secondGroup = [
            "4",
            "5",
            "6",
            "−"
        ],
        thirdGroup = [
            "1",
            "2",
            "3",
            "+"
        ];


    return (
        <div>
            <div>
                {
                    symbols.map((btn) => <Button
                        clickHandler={handleClick}
                        key={btn}
                        name={btn}
                    />)
                }
            </div>

            <div>

                (
                {
                    firstGroup.map((btn) => <Button
                    key={btn}
                    name={btn}
                    clickHandler={handleClick}
                    />)
                }
                )
            </div>

            <div>
                {
                    secondGroup.map((btn) => <Button
                        key={btn}
                        name={btn}
                        clickHandler={handleClick}
                    />)
                }
            </div>

            <div>
                {
                    thirdGroup.map((btn) => (<Button
                        key={btn}
                        name={btn}
                        clickHandler={handleClick}
                    />)
                }
            </div>

            <div>
                <Button
                    clickHandler={handleClick}
                    name="0"
                />

                <Button
                    clickHandler={handleClick}
                    name="."
                />

                <Button
                    clickHandler={handleClick}
                    name="="
                />
            </div>
        </div>
    );

}


ButtonPanel.propTypes = {
    "clickHandler": PropTypes.func
};

ButtonPanel.defaultProps = {
    "clickHandler": 0
};

/* eslint-enable max-lines-per-function */
