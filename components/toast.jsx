import React, { useEffect, useState } from "react";
import { XIcon } from "@heroicons/react/solid";

const Toast = ({ type = "success", message, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
        onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 max-w-xs p-4 rounded-lg shadow-lg text-white transition-opacity duration-300 ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button
          onClick={() => {
            setShow(false);
            onClose();
          }}
          className="ml-4 text-white hover:text-gray-200"
        >
          <XIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
