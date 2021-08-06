import PropTypes from "prop-types";
import React from "react";

export default function Button ({name}) {

    return (
        <div>
            {name}
        </div>
    );

}

Button.propTypes = {
    "name": PropTypes.string.isRequired
};
