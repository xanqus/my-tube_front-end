import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import VideoItem from '../../components/channel/VideoItem';
import Layout from '../../layouts/Layout';
import { authenticatedState, userState } from '../../recoil';
import { BACKEND_URL } from '../../utils';

const Home = () => {
  const [allVideos, setAllVideos] = useState([]);
  useEffect(() => {
    document.title = 'MyTube';
  }, []);
  const authenticated = useRecoilValue(authenticatedState);
  const userInfo = useRecoilValue(userState);
  useEffect(() => {
    const getAllVideos = async () => {
      const data = await axios({
        method: 'GET',
        url: `${BACKEND_URL}/video/all`,
      });
      setAllVideos(data.data);
    };
    getAllVideos();
  }, []);

  return (
    <Layout>
      <div className='flex flex-col ml-80'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:md:grid-cols-4 mt-6'>
          {allVideos.map((video, index) => (
            <VideoItem video={video} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
