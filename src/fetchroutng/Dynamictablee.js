import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./doccode";
import Create from "./create";
import Edit from "./Edit";
import Home from "./home";

function DynamicTablee() {
  return (
    <div className="App">
      <h1 className="table ">Dynamic Table </h1>
      <h3>CRUD Operations</h3>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default DynamicTablee;