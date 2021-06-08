import React from 'react';
import {render} from '@testing-library/react';
import RealComponent from './real-component'


describe("Main", () => {
    test('renders', () => {
        render(<RealComponent />)
    })
})