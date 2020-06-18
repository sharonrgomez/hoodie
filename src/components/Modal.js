import React from 'react';

const Modal = ({ handleClose, children, show }) => {
    return (
        <>
            {
                show &&
                <div className='modal'>
                    <div className='modal-main'>
                        {children}
                        <button className='button_modal' onClick={handleClose}>Close</button>
                    </div>
                </div>
            }
        </>
    );
};

export default Modal;