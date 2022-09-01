import React, { useRef } from "react";

const ModalBox = () => {
  const modalBox = useRef();
  return (
    <>
      <input
        type="checkbox"
        id="my-modal-4"
        className="modal-toggle modal-button"
        ref={modalBox}
      />
      <label
        htmlFor="my-modal-4"
        className="modal cursor-pointer"
        onChange={() => {}}
      >
        <label className="modal-box relative">
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <button
            onClick={() => {
              modalBox.current.checked = false;
            }}
          >
            click
          </button>
        </label>
      </label>
    </>
  );
};

export default ModalBox;
