import React, { Component } from 'react';
import './login.css';

//import { Link } from "react-router-dom";

class Login extends Component 
{
    render(){
        return(
            <div className="container LoginForm">
                <div className="login-form">
                    <div className="main-div">
                        <div className="panel">
                            <h2>Admin Login</h2>
                            <p>Please enter your email and password</p>
                        </div>
                        <form>

                            <div className="form-group">
                                <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" />
                            </div>

                            <div className="form-group">
                                <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                            </div>
                            <div className="forgot">
                                <a href="reset.html">Forgot password?</a>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;