import React from 'react';
import '../styles/LogOutModal.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const LogoutModal = ({ isOpen, onClose, onLogout }) => {
    return (
        <div className={`logOutModal ${isOpen ? 'open' : ''}`}>
            <div className="logOutModalContent">
            <button onClick={onClose} className='logOutModalContentCloseButton'><AiOutlineCloseCircle/></button>

                <p style={{marginTop:'2rem'}}> Do you want to log out?</p>
                <div className="logOutButtonContainer">
                    <button onClick={onLogout}>Yes</button>
                    <button onClick={onClose}>No</button>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;
