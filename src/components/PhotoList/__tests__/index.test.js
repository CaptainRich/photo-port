
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '..'



// Invoke the cleanup function, to remove components from the DOM to prevent
// memory leaks as well as variable/data collisions between tests.
afterEach( cleanup );

// Declare the component we're testing
describe('PhotoList is rendering', () => {

    // First test, check that the photo list renders
    it('renders', () => {
      render(<PhotoList />);
    });
  

    // Second test, check the photolist snapshot
    it('renders', () => {
      const { asFragment } = render(<PhotoList />)
      expect(asFragment()).toMatchSnapshot()
    });
  });