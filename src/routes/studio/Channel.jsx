import React, { useState } from "react";

import ModalBox from "../../components/common/ModalBox";
import ModalButton from "../../components/common/ModalButton";
import VideoList from "../../components/studio/channel/VideoList";
import Layout from "../../layouts/Layout";

const Channel = () => {
  const [active, setActive] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <Layout>
      <div className="flex pointer-events-auto">
        <div className="flex w-60 flex-shrink-0 border border-r-0 border-t-0 z-0">
          side menu
          <div className="btn z-auto">click</div>
        </div>
        <div className="flex flex-col flex-grow z-0 border border-b-0">
          <ModalButton setActive={setActive}>
            <div
              onClick={() => {
                console.log("active", active);
                console.log("isEditing", isEditing);
              }}
            >
              채널 콘텐츠
            </div>
            <div
              className="flex justify-center items-center border w-auto ml-auto mr-4 text-md px-3 cursor-pointer"
              onClick={() => {
                setActive(true);
              }}
            >
              <i className="fi fi-rs-video-plus mt-1 mr-2 text-red-500"></i>
              <div className="text-base">만들기</div>
            </div>
          </ModalButton>

          <VideoList setActive={setActive} setIsEditing={setIsEditing} />
        </div>
      </div>
      <ModalBox
        active={active}
        setActive={setActive}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    </Layout>
  );
};

export default Channel;
