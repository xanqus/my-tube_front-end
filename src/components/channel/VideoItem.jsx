import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utils';

const VideoItem = ({ video }) => {
  const navigate = useNavigate();
  const { videoId, videoUrl, thumbnailUrl, title, regDate } = video;

  return (
    <div
      className='flex flex-col cursor-pointer'
      onClick={() => {
        navigate(`/watch?id=${videoId}`);
      }}
    >
      <div className='w-60 md:w-52 lg:w-60 2xl:w-72'>
        <video
          src={videoUrl}
          poster={thumbnailUrl}
          alt=''
          className='rounded-lg'
          onMouseEnter={(e) => {
            e.currentTarget.muted = true;
            var isPlaying =
              e.currentTarget.currentTime > 0 &&
              !e.currentTarget.paused &&
              !e.currentTarget.ended &&
              e.currentTarget.readyState > e.currentTarget.HAVE_CURRENT_DATA;

            if (!isPlaying) {
              e.currentTarget.play();
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.muted = true;
            var isPlaying =
              e.currentTarget.currentTime > 0 &&
              !e.currentTarget.paused &&
              !e.currentTarget.ended &&
              e.currentTarget.readyState > e.currentTarget.HAVE_CURRENT_DATA;
            if (isPlaying) {
              e.currentTarget.pause();
            }
            e.currentTarget.currentTime = 0;
          }}
        />
      </div>
      <div className='flex flex-col mt-3 gap-2'>
        <div>{title}</div>
        <div className='flex'>
          <div className='mr-3'>조회수 0회</div>
          <div>{formatDate(regDate)}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
