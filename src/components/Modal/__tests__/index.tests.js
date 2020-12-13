

import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModal = jest.fn();


const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  };

// Invoke the cleanup function, to remove components from the DOM to prevent
// memory leaks as well as variable/data collisions between tests.
afterEach( cleanup );

// Declare the component we're testing
describe('Modal component', () => {
    it('renders', () => {
        // First test - baseline to verify the component is rendering
        render(<Modal currentPhoto={currentPhoto} />);  
    });
  });

  describe('Modal Snapshot', () => {
    // Second test - compare a snapshot of the 'About' component
    it('matches snapshot DOM node structure', () => {
      const { asFragment } = render(<Modal currentPhoto={currentPhoto} />);  // return a snapshot of the 'About' component
      expect(asFragment()).toMatchSnapshot();    // do actual and expected snapshots math
    });
});

describe('Click Event', () => {
    // Third test - test to close the modal
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal
          onClose={mockToggleModal}
          currentPhoto={currentPhoto}
        />);
        fireEvent.click(getByText('Close this modal'));
    
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
      });
  }) 