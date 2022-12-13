import React from "react";
import { formatDate } from "../../utils";

const SearchedVideoItem = ({ video }) => {
  return (
    <div className="flex gap-3">
      <div className="w-80">
        <img src={video?.thumbnail_url} alt="" />
      </div>
      <div className="flex flex-col gap-2">
        <div>{video?.title}</div>
        <div className="flex gap-3">
          <div>조회수 {video?.views}회</div>
          <div>{formatDate(video.reg_date)}</div>
        </div>
        <div className="flex gap-2">
          <div className="w-5 mt-1">
            <img src={video?.channel_profile_image_url} alt="" />
          </div>
          <div>{video?.channel_name}</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SearchedVideoItem;
