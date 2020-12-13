
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    // Add the hook to maintain the form state.  Initialize the form fields to
    // empty strings.
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;        // destructure 'formState'

    // Add the hook to handle the various error messages that may occur.  Here 'errorMessage' is
    // initialized to an empty string.
    const [errorMessage, setErrorMessage] = useState('');

    /////////////////////////////
    function handleChange(e) {

        // If the input is 'email', then validate the input email address.
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            //console.log(isValid);

            // Set the error messages 
            if (!isValid) {
                setErrorMessage('The specified email address is invalid.');
              } else {
                setErrorMessage('');
            }
        } else {
            // This will check both the 'name' and 'message' fields.
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        } 

        //console.log( 'errorMessage: ', errorMessage );

        if( !errorMessage ) {
            setFormState( {...formState, [e.target.name]: e.target.value} )
        }
    }
   // console.log( formState );

   //////////////////////////////
   function handleSubmit(e) {
        e.preventDefault();
        //console.log(formState);
  }

    return (

        <section>
            <h1>Contact me</h1>

            {/* In the fields below, 'onBlur' acts like 'onChange', except it fires on a change of focus. */}
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onBlur={handleChange} defaultValue={name} />
                </div>

                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" onBlur={handleChange} defaultValue={email} />
                </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" onBlur={handleChange} defaultValue={message} />
                </div>

                {/* If form errors exist from the validation above, show them to the user. */}
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

                <button type="submit">Submit</button>
            </form>

        </section>
    )
}
    
export default ContactForm;