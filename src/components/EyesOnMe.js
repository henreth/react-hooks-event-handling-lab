import React from 'react';
// // Code EyesOnMe Component Here
// Your job is to create a component that registers whenever he focuses on you, and when his eyes are drifting off.

// In the components/EyesOnMe.js file, create a EyesOnMe React component.
// In that component, render a button with the text 'Eyes on me'.
// On that button, add event handlers that listen for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.

function EyesOnMe() {

    function handleFocus() {
      console.log("Good!");
    }
  
    function handleBlur() {
      console.log("Hey! Eyes on me!");
    }
  
    return (
      <button onFocus={handleFocus} onBlur={handleBlur}>
        Eyes on me
      </button>
    );
  }
  
export default EyesOnMe;