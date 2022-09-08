import React from "react";
import { useRecoilState } from "recoil";
import {
  currentlySelectedVideoState,
  isEditingState,
  modalActiveState,
} from "../../../recoil";
import { formatDate } from "../../../utils";

const VideoListItem = ({ video }) => {
  const [active, setActive] = useRecoilState(modalActiveState);
  const [isEditing, setIsEditing] = useRecoilState(isEditingState);
  const [selectedVideo, setSelectedVideo] = useRecoilState(
    currentlySelectedVideoState
  );
  return (
    video && (
      <tr>
        <th className="border-y">
          <input
            type="checkbox"
            checked="checked"
            className="rounded-none checkbox checkbox-sm focus:ring-0"
            onChange={() => {}}
          />
        </th>
        <td className="border-y">
          <div className="flex">
            <div className="w-36">
              <img src={video.thumbnailUrl} alt="thumnail" />
            </div>
            <div className="flex flex-col ml-6">
              <div
                className="cursor-pointer hover:underline"
                onClick={() => {
                  setSelectedVideo(video);
                  setActive(true);
                  setIsEditing(true);
                }}
              >
                {video.title}
              </div>
              <div>설명추가</div>
            </div>
          </div>
        </td>
        <td className="border-y">
          {video.isTemp ? "초안" : video.isPublic ? "공개" : "미공개"}
        </td>
        <td className="border-y">없음</td>
        <td className="border-y">
          <div className="flex flex-col">
            <div>{formatDate(video.regDate)}</div>
            <div>게시날짜</div>
          </div>
        </td>
        <td className="border-y">{video.views}</td>
        <td className="border-y">0</td>
        <td className="border-y">{video.likeCount}</td>
      </tr>
    )
  );
};

export default VideoListItem;
