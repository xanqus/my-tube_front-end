import React from 'react';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import Layout from '../../layouts/Layout';
import { authenticatedState, userState } from '../../recoil';

const Home = () => {
  useEffect(() => {
    document.title = 'MyTube';
  }, []);
  const authenticated = useRecoilValue(authenticatedState);
  const userInfo = useRecoilValue(userState);

  return <Layout></Layout>;
};

export default Home;
