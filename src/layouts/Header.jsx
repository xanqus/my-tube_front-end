import React from "react";
import { useRecoilState } from "recoil";
import { authenticatedState } from "../recoil/store";

const Header = () => {
  const [authenticated, setAuthenticated] = useRecoilState(authenticatedState);
  return (
    <header>
      <div className="h-14 fixed top-0 left-0 w-full">
        <div className="navbar min-h-0 h-14 bg-base-100">
          <div className="flex">
            <label
              className="btn btn-square btn-ghost hover:bg-transparent"
              htmlFor="my-drawer"
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
            <a className="btn btn-ghost normal-case text-xl hover:bg-transparent">
              <i className="fi fi-brands-youtube text-red-500 mt-2"></i>
              <div className="ml-2">MyTube</div>
            </a>
          </div>
          <div className="flex-1 justify-end gap-2 ml-auto">
            <div className="form-control mx-auto w-1/3">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered border-gray-400"
              />
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
