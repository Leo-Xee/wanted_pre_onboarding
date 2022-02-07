import React, { useState } from "react";
import PropTypes from "prop-types";

import { createPortal } from "react-dom";

function Modal({ children }) {
  const [isModalOpend, setIsModalOpend] = useState(false);
  const el = document.getElementById("modal");

  const onModal = () => {
    setIsModalOpend((prev) => !prev);
  };

  const onClose = () => {
    setIsModalOpend(false);
  };

  return (
    <div>
      <div className="flex justify-center mt-40">
        <button
          type="button"
          onClick={onModal}
          className="w-32 h-14 bg-violet-700 rounded-full text-white"
        >
          Open Modal
        </button>
      </div>
      {isModalOpend &&
        createPortal(
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-25">
            <div className="flex flex-col justify-center items-center w-80 h-40 bg-white rounded-xl">
              <button
                type="button"
                onClick={onClose}
                className="text-black mb-4"
              >
                X
              </button>
              {children}
            </div>
          </div>,
          el,
        )}
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
