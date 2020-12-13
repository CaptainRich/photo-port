import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';



////////////////////////////////////////////////////////////////////////////////

// This is the center of the application, the root component, or wrapper that
// houses all of the other components.  To effect any change on the application
// we need to either modify this file or add components inside of it.

////////////////////////////////////////////////////////////////////////////////
function App() {

  // Maintain the state of the application and what is currently rendered.
  // By initializing 'contactSelected to false, the contact form will not be initially shown.
  const [contactSelected, setContactSelected] = useState(false);


  const [categories] = useState([
    {
      name: "commercial",
      description: "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [ currentCategory, setCurrentCategory ] = useState( categories[0] );

  return (
    <div> 
      {/* This element will put up the header. */}
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory} 
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      >
      </Nav>     

      <main>
        {!contactSelected ? (
          <>
            {/* Render 'gallery' and 'about' if 'contactSelected' is false. Note these two DOM elements are wrapped in 'React Fragments"!  */}
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
            // Render the contact form if 'contactSelected' is true. 
            <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
