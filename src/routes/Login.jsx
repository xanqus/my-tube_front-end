import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authenticatedState, userState } from "../recoil";
import {
  GoogleLogin,
  googleLogout,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import { Buffer } from "buffer";

const responseGoogle = (response) => {
  console.log("response", response);
};

const Login = ({ to }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const setAuthenticated = useSetRecoilState(authenticatedState);
  const setUserInfo = useSetRecoilState(userState);
  const onChangeIdInput = (e) => {
    setUserId(e.target.value);
  };
  const onChnagePasswordInput = (e) => {
    setUserPassword(e.target.value);
  };

  const doLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await axios({
        method: "post",
        url: "http://localhost:8287/api/v1/login",
        data: {
          username: userId,
          password: userPassword,
        },
      });

      if (data.headers.authorization) {
        const jwtToken = data.headers.authorization;
        const payload = JSON.parse(
          Buffer.from(jwtToken.split(" ")[1].split(".")[1], "base64").toString(
            "ascii"
          )
        );
        console.log(payload);
        console.log(payload.id);
        setUserInfo({ id: payload.id, username: payload.username });

        setAuthenticated(true);
        localStorage.setItem("login-token", data.headers.authorization);
        if (location.pathname === "/login") return navigate("/");
      }
    } catch (e) {
      console.log(e);
      alert("로그인 실패");
    }
  };
  return (
    <div>
      <div>
        <h2>Login</h2>
        <form onSubmit={doLogin}>
          <input
            type="text"
            placeholder="ID"
            value={userId}
            onChange={onChangeIdInput}
          />
          <input
            type="text"
            placeholder="PASSWORD"
            value={userPassword}
            onChange={onChnagePasswordInput}
          />
          <button type="submit">로그인</button>
        </form>
      </div>
      <div className="">
        <GoogleOAuthProvider clientId="783164907876-44457lrh2o4ggner2rq66vffdechevng.apps.googleusercontent.com">
          <GoogleLogin
            type="icon"
            size="large"
            shape="square"
            onSuccess={responseGoogle}
            onError={responseGoogle}
            useOneTap
          />
        </GoogleOAuthProvider>
        <button
          onClick={() => {
            googleLogout();
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Login;
