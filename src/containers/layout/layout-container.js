import React from "react";
import HeaderComponent from "./components/header";
import "../../index.css";
import { Outlet, Link } from "react-router-dom";

const LayoutContainer = (props) => {
  return (
    <div>
      {/* <div>
                <HeaderComponent />

            </div>
            <div>
                <SideBarComponent />
            </div> */}
      <div className="app">
        <input type="checkbox" id="check" />
        <HeaderComponent />

        <div className="sidebar">
          <center>
            <div>NMS</div>
          </center>
          <Link to="dashboard">
            <i class="fas fa-home"></i>
            <span>Dashboard</span>
          </Link>
          <Link to="poc">
            <i class="fas fa-chart-line"></i>
            <span>POC</span>
          </Link>
          <Link to="about-us">
            <i class="fas fa-chart-line"></i>
            <span>About us</span>
          </Link>
          {/* <Link to="dashboard">
            <i class="fas fa-home"></i>
            <span>Dashboard</span>
          </Link> */}

          {/* <a href="#">
            <i class="fas fa-home"></i>
            <span>Dashboard</span>
          </a> */}
          {/* <a href="#">
            <i class="fas fa-address-card"></i>
            <span>360 Feature</span>
          </a>
          <a href="#">
            <i class="fas fa-chart-line"></i>
            <span>Customers</span>
          </a>
          <a href="#">
            <i class="fab fa-amazon-pay"></i>
            <span>Drag</span>
          </a>
          <a href="#">
            <i class="fas fa-star"></i>
            <span>List</span>
          </a> */}
        </div>

        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutContainer;
