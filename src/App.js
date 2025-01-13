import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import { Signup } from "./components/Signup";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <div>
      <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
