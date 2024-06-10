// Modal.js
import React from 'react';
import './modal.css';

const Modal = ({ videoUrl, closeModal }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <video controls>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {!videoUrl && <p>Video URL not provided</p>}
            </div>
        </div>
    );
};

export default Modal;
