import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { modalActiveState, videoState } from "../../../recoil";
import { ApiController, BACKEND_URL } from "../../../utils";

const VideoInput = () => {
  const [error, setError] = useState(null);
  const setVideoState = useSetRecoilState(videoState);
  const setActive = useSetRecoilState(modalActiveState);
  const params = useParams();
  const uploadVideos = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      Object.keys(e.target.files).map((key) =>
        formData.append("files", e.target.files[key])
      );

      ApiController({
        headers: { "Content-Type": "multipart/form-data" },
        url: `${BACKEND_URL}/video?channelId=${params.id}`,
        method: "POST",
        data: formData,
      });
      // await axios({
      //   headers: { "Content-Type": "multipart/form-data" },
      //   url: `${BACKEND_URL}/video?channelId=${params.id}`,
      //   method: "POST",
      //   data: formData,
      // });
      const data = await axios({
        url: `${BACKEND_URL}/video?channelId=${params.id}`,
        method: "GET",
      });
      e.target.value = "";
      setVideoState(data.data);
      setActive(false);
    } catch (e) {
      setError(e);
      alert(e.message);
    }
  };
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="flex flex-col modal-box relative max-w-full w-240 h-192 rounded-md p-0">
      <div className="flex border-b h-14">
        <div className="flex justify-center items-center ml-5 text-lg">
          동영상 업로드
        </div>
        <div className="ml-auto w-14">
          <label
            htmlFor="my-modal-4"
            className="flex justify-center items-center h-full cursor-pointer text-gray-700 font-bold"
            onClick={() => {
              setActive(false);
            }}
          >
            ✕
          </label>
        </div>
      </div>
      <div className="flex justify-center items-end h-96">
        <label
          htmlFor="video-upload"
          className="flex justify-center items-center w-36 h-36 rounded-full cursor-pointer mb-10 bg-gray-100"
        >
          <i className="fi fi-rr-folder-upload text-8xl text-gray-600" />
        </label>
      </div>
      <div className="flex flex-col items-center h-auto flex-grow">
        <input
          id="video-upload"
          type="file"
          hidden
          multiple
          onChange={uploadVideos}
        />
        <div>
          <div>동영상 파일을 드래그 앤 드롭하여 업로드</div>
          <div>동영상을 게시하기 전에는 비공개로 설정됩니다.</div>
        </div>
        <div>
          <div className="flex justify-center items-center w-24 h-10 mt-8 bg-blue-500 text-white cursor-pointer">
            <label className="cursor-pointer" htmlFor="video-upload">
              파일 선택
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoInput;
