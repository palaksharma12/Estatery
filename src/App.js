import React from "react";
import GlobalStyles from './styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line

import LandingPage from "./LandingPage.js";
import SignUp from "./Signup.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Contact" element={<LandingPage/> } />
          <Route path="/SignUp" element={<SignUp/> } />
        </Routes>
      </Router>
    </>
  );
}