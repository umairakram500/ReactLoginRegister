import React, { Component } from 'react';
import './login.css';
import { connect } from 'react-redux';
import { addUser } from '../action/userAction'

//import { Link } from "react-router-dom";

class Register extends Component 
{

    formToOject = (formData) => {
        var inputs = {};
        for(var inp in formData)
            inputs[inp] = formData[inp].value;
        return inputs;
    }

    addUser(userData)
    {
        var users = this.getUsers();
        users.push(userData);
        //console.log('addUser', users);
        localStorage.setItem("Users", JSON.stringify(users));

    }

    getUsers()
    {
        var users = localStorage.getItem("Users");      
        //console.log('getUsers',  JSON.parse(users));
        return users != null ? JSON.parse(users) : []
    }

    // Save Accounts 
    SaveAccount = () => {
        
        var userData = this.formToOject(this.refs);

        

        userData.id = Math.floor(Math.random() * 99999);
        userData.created_at = new Date().toLocaleDateString()+" "+new Date().toLocaleTimeString();



        this.props.dispatch(addUser(userData));

        this.props.history.push('/');

    }
    
    render(){
        return(
            <div className="container LoginForm">
                <div className="login-form">
                    <div className="main-div">
                        <div className="panel">
                            <h2>Register Login</h2>
                            <p>Please enter your email and password</p>
                        </div>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" ref="name" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" ref="email" placeholder="Email Address" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" ref="designation" placeholder="Designation" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" ref="password" placeholder="Password" />
                            </div>

                            <button type="button" onClick={() => { this.SaveAccount() }} className="btn btn-primary">Register</button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (store) => {
    return {
        users: store.userListReducer
    }
}


export default connect(mapStateToProps)(Register);