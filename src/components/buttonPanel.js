/* eslint-disable max-lines-per-function */
/* eslint-disable max-lines-per-function */
import Button from "./button";
import PropTypes from "prop-types";
import React from "react";

export default function ButtonPanel (props) {

    const handleClick = (name) => {

        props.clickHandler(name);

    };

    return (
        <div>

            <div>

                <Button
                    clickHandler={handleClick(this)}
                    name="AC"
                />

                <Button
                    clickHandler={handleClick(this)}
                    name="+/-"
                />

                <Button
                    clickHandler={handleClick(this)}
                    name="%"
                />

                <Button
                    clickHandler={handleClick(this)}
                    name="/"
                />

            </div>

            <div>


                <Button
                    clickHandler={handleClick(this)}
                    name="7"
                />

                <Button
                    clickHandler={handleClick(this)}
                    name="8"
                />

                <Button
                    clickHandler={handleClick(this)}
                    name="X"
                />

            </div>

            <div>

                <Button
                    clickHandler={handleClick(this)}
                    name="4"
                />

                <Button
                    clickHandler={handleClick(this)(this)(this)}
                    name="5"
                />

                <Button
                    clickHandler={handleClick(this)(this)(this)}
                    name="6"
                />

                <Button
                    clickHandler={handleClick(this)(this)(this)}
                    name="-"
                />

            </div>

            <div>

                <Button
                    clickHandler={handleClick(this)(this)}
                    name="1"
                />

                <Button
                    clickHandler={handleClick(this)(this)}
                    name="2"
                />

                <Button
                    clickHandler={handleClick(this)(this)}
                    name="3"
                />

                <Button
                    clickHandler={handleClick(this)(this)}
                    name="+"
                />

            </div>

            <div>

                <Button
                    clickHandler={handleClick(this)}
                    name="0"
                />

                <Button
                    clickHandler={handleClick(this)}
                    name="."
                />

                <Button
                    clickHandler={handleClick(this)}
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
