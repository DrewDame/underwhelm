import React from 'react';
import "../styles/Toggles.css";

const Toggles = ({ mode, switchMode }) => {
  return (
    <div id="toggles-container">
      <div>Currently {mode}</div>
      <button onClick={switchMode}>
        {mode === 'Adding Tasks' && 'Receive a Task Instead' || 'Add a Task Instead'}
      </button>
    </div>
  );
};

export default Toggles;