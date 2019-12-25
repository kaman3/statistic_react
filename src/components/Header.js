import React, { Component } from "react";
import logo from "../img/logo.svg";

function Header(){
    return(
        <div className = "row header">
            <div className = "col-md-4">
                 <div className = "logo">
                      <img src = {logo} />
                 </div>
            </div>
            <div className = "col-md-8">
                 
            </div>
        </div>
    )
}

export default Header;