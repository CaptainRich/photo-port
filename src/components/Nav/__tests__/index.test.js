
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// Add the data and mock functions to address the 'props' passed into 
// the Nav() function.
const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();


// Invoke the cleanup function, to remove components from the DOM to prevent
// memory leaks as well as variable/data collisions between tests.
afterEach( cleanup );

// Declare the component we're testing
describe( "About component", () =>{
    
        
    // First test - baseline to verify the component is rendering
    it('renders', () => {
      render(<Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />);
      });

    // Second test - compare a snapshot of the 'Nav' component
    it('matches snapshot', () => {
        
        const { asFragment } = render(<Nav 
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
        />);
        
        expect(asFragment()).toMatchSnapshot();
      });

});

// Now test for the 'camera emoji'
describe('emoji is visible', () => {

    it('inserts emoji into the h2', () => {

        // Arrange
        const { getByLabelText } = render(<Nav 
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
        />);

        // Assert  
        expect(getByLabelText('camera')).toHaveTextContent('📸');

    })
});


// Now test the navigation links
describe('links are visible', () => {

    it('inserts text into the links', () => {

      // Arrange
      const { getByTestId } = render(<Nav 
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
        />);

      // Assert
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');

    });
  });