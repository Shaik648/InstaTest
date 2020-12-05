import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import SideBar from "./Components/SideBar/SideBar";
import Content from "./Components/Container/Container";
import Topbar from './Components/Header'
import "./App.css";

const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <Router>
      <div className="App wrapper" style={{overflowY:''}}>
        <div>
       <Topbar toggleSidebar={toggleSidebar} />
        </div>
        <div className="d-flex">
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
      </div>
      </div>
    </Router>
  );
};

export default App;