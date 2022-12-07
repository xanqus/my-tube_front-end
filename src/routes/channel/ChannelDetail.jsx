import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Layout from "../../layouts/Layout";
import { channelState, userState } from "../../recoil";
import { BACKEND_URL } from "../../utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoItem from "../../components/channel/VideoItem";

const ChannelDetail = () => {
  const userInfo = useRecoilValue(userState);
  const channelInfo = useRecoilValue(channelState);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideosByChannelId = async () => {
      const videos = await axios({
        method: "GET",
        url: `${BACKEND_URL}/video/channel/${channelInfo.id}`,
      });
      setVideos(videos.data);
    };
    getVideosByChannelId();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col ml-80">
        <div className="flex w-full flex-shrink pl-48 mt-8 border-gray-300 border-b pb-6">
          <div className="w-20">
            <img
              className="w-full"
              src={channelInfo?.channelProfileImageUrl}
              alt="profile"
            />
          </div>
          <div className="ml-6">
            <div className="text-3xl">{channelInfo?.channelName}</div>
            <div className="mt-3">구독자 0명</div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:md:grid-cols-4 mt-6">
          {videos.map((video, index) => (
            <VideoItem video={video} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ChannelDetail;
