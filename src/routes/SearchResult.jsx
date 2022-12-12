import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import SearchedVideoItem from '../components/videoSearch/SearchedVideoItem';
import Layout from '../layouts/Layout';
import { BACKEND_URL } from '../utils';

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const [searchedVideos, setSearchedVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(searchParams.get('search_query'));

  useEffect(() => {
    const searchVideosByTitleAndDescription = async () => {
      const videos = await axios({
        method: 'GET',
        url: `${BACKEND_URL}/video/search?title=${searchParams.get(
          'search_query'
        )}&description=${searchParams.get('search_query')}`,
      });
      console.log(videos.data);
      setSearchedVideos(videos.data);
      setLoading(false);
    };

    searchVideosByTitleAndDescription();
  }, []);
  if (loading) return <div>loading...</div>;

  return (
    <Layout>
      <div className='flex flex-col xl:ml-96'>
        <div className='flex flex-col w-full flex-shrink mt-8 bg-red-500'>
          {searchedVideos.map((video, index) => (
            <SearchedVideoItem key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SearchResult;
