import React, { Component } from "react";
import {Route, Routes,  NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import Computers from "./Computers";
import Monitors from "./Monitors";
import Accessories from "./Accessories";

class Main extends Component {
    render(){
        return(
            <HashRouter>
            <div>
                <div className="header">
                <h1>Computer Store</h1>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/computers">Computers</NavLink></li>
                    <li><NavLink to="/monitors">Monitors</NavLink></li>
                    <li><NavLink to="/accessories">Accessories</NavLink></li>
                </ul>
                </div>
                <div className="content">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/computers" element={<Computers/>}/>
                    <Route path="/monitors" element={<Monitors/>}/>
                    <Route path="/accessories" element={<Accessories/>}/>
                </Routes>
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;