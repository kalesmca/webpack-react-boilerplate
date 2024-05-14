import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutContainer from './containers/layout/layout-container';
import DashboardComponent from "./containers/dashboard/dashboardComponent";
import PocComponent from "./containers/POC/pocComponent";
import AboutUsComponent from "./containers/aboutUs/aboutUsComponent";
import NotFoundComponent from "./containers/notFound/notFoundComponent";
import './index.css'

export default ({ theme }) => {
  return (
    // <BrowserRouter >
    //   <div className="w-100">
    //     <LayoutContainer />
    //   </div>
    // </BrowserRouter>
    <BrowserRouter >
    <Routes>
          <Route path="/" element={<LayoutContainer />}>
                {/* <Route index element={<LoginContainer />} /> */}
                <Route index path="dashboard" element={<DashboardComponent />} />
                <Route path="poc" element={<PocComponent />} />
                <Route path="about-us" element={<AboutUsComponent />} />

                <Route path="*" element={<NotFoundComponent />} />
                
          </Route>

        </Routes>
    </BrowserRouter>
  );
};
