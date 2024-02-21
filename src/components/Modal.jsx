const Modal = ({ isOpen, onClose, children }) => {

    return (
        <>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-button" onClick={onClose}>
                            Fermer
                        </button>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;