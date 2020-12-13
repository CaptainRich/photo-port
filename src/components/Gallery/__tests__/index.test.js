
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'

// The Gallery component requires a 'prop' of 'currentCategory.  We will 
// mock this for the current set of tests.
const portrait = { name: "portraits", description: "Portraits of people in my life" };


// Invoke the cleanup function, to remove components from the DOM to prevent
// memory leaks as well as variable/data collisions between tests.
afterEach( cleanup );

// Declare the component we're testing
describe('Gallery is rendering', () => {


    // First test, checks the 'portrait' category.
    it('renders', () => {
      render(<Gallery currentCategory={portrait} />);  
    });


    // Second test, checks the gallery snapshot.
    it('matches snapshot', () => {
        const { asFragment } = render(<Gallery currentCategory={portrait} />)
        expect(asFragment()).toMatchSnapshot()
      })

    // Third test, check that the title of the '<h1>' is 'Portraits.
    it('renders', () => {
        const { getByTestId } = render(<Gallery currentCategory={portrait} />)
        expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
      })
    
  })