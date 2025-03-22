import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Toggles from "./components/Toggles";
import AddTasks from "./components/AddTasks";
import ReceiveTasks from "./components/ReceiveTasks";
import Popup from "./components/Popup";
import "./styles/Button.css";
import "./styles/Transitions.css";

function App() {
  const [mode, setMode] = useState('Adding Tasks'); // Maintain the current mode in the state
  const [fade, setFade] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const switchMode = () => {
    setFade(true);
    setTimeout(() => {
        setMode(prevMode => (prevMode === 'Adding Tasks' ? 'Receiving a Task' : 'Adding Tasks'));
        setFade(false);
    }, 500);
  };

  const showPopup = (content) => {
    setPopupContent(content);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <div id="app-container">
      <Navbar showPopup={showPopup}/>
      <main id="main-container">
        <Toggles mode={mode} switchMode={switchMode} />
        <div className={`fade-transition ${fade ? 'fade-out' : 'fade-in'}`}>
        {mode === 'Adding Tasks' ? (
          <AddTasks />
        ) : (
          <ReceiveTasks />
        )}
        </div>
      </main>

      <Popup isVisible={!!popupContent} onClose={closePopup}>
        {popupContent}
      </Popup>
    </div>
  );
}

export default App;
