import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../calculator';

describe('Calculator page', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Calculator />);
    expect(asFragment(<Calculator />)).toMatchSnapshot();
  });
});
