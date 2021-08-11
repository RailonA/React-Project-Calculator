import PropTypes from "prop-types";
import React from "react";

export default function Button ({btnName, clickHandler}) {

    const handleClick = (btnName) => clickHandler(btnName);

    return (
        <button
            onClick={handleClick(btnName)}
            type="button"
        >
            {btnName}
        </button>
    );

}

Button.propTypes = {
    "btnName": PropTypes.string.isRequired,
    "clickHandler": PropTypes.func.isRequired
};
