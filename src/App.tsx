import React from 'react';
import { Routes, Route } from "react-router-dom";

/* Components */
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import Home from "./components/Home";

/* Styles */
import { GlobalStyle } from './global-styles';

const App = () => {
  return (
    <div className="container">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/shop-card" element={ <Home /> } />
      </Routes>
    </div>
  );
}

export default App;
