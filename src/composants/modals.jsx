import React from 'react'

const Modal = ({isVisible, onClose, children}) => {
    if(!isVisible) return null;

    const handleClose = (e) =>{
        if(e.target.id === 'wrapper') onClose();
    }
return (
    <div className='fixed inset-0  bg-black/30 backdrop-blur-[2px] flex justify-center items-center' id="wrapper" onClick={handleClose}>
        <div className="w-[500px] flex flex-col">
            <div className="bg-white p-2 h-flex rounded-xl">{children}</div>
        </div>
    </div>
);
}

export default Modal;
