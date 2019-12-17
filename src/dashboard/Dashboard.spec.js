// Test away
import React from 'react';

import { render, fireEvent } from '@testing-library/react';
// import Display from './Display';
import Dashboard from './Dashboard';



test('unlock gate integration', ()=>{

    const { getByTestId, getByText } = render(<Dashboard />)
    
    const button = getByTestId(/Unlock Gate 1/i)

    fireEvent.click(button)

    getByText(/Unlocked/i)

})