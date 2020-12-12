import React from 'react';
import Nav from './components/Nav';
import About from './components/About';



////////////////////////////////////////////////////////////////////////////////

// This is the center of the application, the root component, or wrapper that
// houses all of the other components.  To effect any change on the application
// we need to either modify this file or add components inside of it.

////////////////////////////////////////////////////////////////////////////////
function App() {
  return (
    <div> 
      {/* This element will put up the header. */}
      <Nav></Nav>        
      <main>
          <About />        
      </main>
    </div>
  );
}

export default App;
