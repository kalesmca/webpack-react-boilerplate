import React from "react";
import HeaderComponent from './components/header';
// import SideBarComponent from './components/sidebar';
import "../../index.css";

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
            <HeaderComponent/>

        <div className="sidebar">
          <center>
            <div>Cockpit</div>
          </center>
          <a href="#">
            <i class="fas fa-home"></i>
            <span>Dashboard</span>
          </a>
          <a href="#">
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
          </a>
        </div>

        <div className="container">Main Containersss</div>
      </div>
    </div>
  );
};

export default LayoutContainer;
