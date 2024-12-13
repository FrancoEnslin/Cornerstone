import { ReactNode } from "react";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50  overflow-y-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-300 text-gray-500 hover:text-gray-700 p-3"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
