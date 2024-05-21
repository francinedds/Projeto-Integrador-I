import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import Login from "../pages/Login/login.index";
import Main from "../pages/Main/main.index";
import RequestsList from "../pages/RequestsList/requestsList.index";
import NewRequest from "../pages/NewRequest/newRequest.index";
import RequestDetails from "../pages/RequestDetails/requestDetails.index";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={Login}></Route>
        <Route path="/main" element={<ProtectedRoute element={<Main />} />} />
        <Route
          path="/list"
          element={<ProtectedRoute element={<RequestsList />} />}
        />
        <Route
          path="/new"
          element={<ProtectedRoute element={<NewRequest />} />}
        />
        <Route
          path="/request/:id"
          element={<ProtectedRoute element={<RequestDetails />} />}
        />
        <Route path="/" element={<Navigate to="/main" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
