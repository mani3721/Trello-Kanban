import React from "react";
import moment from 'moment/moment'
import { BiSearch } from "react-icons/bi";
import './layout.css'
import Sidebar from "../sidebar/sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
const Layout = () => {

    const {pathname}=useLocation()
    return (
        <>
            <div className="containerValue">
    
       <Sidebar/>

         {pathname == '/' && <Navigate to='/dashboard' /> }

      <div className="dashboardlayout">
        <div className="topBaseGradients">
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className="header">

          <span>{moment().format("dddd, Do MMM YYYY")}</span>

          <div className="searchBar">
            <BiSearch size={20} />
            <input type="text" placeholder="Search" />
          </div>

          <div className="profile">
            <img src="./profile.png" alt="person image" />
            <div className="details">
              <span>Denis Steven</span>
              <span>devissteven@gmail.com</span>
            </div>
          </div>


        </div>

         
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
        </>
    )
}

export default Layout;