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
import { useParams } from "react-router-dom";

const ChannelDetail = () => {
  const currentChannel = useRecoilValue(channelState);
  const [channel, setChannel] = useState({});
  const params = useParams();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideosByChannelId = async () => {
      const videos = await axios({
        method: "GET",
        url: `${BACKEND_URL}/video/channel/${params.id}`,
      });
      setVideos(videos.data);
    };
    getVideosByChannelId();
  }, []);
  useEffect(() => {
    const getChannelByChannelId = async () => {
      const channel = await axios({
        method: "GET",
        url: `${BACKEND_URL}/channel/detail/${params.id}`,
      });
      setChannel(channel.data);
    };
    getChannelByChannelId();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col ml-80">
        <div className="flex items-center w-full flex-shrink pl-48 mt-8 border-gray-300 border-b pb-6">
          <div className="w-20">
            <img
              className="w-full"
              src={channel?.channelProfileImageUrl}
              alt="profile"
            />
          </div>
          <div className="ml-6">
            <div className="text-3xl">{channel?.channelName}</div>
            <div className="mt-3">구독자 0명</div>
          </div>
          <div className="mr-20 ml-auto">
            <div>
              {parseInt(currentChannel?.id) !== parseInt(params.id) && (
                <button
                  className="btn bg-gray-900 border-gray-900 rounded-3xl min-h-0 h-10"
                  onClick={() => {}}
                >
                  구독
                </button>
              )}
            </div>
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
