import React, { useState } from "react";

import ModalBox from "../../components/common/ModalBox";
import ModalButton from "../../components/common/ModalButton";
import VideoList from "../../components/studio/channel/VideoList";
import Layout from "../../layouts/Layout";

const Channel = () => {
  const [active, setActive] = useState(true);
  return (
    <Layout>
      <div className="flex">
        <div className="w-60 flex-shrink-0 border border-r-0 border-t-0">
          hi
        </div>
        <div className="flex flex-col flex-grow z-0 border border-b-0">
          <ModalButton setActive={setActive}>
            <div>채널 콘텐츠</div>
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

          <VideoList />
        </div>
      </div>
      <ModalBox active={active} setActive={setActive} />
    </Layout>
  );
};

export default Channel;
