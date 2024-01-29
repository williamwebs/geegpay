"use client";

import { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const Modal = ({ isOpen, onClose, children }) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    // Check if localStorage is defined (client-side)
    const storedTheme =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;

    // Update the theme based on localStorage or use the default "light" theme
    setTheme(storedTheme || "light");
  }, [theme]);

  if (!isOpen) return null;

  return (
    <section className="modal_backdrop bg-white/2">
      <div
        className={`${
          theme === "light"
            ? "modal_dark text-white"
            : "modal_light text-gray-900"
        }`}
      >
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
