import React, { Component } from "react";
import { Link, useRouteMatch } from "react-router-dom";

let Menu = () => {

   return(
    <div className = 'row'>
        <div className = "col-md-12">
            <div className = "menu">
                <ul>
                    <li>Показать:</li>
                    <li><OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Зарегистрированные купоны"/></li>
                    <li><OldSchoolMenuLink to="/issue/1" label="Выданные купоны"/></li>
                </ul>
            </div>
        </div>
    </div>
   )
}

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    });
  
    return (
      <div className={match ? "active" : ""}>
           <Link to={to}>{label}</Link>
      </div>
    );
  }


export default Menu;