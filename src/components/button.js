import PropTypes from "prop-types";
import React from "react";

export default function Button ({name, color, clickHandler, width}) {

    const handleClick = (name) => {

            clickHandler(name);

        },

        colorBtn = (widthBool) => {

            if (widthBool) {

                return `${color} button-zero`;

            }
            return `${color}`;

        };

    return (
        <div
            className={colorBtn(width)}
            onClick={() => handleClick(name)}
        >
            <span className="text">
                {name}
            </span>
        </div>
    );

}

Button.propTypes = {
    "clickHandler": PropTypes.func.isRequired,
    "color": PropTypes.string,
    "name": PropTypes.string.isRequired,
    "width": PropTypes.bool
};

Button.defaultProps = {
    "color": "button btn-primary",
    "width": false
};
