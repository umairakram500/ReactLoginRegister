import React, { Component } from 'react';

import { NavLink, Link } from "react-router-dom";

class Header extends Component 
{
    render(){
        return(
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container">
                <Link className="navbar-brand" to="/">Logo</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/Login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}

export default Header;