import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    return (
        <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
            <div className="modal-content">
                {children}
            </div>
        </div>
    );
};

export default Modal;