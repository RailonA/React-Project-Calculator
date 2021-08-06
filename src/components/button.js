/* eslint-disable func-style */
import PropTypes from "prop-types";
import React from "react";

function Button ({name}) {

    return (
        <div>
            {name}
        </div>
    );

}

Button.propTypes = {
    "name": PropTypes.string.isRequired
};

export default Button;
/* eslint-enable func-style */
