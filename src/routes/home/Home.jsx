import React from "react";
import { useRecoilValue } from "recoil";
import Layout from "../../layouts/Layout";
import { authenticatedState, userState } from "../../recoil";

const Home = () => {
  const authenticated = useRecoilValue(authenticatedState);
  const userInfo = useRecoilValue(userState);
  return (
    <Layout>
      <div>{authenticated ? `환영합니다 ${userInfo.username}님` : "home"}</div>
      <div className="h-screen"></div>
    </Layout>
  );
};

export default Home;
