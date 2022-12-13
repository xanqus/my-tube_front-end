import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utils';

const SearchedVideoItem = ({ video }) => {
  const navigate = useNavigate();
  const videoRef = useRef();

  return (
    <div
      className='flex gap-3 cursor-pointer max-w-4xl w-full'
      onClick={() => {
        navigate(`/watch?id=${video.id}`);
      }}
      onMouseEnter={() => {
        videoRef.current.muted = true;
        var isPlaying =
          videoRef.current.currentTime > 0 &&
          !videoRef.current.paused &&
          !videoRef.current.ended &&
          videoRef.current.readyState > videoRef.current.HAVE_CURRENT_DATA;
        if (!isPlaying) {
          videoRef.current.play();
        }
      }}
      onMouseLeave={() => {
        videoRef.current.muted = true;
        var isPlaying =
          videoRef.current.currentTime > 0 &&
          !videoRef.current.paused &&
          !videoRef.current.ended &&
          videoRef.current.readyState > videoRef.current.HAVE_CURRENT_DATA;
        if (isPlaying) {
          videoRef.current.pause();
        }
        videoRef.current.currentTime = 0;
      }}
    >
      <div className='w-80'>
        <video
          src={video.video_url}
          poster={video.thumbnail_url}
          alt=''
          className='rounded-lg'
          ref={videoRef}
        />
      </div>
      <div className='flex flex-col gap-2 flex-grow'>
        <div>{video?.title}</div>
        <div className='flex gap-3'>
          <div>조회수 {video?.views}회</div>
          <div>{formatDate(video.reg_date)}</div>
        </div>
        <div
          className='flex gap-2'
          onClick={(e) => {
            if (e.currentTarget != e.target) {
              e.stopPropagation();
              navigate(`/channel/${video.channel_id}`);
            }
          }}
        >
          <div className='w-5 mt-1'>
            <img src={video?.channel_profile_image_url} alt='' />
          </div>
          <div>{video?.channel_name}</div>
        </div>
        <div>{video?.description}</div>

        <div
          className='w-full h-full cursor-default'
          onClick={(e) => {
            if (e.currentTarget == e.target) {
              e.stopPropagation();
            }
          }}
        ></div>
      </div>
    </div>
  );
};

export default SearchedVideoItem;
