import React from 'react';
import "../styles/Popup.css";

const Popup = ({isVisible, onClose, children}) => {
    if (!isVisible) return null;

    return (
        <div id="popup-overlay" onClick={onClose}>
            <div id="popup-window" onClick={(e) => e.stopPropagation()}>
                <button className="popup-close" onClick={onClose}>
                    X
                </button>
                {children}
            </div>
        </div>
    );
};

export default Popup;