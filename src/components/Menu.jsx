import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu(props){   
   return (
      <NavLink to={props.path } className="none btn" onClick={() => { props.setTitle(props.title) }}> 
      
            <img src={props.img} className="img" />
            <div className="main"> {props.title} </div>
      </NavLink>
   )
}

