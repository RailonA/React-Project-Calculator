/* eslint-disable sort-vars */
import PropTypes from "prop-types";
import React from "react";

export default function Button ({name, color, clickHandler, wide}) {

    const handleClick = (name) => {

            clickHandler(name);

        },

        colorBtn = (wideBool) => {

            if (wideBool) {

                return `${color} button-zero`;

            }
            return `${color}`;

        };

    return (
        <div
            className={colorBtn(wide)}
            onClick={handleClick(name)}
            onKeyDown={handleClick(name)}
            role="button"
            tabIndex={0}
        >
            <span className="text">
                {name}
            </span>
        </div>);

}


Button.propTypes = {
    "clickHandler": PropTypes.func.isRequired,
    "color": PropTypes.string,
    "name": PropTypes.string.isRequired,
    "wide": PropTypes.bool
};

Button.defaultProps = {
    "color": "button btn-primary",
    "wide": false
};
/* eslint-enable sort-vars */
