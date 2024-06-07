import React, { ReactNode } from "react";
import "./modal.css";
type Position = "center" | "right" | "left";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  position?: Position;
  children: ReactNode;
  isShowIconClose: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  position = "center",
  children,
  isShowIconClose = false,
}) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className={`modal ${position} ${isOpen && "open"} `}
          onClick={closeModal}
        >
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            {isShowIconClose && (
              <span className='close' onClick={closeModal}>
                &times;
              </span>
            )}
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
