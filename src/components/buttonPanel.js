/* eslint-disable max-lines-per-function */
import Button from "./button";
import React from "react";

export default function ButtonPanel () {

    return (
        <div>

            <div>

                <Button name="AC" />

                <Button name="+/-" />

                <Button name="%" />

                <Button name="/" />

            </div>

            <div>


                <Button name="7" />

                <Button name="8" />

                <Button name="9" />

                <Button name="X" />

            </div>

            <div>

                <Button name="4" />

                <Button name="5" />

                <Button name="6" />

                <Button name="-" />

            </div>

            <div>

                <Button name="1" />

                <Button name="2" />

                <Button name="3" />

                <Button name="+" />

            </div>

            <div>

                <Button name="0" />

                <Button name="." />

                <Button name="=" />

            </div>

        </div>

    );

}

/* eslint-enable max-lines-per-function */
