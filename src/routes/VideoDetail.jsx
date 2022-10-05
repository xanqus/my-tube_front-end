import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../layouts/Layout";
import { BACKEND_URL, formatDate } from "../utils";
import { BiLike, BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { BsList } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const VideoDetail = () => {
  const [params] = useSearchParams();
  const [video, setVideo] = useState(null);
  const videoId = params.get("id");

  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/video/${videoId}`,
      });
      setVideo(data.data);
      console.log(data.data.videoUrl);
      document.title = data.data.title;
    };
    getData();
  }, []);
  return (
    <Layout>
      <div className="flex">
        <div className="flex-grow h-screen min-w-[42.5rem] ml-24 mr-6 mt-8">
          <video controls src={video?.videoUrl} className="w-full" />
          <div className="h-28 mt-3">
            <div className="text-2xl font-bold">{video?.title}</div>
            <div>
              조회수 {video?.views}회 {formatDate(video?.regDate)}
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex gap-2">
              <BiLike className="text-3xl" />
              <div>{video?.likeCount}</div>
            </div>
            <div className="flex gap-2">
              <BiDislike className="text-3xl" />
              <div>싫어요</div>
            </div>
            <div className="flex gap-2">
              <RiShareForwardLine className="text-3xl" />
              <div>공유</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-5 mt-3">
              <div>댓글 50,000개</div>
              <div>정렬 기준</div>
              <BsList className="-ml-2 mt-1" />
            </div>
            <div className="flex mt-3">
              <CgProfile className="text-4xl" />
              <input
                type="text"
                className="w-full ml-4 border-t-0 border-r-0 border-l-0 focus:ring-0 focus:outline-0"
              />
            </div>
            <div className="ml-auto mt-3 mr-2 flex gap-4">
              <div>취소</div>
              <div>댓글</div>
            </div>
          </div>
        </div>

        <div className="w-96 h-screen lg:flex hidden"></div>
      </div>
    </Layout>
  );
};

export default VideoDetail;
