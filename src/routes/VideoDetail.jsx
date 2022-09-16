import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../layouts/Layout';

const VideoDetail = () => {
  const [params] = useSearchParams();
  console.log(params.get('id'));
  return (
    <Layout>
      <div>videoDetail</div>
    </Layout>
  );
};

export default VideoDetail;
