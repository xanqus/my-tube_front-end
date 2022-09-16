import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../layouts/Layout';
import { BACKEND_URL } from '../utils';

const VideoDetail = () => {
  const [params] = useSearchParams();
  const [video, setVideo] = useState(null);
  const videoId = params.get('id');

  useEffect(() => {
    const getData = async () => {
      const data = await axios({
        url: `${BACKEND_URL}/api/v1/video/${videoId}`,
      });
      setVideo(data.data);
      console.log(data.data.videoUrl);
    };
    getData();
  }, []);
  return (
    <Layout>
      <div className='flex'>
        <div className='flex-grow h-screen min-w-[42.5rem] bg-blue-500'>
          <video controls src={video?.videoUrl} className='w-full' />
        </div>
        <div className='w-96 h-screen bg-red-500 lg:flex hidden'></div>
      </div>
    </Layout>
  );
};

export default VideoDetail;
