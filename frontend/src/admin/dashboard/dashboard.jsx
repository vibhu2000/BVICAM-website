import React, { useState, useEffect } from "react";
import Overview from "./overview";
import EventsOverview from "./eventsOverview";
import Navbar1 from "../navbar1";
import { isAuthenticated } from "../auth/helper";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
 
  const Admin = "false"
  const currentUser = JSON.parse(localStorage.getItem("jwt"))
  //console.log(currentUser.user)

  return (

    
    isAuthenticated() ? 
      (<div className="d-flex flex-md-row flex-column ">
        
        <div className="nav-div  bg-white shadow-sm ">
         
         
          <Navbar1 Admin={currentUser.user.isAdmin}></Navbar1>

        </div>
        {currentUser.user.isAdmin===true?
        (
        <div className="nav-div-1">
        <div className="container-fluid header-body mt-1 p-0">
           <div className="row p-5">
           <div className="col-12">
              <h6 className="header-pretitle  fw-semibold ">Overview</h6>
              <h1 className="header-title h1 ">Dashboard </h1>
              <hr className="mt-3 mb-3" />
            </div>
            <div className="col-12">
              <Overview></Overview>
              <EventsOverview></EventsOverview>
            </div>
       </div>

          </div>
        </div>
        ):
        (
          <div className="nav-div-1">
          <div className="container-fluid header-body mt-1 p-0">
           <div className="row p-5">
           <div className="col-12">
              <h6 className="header-pretitle  fw-semibold ">Overview</h6>
              <h1 className="header-title h1 ">Faculty Dashboard</h1>
              <hr className="mt-3 mb-3" />
            </div>
            <div className="col-12 my-5">
              <h3>Welcome, {currentUser.user.name}</h3>
            </div>
          </div>
          </div>
        </div>
        )
      }
      </div> 
      ): <Navigate replace to="/admin/signin" />
    )}
