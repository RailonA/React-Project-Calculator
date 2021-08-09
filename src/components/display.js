

import PropTypes from "prop-types";
import React from "react";

export default function Display ({result}) {

    return (

        <div>
            {result}
        </div>

    );

}

Display.propTypes = {
    "result": PropTypes.string
};

Display.defaultProps = {
    "result": "0"
};