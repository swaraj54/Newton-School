import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Modal component
const Modal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <h2>Modal Title</h2>
        <p>This is the modal content.</p>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>,
    document.getElementById('modal-root') // Render portal content in a separate DOM element
  );
};

// Main component
const Test = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>React Portal Example</h1>
      <button onClick={handleOpenModal}>Open Modal</button>
      {showModal && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default Test;