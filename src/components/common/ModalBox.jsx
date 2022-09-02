import axios from "axios";
import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil";

const ModalBox = ({ active, setActive }) => {
  const userInfo = useRecoilValue(userState);
  return (
    <>
      <input
        type="checkbox"
        id="my-modal-4"
        className="modal-toggle"
        checked={active}
        onChange={() => {}}
      />
      <div htmlFor="my-modal-4" className="modal">
        <div className="flex flex-col modal-box relative max-w-full w-240 h-208 rounded-md p-0">
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
              onChange={async (e) => {
                e.preventDefault();
                const formData = new FormData();

                Object.keys(e.target.files).map((key) =>
                  formData.append("files", e.target.files[key])
                );
                formData.append("id", JSON.stringify(userInfo.id));

                await axios({
                  headers: { "Content-Type": "multipart/form-data" },
                  url: "http://localhost:8287/api/v1/videos",
                  method: "POST",
                  data: formData,
                });
                e.target.value = "";
                setActive(false);
              }}
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
      </div>
    </>
  );
};

export default ModalBox;
