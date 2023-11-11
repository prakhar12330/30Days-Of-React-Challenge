// Que: In this lab, you will be developing a simple React application that toggles the visibility of a paragraph. You'll be testing your skills in handling user interactions and managing component states in React.

// Objectives
// Your main objective is to create a toggling mechanism where a paragraph's visibility can be controlled through a button click. This will challenge your understanding of component states and event handlers in React.

// Instructions
// State Management: Use the useState hook from React to manage the visibility state of the paragraph.

// Paragraph: Create a paragraph (<p>) element with the ID my-paragraph. This paragraph will be the target of our toggling mechanism.

// Button: Introduce a button (<button>) with the ID toggle-btn. This button will control the visibility of the paragraph.

// Visibility Control: By default, the paragraph should be visible. On clicking the button for the first time, the paragraph should be removed from the DOM completely. On subsequent clicks, the paragraph's visibility should be toggled.

// Tips
// Remember, merely hiding the paragraph using CSS (e.g., display: none) won't suffice. You have to manage its presence in the DOM.
// Utilize conditional rendering in React to achieve this functionality.

import React, { useState } from 'react';

function App() {
  // State to manage the visibility of the paragraph
  const [isParagraphVisible, setParagraphVisibility] = useState(true);

  // Function to handle button click and toggle paragraph visibility
  const toggleVisibility = () => {
    setParagraphVisibility((prevVisibility) => !prevVisibility);
  };

  return (
    <div>
      {/* Button to toggle paragraph visibility */}
      <button id="toggle-btn" onClick={toggleVisibility}>
        Toggle Paragraph
      </button>

      {/* Paragraph that is conditionally rendered based on visibility state */}
      {isParagraphVisible && (
        <p id="my-paragraph">
          This is the paragraph you can toggle.
        </p>
      )}
    </div>
  );
}

export default App;
