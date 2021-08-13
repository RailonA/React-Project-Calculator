import React from 'react';
import { Box } from '@material-ui/core';
import App from '../components/app';

const Calculator = () => (
  <Box width="700px" mt={5} m="auto">
    <div className="appDiv">
      <App />
    </div>
  </Box>
);

export default Calculator;
