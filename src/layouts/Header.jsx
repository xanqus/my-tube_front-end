import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import {
  authenticatedState,
  channelState,
  modalActiveState,
  subscribeChannelListState,
  userState,
  videoState,
} from "../recoil";

const Header = ({ setDrawerHidden }) => {
  const [authenticated, setAuthenticated] = useRecoilState(authenticatedState);
  const channelInfo = useRecoilValue(channelState);
  const resetUserInfo = useResetRecoilState(userState);
  const resetChannelInfo = useResetRecoilState(channelState);
  const resetVideoState = useResetRecoilState(videoState);
  const resetSubscribeChannelListState = useResetRecoilState(
    subscribeChannelListState
  );
  const navigate = useNavigate();
  const setActive = useSetRecoilState(modalActiveState);
  const [searchword, setSearchword] = useState("");

  return (
    <header>
      <div className="h-14 fixed top-0 left-0 w-full shadow-md z-10">
        <div className="navbar min-h-0 h-14 bg-base-100">
          <div className="flex">
            <label
              className="btn btn-square btn-ghost hover:bg-transparent"
              htmlFor="my-drawer"
              onClick={() => {
                setDrawerHidden((prev) => (prev ? "" : "hidden"));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <div
              className="btn btn-ghost normal-case text-xl hover:bg-transparent"
              onClick={() => {
                navigate("/");
              }}
            >
              <i className="fi fi-brands-youtube text-red-500 mt-2"></i>
              <div className="ml-2">MyTube</div>
            </div>
          </div>
          <div className="flex-1 justify-end gap-2 ml-auto">
            <div className="form-control mx-auto w-1/3">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered border-gray-400"
                value={searchword}
                onChange={(e) => {
                  setSearchword(e.target.value);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    navigate(`/results?search_query=${searchword}`);
                  }
                }}
              />
            </div>
            <Link
              onClick={() => {
                setActive(true);
              }}
              to={`/studio/channel/${channelInfo.id}`}
              state={{ to: `/studio/channel/${channelInfo.id}` }}
            >
              <i className="flex items-center fi fi-rr-video-plus text-3xl mr-2"></i>
            </Link>

            {authenticated ? (
              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={channelInfo.channelProfileImageUrl}
                      alt="profile"
                    />
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to={`/channel/${channelInfo.id}`}>내 채널</Link>
                  </li>
                  <li>
                    <div>Settings</div>
                  </li>
                  <li>
                    <div
                      onClick={() => {
                        setAuthenticated(false);
                        resetVideoState();
                        resetUserInfo();
                        resetChannelInfo();
                        resetSubscribeChannelListState();
                        navigate("/");
                      }}
                    >
                      Logout
                    </div>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex">
                <div className="mr-2">회원가입</div>
                <div className="mr-2">
                  <Link to="/login" state={{ to: "/" }}>
                    로그인
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
