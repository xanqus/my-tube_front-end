import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Layout from "../layouts/Layout";
import { BACKEND_URL, formatDate } from "../utils";
import { BiLike, BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { BsList } from "react-icons/bs";
import Comment from "../components/videoDetail/Comment";
import { useRecoilValue } from "recoil";
import { authenticatedState, channelState } from "../recoil";
import { ApiController } from "../utils";

const VideoDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const authenticated = useRecoilValue(authenticatedState);
  const [params] = useSearchParams();
  const [video, setVideo] = useState(null);
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);
  const channelInfo = useRecoilValue(channelState);
  const videoId = params.get("id");
  const [alreadyLikesVideo, setAlreadyLikesVideo] = useState(false);

  // const formData = new FormData();

  const sendText = async (e) => {
    e.preventDefault();

    // formData.append("text", text);
    await ApiController({
      url: `/comment/${videoId}/${channelInfo.id}`,
      method: "POST",
      data: { text },
    });
    // await axios({
    //   url: `${BACKEND_URL}/comment/${videoId}/${channelInfo.id}`,
    //   method: "POST",
    //   headers: {
    //     Authorization: localStorage.getItem("login-token"),
    //   },
    //   data: { text },
    // });
    const latestComments = await axios({
      url: `${BACKEND_URL}/comment/${videoId}`,
      method: "GET",
    });
    setComments(latestComments.data);
    setText("");
  };

  useEffect(() => {
    const getData = async () => {
      const videos = await axios({
        url: `${BACKEND_URL}/video/${videoId}`,
      });
      const comments = await axios({
        url: `${BACKEND_URL}/comment/${videoId}`,
        method: "GET",
      });

      setVideo(videos.data);
      setComments(comments.data);

      document.title = videos.data.title;
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      const alreadyLikes = await axios({
        method: "GET",
        url: `${BACKEND_URL}/likes/clickedLikeBefore/${videoId}/${channelInfo.id}`,
      });
      setAlreadyLikesVideo(alreadyLikes.data);
    };
    getData();
  }, [video]);
  return (
    <Layout>
      <div className="flex">
        <div className="flex-grow h-screen min-w-[42.5rem] ml-24 mr-6 mt-8">
          <video controls src={video?.videoUrl} className="w-full" autoPlay />
          <div className="h-28 mt-3">
            <div className="text-2xl font-bold">{video?.title}</div>
            <div>
              조회수 {video?.views}회 {formatDate(video?.regDate)}
            </div>
          </div>
          <div className="flex gap-6">
            <div
              className="flex gap-2 cursor-pointer"
              onClick={async () => {
                if (!authenticated) {
                  navigate("/login", {
                    state: { to: location.pathname + location.search },
                  });
                }
                await axios({
                  method: "POST",
                  url: `${BACKEND_URL}/likes/${videoId}/${channelInfo.id}`,
                });
                const videoData = await axios({
                  method: "GET",
                  url: `${BACKEND_URL}/video/${videoId}`,
                });
                setVideo(videoData.data);
              }}
            >
              <BiLike
                className={
                  alreadyLikesVideo ? "text-3xl text-blue-500" : "text-3xl"
                }
              />
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
              <div>댓글 {comments.length}개</div>
              <div>정렬 기준</div>
              <BsList className="-ml-2 mt-1" />
            </div>
            <form onSubmit={sendText} className="flex flex-col">
              <div className="flex mt-3">
                <div className="w-8 h-8">
                  <img
                    className="w-full h-full"
                    src={
                      authenticated
                        ? channelInfo.channelProfileImageUrl
                        : "https://mblogthumb-phinf.pstatic.net/MjAyMDExMDFfMTgy/MDAxNjA0MjI4ODc1NDMw.Ex906Mv9nnPEZGCh4SREknadZvzMO8LyDzGOHMKPdwAg.ZAmE6pU5lhEdeOUsPdxg8-gOuZrq_ipJ5VhqaViubI4g.JPEG.gambasg/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84_%ED%95%98%EB%8A%98%EC%83%89.jpg?type=w800"
                    }
                    alt="profile"
                  />
                </div>
                <input
                  type="text"
                  className="w-full ml-4 border-t-0 border-r-0 border-l-0 focus:ring-0 focus:outline-0"
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                  onClick={() => {
                    if (!authenticated) {
                      navigate("/login", {
                        state: { to: location.pathname + location.search },
                      });
                    }
                  }}
                />
              </div>
              <div
                className="ml-auto mt-3 mr-2 flex gap-4 cursor-pointer"
                onClick={sendText}
              >
                댓글
              </div>
            </form>
            <ul className="flex flex-col gap-4 mb-8">
              {comments.map((comment, index) => (
                <Comment comment={comment} key={index} />
              ))}
            </ul>
          </div>
        </div>
        <div className="w-96 h-screen lg:flex hidden"></div>
      </div>
    </Layout>
  );
};

export default VideoDetail;
