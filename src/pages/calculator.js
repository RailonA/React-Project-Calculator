import React from 'react';
import { Box } from '@material-ui/core';
import App from '../components/app';

const Calculator = () => (

  <Box width="700px" mt={5} m="auto">
    <div>
      <h2 className="calcText">Let’s do some math!</h2>
    </div>
    <div className="appDiv">
      <App />
    </div>
  </Box>
);

export default Calculator;
