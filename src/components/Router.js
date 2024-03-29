import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AppRouter = (isLoggedIn) => {
 
  return (
    <Router>
      <Routes>
        {isLoggedIn ? 
        <>
        <Route path="/" element={<Home/>}> 
        </Route>
        
        
        </> : <Route path="/" element={<Auth/>}>
        </Route>}
      </Routes>
    </Router>
  );
};

export default AppRouter;