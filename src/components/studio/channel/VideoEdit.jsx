import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {
  currentlySelectedVideoState,
  isEditingState,
  modalActiveState,
} from "../../../recoil";
import VideoEditStep from "./videoEdit/VideoEditStep";

const VideoEdit = () => {
  const [active, setActive] = useRecoilState(modalActiveState);
  const [isEditing, setIsEditing] = useRecoilState(isEditingState);
  const [stepNumber, setStepNumber] = useState(0);
  const [selectedVideo, setSelectedVideo] = useRecoilState(
    currentlySelectedVideoState
  );

  return (
    <div className="flex flex-col modal-box relative max-w-full w-240 h-208 rounded-md p-0">
      <div className="flex border-b h-14 flex-shrink-0">
        <div className="flex justify-center items-center ml-5 text-lg">
          {selectedVideo && selectedVideo.title}
        </div>
        <div className="ml-auto w-14">
          <label
            htmlFor="my-modal-4"
            className="flex justify-center items-center h-full cursor-pointer text-gray-700 font-bold"
            onClick={() => {
              setActive(false);
              setIsEditing(false);
              setSelectedVideo(null);
            }}
          >
            ✕
          </label>
        </div>
      </div>
      <div className="h-auto justify-center items-end">
        <VideoEditStep stepNumber={stepNumber} setStepNumber={setStepNumber} />

        <div className="h-full">
          {stepNumber == 0 ? (
            <div className="flex h-full pt-4">
              <div className=" w-3/5 h-screen pl-12">
                <div className="text-2xl font-bold h-12">세부정보</div>
                <div className="border border-gray-300 focus-within:border-blue-500 rounded">
                  <div className="text-sm pl-2 pt-2">제목(필수항목)</div>
                  <input
                    type="text"
                    className="w-full border-none p-4 pt-3 focus:ring-0"
                    value={selectedVideo.title}
                    onChange={() => {}}
                  />
                </div>
                <div className="mt-6 border border-gray-300 focus-within:border-blue-500 rounded">
                  <div className="text-sm pl-2 pt-2">설명</div>
                  <textarea
                    type="text"
                    className="w-full border-none p-4 pt-3 focus:ring-0 resize-none"
                    placeholder="시청자에게 동영상에 대해 이야기하기"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-6">
                  <div>미리보기 이미지</div>
                  <div className="text-sm text-gray-400">
                    동영상의 내용을 알려주는 사진을 선택하거나 업로드하세요.
                    시청자의 시선을 사로잡을만한 이미지를 사용해 보세요.
                  </div>
                  <input type="file" />
                </div>
              </div>
              <div className="flex flex-col items-end w-2/5 h-screen pr-12">
                <div className="w-72 h-40 mt-12 ">
                  <video
                    className="w-full h-full rounded-t"
                    poster={selectedVideo.thumbnailUrl}
                    controls
                  >
                    <source src={selectedVideo.videoUrl} />
                  </video>
                </div>
                <div className="w-72 border border-gray-400 h-32  rounded-b text-sm p-2">
                  <div>동영상 링크</div>
                  <div>https://~~</div>
                  <div>파일 이름</div>
                  <div>{selectedVideo.filename}</div>
                </div>
              </div>
            </div>
          ) : (
            <div>2번</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoEdit;
