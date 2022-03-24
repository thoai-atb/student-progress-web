import { useEffect } from "react";
import { ReactPortal } from "./react-portal";
import { FaTimes } from "react-icons/fa";

export const Modal = ({ children, isOpen, onClose, title = "Modal" }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? onClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div
        className="fixed inset-0 flex items-center justify-center"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
        onClick={onClose}
      >
        <div
          className="bg-white shadow-xl rounded"
          onClick={(e) => e.stopPropagation()}
        >
          <ModalHeader title={title} onClose={onClose} />
          {children}
        </div>
      </div>
    </ReactPortal>
  );
};

const ModalHeader = ({ title, onClose }) => {
  return (
    <div className="flex w-full justify-between p-4 text-xl items-center">
      <div>{title}</div>
      <div
        className="text-background-600 hover:text-background-900 cursor-pointer text-lg"
        onClick={onClose}
      >
        <FaTimes />
      </div>
    </div>
  );
};
