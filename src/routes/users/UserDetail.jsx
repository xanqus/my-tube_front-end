import React from "react";
import { useRecoilValue } from "recoil";
import Layout from "../../layouts/Layout";
import { userState } from "../../recoil";

const UserDetail = () => {
  const userInfo = useRecoilValue(userState);

  return (
    <Layout>
      <div>userInfo id: {userInfo.id}</div>
    </Layout>
  );
};

export default UserDetail;
