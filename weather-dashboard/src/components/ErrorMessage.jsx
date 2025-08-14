// src/components/ErrorMessage.jsx
import React from 'react';

/**
 * Renders an error message.
 * The message is displayed in a red, rounded box.
 *
 * @param {object} props - The component's props.
 * @param {string} props.message - The error message to display.
 */
function ErrorMessage({ message }) {
  // If there's no message, we don't render anything.
  // This is a simple form of conditional rendering within the component itself.
  if (!message) {
    return null;
  }

  return (
    <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
      <p className="font-semibold">Error:</p>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
