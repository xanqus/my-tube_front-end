import React from "react";
import { useRecoilState } from "recoil";
import { isEditingState, modalActiveState } from "../../recoil";
import VideoEdit from "../studio/channel/VideoEdit";

import VideoInput from "../studio/channel/VideoInput";

const ModalBox = ({ selectedVideo }) => {
  const [active, setActive] = useRecoilState(modalActiveState);
  const [isEditing, setIsEditing] = useRecoilState(isEditingState);
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
          <VideoEdit selectedVideo={selectedVideo} />
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
