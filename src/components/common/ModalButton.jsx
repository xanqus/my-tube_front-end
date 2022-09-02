import React from "react";

const ModalButton = ({ children, setActive }) => {
  return (
    <>
      <label
        className="flex items-center ml-2 h-16 text-2xl font-bold modal-button"
        htmlFor="my-modal-4"
      >
        {children}
      </label>
    </>
  );
};

export default ModalButton;
