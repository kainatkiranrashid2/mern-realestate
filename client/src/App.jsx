import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<Signin />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>

        <Route path="/Profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
