import React from 'react';
import "../../../index.css";

const HeaderComponent = (props) =>{
    return (
        <div>
           <header className="header-container">
          <label for="check" id="">
            <i class="fas fa-bars" id="sidebar-btn"></i>
          </label>
          <div className="header-left">
            <span>
              <h3>NMS</h3>
            </span>
          </div>
          <div className="header-right">
            <a className="logout-btn">logout</a>
          </div>
        </header>
        </div>
    )
}

export default HeaderComponent;