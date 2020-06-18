import React from 'react';

const Modal = ({ handleClose, children, show }) => {
    const displayModal = show ? 'modal display' : 'modal hide';
    return (
        <div className={displayModal}>
            <div className="modal-main">
                {children}
                <button className='button_modal' onClick={handleClose}>Close</button>
            </div>

        </div>
    );
};

export default Modal;