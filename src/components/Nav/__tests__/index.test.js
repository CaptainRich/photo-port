
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// Invoke the cleanup function, to remove components from the DOM to prevent
// memory leaks as well as variable/data collisions between tests.
afterEach( cleanup );

// Declare the component we're testing
describe( "About component", () =>{
    
        
    // First test - baseline to verify the component is rendering
    it('renders', () => {
        render(<Nav />);
      });

    // Second test - compare a snapshot of the 'Nav' component
    it('matches snapshot', () => {
        
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
      });

});

// Now test for the 'camera emoji'
describe('emoji is visible', () => {

    it('inserts emoji into the h2', () => {

        // Arrange
        const { getByLabelText } = render(<Nav />);

        // Assert  
        expect(getByLabelText('camera')).toHaveTextContent('📸');

    })
});


// Now test the navigation links
describe('links are visible', () => {

    it('inserts text into the links', () => {

      // Arrange
      const { getByTestId } = render(<Nav />);

      // Assert
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');

    });
  });