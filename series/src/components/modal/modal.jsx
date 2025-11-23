import React from 'react';

const Modal = ({ title, children, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>{title}</h3>
                    <button className="modal-close" onClick={onClose} aria-label="Fechar">×</button>
                </div>
                <div className="modal-body">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
