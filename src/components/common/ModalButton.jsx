import React from "react";

const ModalButton = ({ children }) => {
  return (
    <>
      <label
        className="flex items-center ml-2 h-16 text-2xl font-bold modal-button cursor-pointer"
        htmlFor="my-modal-4"
      >
        {children}
      </label>
    </>
  );
};

export default ModalButton;
