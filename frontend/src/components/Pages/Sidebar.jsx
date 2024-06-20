import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/" className="sidebar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/users" className="sidebar-link">
            Users
          </Link>
        </li>
        <li>
          <Link to="/settings" className="sidebar-link">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
