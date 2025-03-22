import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Toggles from "./components/Toggles";
import AddTasks from "./components/AddTasks";
import ReceiveTasks from "./components/ReceiveTasks";
import "./styles/Button.css";
import "./styles/Transitions.css";

function App() {
  const [mode, setMode] = useState('Adding Tasks'); // Maintain the current mode in the state
  const [fade, setFade] = useState(false);

  const switchMode = () => {
    setFade(true);
    setTimeout(() => {
        setMode(prevMode => (prevMode === 'Adding Tasks' ? 'Receiving a Task' : 'Adding Tasks'));
        setFade(false);
    }, 500);
  };

  return (
    <div id="app-container">
      <Navbar />
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
    </div>
  );
}

export default App;
