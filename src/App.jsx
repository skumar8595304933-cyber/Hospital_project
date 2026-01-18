// import LeftPanel from "./components/LeftPanel.jsx";
// import Header from "./components/Header.jsx";
import {Header, LeftPanel } from "./components/index"

import './components/Css/hp.css';
import React ,{ useState } from 'react';
import { Outlet } from "react-router-dom";


function App(){
   const [title, setTitle] = useState("Home");
   return (
       <div className="container" > 
       <input type="checkbox" id="box"/>
            <div className="left">
                  <LeftPanel setTitle={setTitle}/>
             </div>
            <div className="right" >
               <Header title={title}/>
               <Outlet/>
            </div>
         
       </div>
   )
   
}

export default App;


