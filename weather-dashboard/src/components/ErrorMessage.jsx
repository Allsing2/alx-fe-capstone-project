import React from 'react';

/**
  * A component to display error messages in the weather dashboard.
  * @param {object} props - The component's props.
 * @param {string} props.message - The error message to display.
 */
function ErrorMessage({ message }) {
// If there's no message, don't render anything
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
