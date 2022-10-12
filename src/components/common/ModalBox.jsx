import React from "react";
import { useRecoilValue } from "recoil";
import { isEditingState, modalActiveState } from "../../recoil";
import VideoEdit from "../studio/channel/VideoEdit";

import VideoInput from "../studio/channel/VideoInput";

const ModalBox = () => {
  const active = useRecoilValue(modalActiveState);
  const isEditing = useRecoilValue(isEditingState);

  return (
    <>
      <input
        type="checkbox"
        id="my-modal-4"
        className="modal-toggle"
        checked={active}
        onChange={() => {}}
      />
      <div htmlFor="my-modal-4" className="modal" onClick={() => {}}>
        {active && isEditing ? (
          <VideoEdit />
        ) : !isEditing ? (
          <VideoInput />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ModalBox;
