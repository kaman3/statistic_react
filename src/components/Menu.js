import React, { Component } from "react";
import { Link } from "react-router-dom";

function Menu(){
   return(
    <div className = 'row'>
        <div className = "col-md-12">
            <div className = "menu">
                <ul>
                    <li><Link to="/">Зарегистрированные</Link></li>
                    <li><Link to="issue">Выданные</Link></li>
                </ul>
            </div>
        </div>
    </div>
   )
}

export default Menu;