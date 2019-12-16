// Test away!
import React from 'react'
import { render } from '@testing-library/react'

import Controls from './Controls';
import {toggleLocked, toggleClosed } from '../dashboard/Dashboard'
test('Unlock Gate', () => {

    let locked = true
    let closed = false
    // let toggleLocked = true
    // let toggleClosed = false
    const { getByTestId, rerender } = render(<Controls 
        locked={locked}
        closed={closed}
        toggleLocked={toggleLocked}
        toggleClosed={toggleClosed}
    />)

    getByTestId('Unlock Gate 1')
})