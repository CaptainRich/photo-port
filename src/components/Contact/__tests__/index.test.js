

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';


// Invoke the cleanup function, to remove components from the DOM to prevent
// memory leaks as well as variable/data collisions between tests.
afterEach( cleanup );

// Declare the component we're testing
describe("Contact component", () => {


    // First test - baseline to verify the component is rendering
    it('renders', () => {
        render(<Contact></Contact>)
    });

    // Second test - compare a snapshot of the 'Nav' component
    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />)
        expect(asFragment()).toMatchSnapshot()
    });

    // Third test, check that the title of the '<h1>' is 'Contact me'.
    it('renders', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    })

    // Fourth test, check that the button text is 'Submit'.
    it('renders', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('buttontag')).toHaveTextContent('Submit')
    })


})