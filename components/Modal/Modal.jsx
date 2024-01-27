"use client";

import { MdOutlineClose } from "react-icons/md";

const Modal = ({ isOpen, onClose, children }) => {
  const theme = localStorage.getItem("theme");

  if (!isOpen) return null;

  return (
    <section className="modal_backdrop bg-white/2">
      <div className={`${theme === "light" ? "modal_dark text-white" : "modal_light text-gray-900"}`}>
        {children}
        {/* close btn */}
        <div className="modal_close-btn" onClick={onClose}>
          <MdOutlineClose className="text-sm text-gray-300 dark:text-gray-900" />
        </div>
      </div>
    </section>
  );
};

export default Modal;
