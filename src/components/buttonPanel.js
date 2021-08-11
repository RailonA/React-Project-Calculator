import Button from "./button";
import PropTypes from "prop-types";
import React from "react";


export default function ButtonPanel ({clickHandler}) {

    const handleClick = (btnName) => clickHandler(btnName),

        groups = [
            [
                "AC",
                "+/-",
                "%",
                "÷"
            ],
            [
                "7",
                "8",
                "9",
                "X"
            ],
            [
                "4",
                "5",
                "6",
                "-"
            ],
            [
                "1",
                "2",
                "3",
                "+"
            ],
            [
                "0",
                ".",
                "="
            ]
        ];
    return (
        <div className="button-panel">
            {groups.map((group) => (<div key={`group-${groups.indexOf(group)}`}>
                    {group.map((btnName) =>
                        <Button
                            btnName={btnName}
                            clickHandler={handleClick}
                            key={`btnName-${group.indexOf(btnName)}`}
                    />)}
            </div>))}
        </div>
    );

}

ButtonPanel.propTypes = {"clickHandler": PropTypes.func.isRequired};

