import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthRoutes from "./auth/AuthRoutes";
import Home from "./routes/home/Home";
import JwtAuthenticatedUser from "./routes/JwtAuthenticatedUser";
import Login from "./routes/Login";
import Studio from "./routes/studio/Studio";
import UserDetail from "./routes/users/UserDetail";
import WorkSpace from "./routes/WorkSpace";
const About = lazy(() => import("./routes/About"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>loading...</p>}>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route element={<AuthRoutes />}>
            <Route path="/workspace/*" element={<WorkSpace />} />
            <Route
              path="/jwtAuthenticatedUser"
              element={<JwtAuthenticatedUser />}
            />
            <Route path="/users/:id" element={<UserDetail />} />
            <Route path="/studio/*" element={<Studio />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
