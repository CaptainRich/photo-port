
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// Invoke the cleanup function, to remove components from the DOM to prevent
// memory leaks as well as variable/data collisions between tests.
afterEach( cleanup );

// Declare the component we're testing
describe( "About component", () =>{
    
    // First test - baseline to verify the component is rendering
    it('renders', () => {
        render(<About />);
      });

    // Second test - compare a snapshot of the 'About' component
    it('matches snapshot DOM node structure', () => {
        
        const { asFragment } = render(<About />);  // return a snapshot of the 'About' component
        expect(asFragment()).toMatchSnapshot();    // do actual and expected snapshots math
      });

})