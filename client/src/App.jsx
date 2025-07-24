import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

const App = () => {
  

  return (
    <div className="w-full">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default App;