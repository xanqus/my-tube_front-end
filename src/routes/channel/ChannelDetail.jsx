import React from "react";
import { useRecoilValue } from "recoil";
import Layout from "../../layouts/Layout";
import { userState } from "../../recoil";

const ChannelDetail = () => {
  const userInfo = useRecoilValue(userState);
  console.log(userInfo);

  return (
    <Layout>
      <div className="flex">
        <div className="max-w-xs w-0 flex-grow xl:w-full"></div>
        <div className="w-full flex-shrink">
          <div>
            <img src="" alt="profile" />
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChannelDetail;
