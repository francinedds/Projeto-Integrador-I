import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import Login from "./login/login";
import Main from "./main/main";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={Login}></Route>
        <Route path="/main" element={<ProtectedRoute element={<Main />} />} />
        <Route path="/" element={<Navigate to="/main" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
