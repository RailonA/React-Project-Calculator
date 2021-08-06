/* eslint-disable func-style */
/* eslint-disable no-trailing-spaces */

import PropTypes from "prop-types";
import React from "react";

function Display ({result}) {

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

export default Display;
/* eslint-enable func-style */
/* eslint-disable no-trailing-spaces */
