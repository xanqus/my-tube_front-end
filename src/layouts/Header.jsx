import React from "react";
import { useRecoilState } from "recoil";
import { authenticatedState } from "../recoil/store";

const Header = () => {
  const [authenticated, setAuthenticated] = useRecoilState(authenticatedState);
  return (
    <header>
      <div>header</div>
    </header>
  );
};

export default Header;
