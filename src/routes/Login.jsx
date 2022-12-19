import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authenticatedState, channelState, userState } from "../recoil";
import {
  GoogleLogin,
  googleLogout,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import { Buffer } from "buffer";
import { BACKEND_URL } from "../utils";

const responseGoogle = (response) => {
  console.log("response", response);
};

const Login = ({ to }) => {
  console.log("to: ", to);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location pathname: ", location.pathname);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setAuthenticated = useSetRecoilState(authenticatedState);
  const setUserInfo = useSetRecoilState(userState);
  const setChannelState = useSetRecoilState(channelState);
  const onChangeIdInput = (e) => {
    setEmail(e.target.value);
  };
  const onChnagePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const doLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await axios({
        method: "post",
        url: `${BACKEND_URL}/login`,
        data: {
          email,
          password,
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
        const getChannel = async () => {
          const data = await axios({
            url: `${BACKEND_URL}/channel/${payload.username}`,
            method: "GET",
          });
          // TODO: 로그인시 channelstate 마지막 사용한 채널로 변경
          setChannelState(data.data[0]);
          console.log("channel data: ", data.data[0]);
        };

        getChannel();

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
            placeholder="Email"
            value={email}
            onChange={onChangeIdInput}
          />
          <input
            type="text"
            placeholder="PASSWORD"
            value={password}
            onChange={onChnagePasswordInput}
          />
          <button type="submit">로그인</button>
        </form>
      </div>
      {/* <div className="">
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
      </div> */}
    </div>
  );
};

export default Login;
