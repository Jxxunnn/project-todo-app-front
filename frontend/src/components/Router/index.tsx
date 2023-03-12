import Auth from "@components/HOC/Auth";
import LoginPage from "@pages/LoginPage";
import SignupPage from "@pages/SignupPage";
import HomePage from "@pages/HomePage";
import React from "react";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  const AuthHomePage = Auth(HomePage);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={AuthHomePage} />
      <Route path="/todo/:id" element={AuthHomePage} />
    </Routes>
  );
};

export default Router;
