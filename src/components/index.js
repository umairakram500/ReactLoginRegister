import React, { Component } from 'react';
import User from './user';
import { Link } from 'react-router-dom';

class Index extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            users: User.getUsers()
        }
    }

    delUser(index)
    {
        this.state.users.splice(index, 1);
        console.log(this.state.users);
        //localStorage.setItem('Users', JSON.stringify(this.state.users))
        this.setState({
            users: this.state.users
        })
    }

    bindUsers = () => { 
        //debugger
        if (this.state.users.length > 0) {
            return this.state.users.map((value, index) => {
                return <tr key={index} data-key={index}>
                    <td >{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.designation}</td>
                    <td>{value.created_at}</td>
                    <td>
                        <Link className="btn btn-success" to={`/profile/${value.id}`}>&#xe258;</Link>
                        <button onClick={() => this.delUser(index)}>DEL</button>
                    </td>
                </tr>

            });
        }
    
    }

    render()
    {
        return(
            <div className="container">
                <div className="panel border p-4">
                <h1>Users list</h1>
                <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Designation</th>
                        <th colSpan="2">Created At</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    { this.bindUsers()}
                    
                    </tbody>
                    
                </table>
                </div>
            </div>
        )
    }
}

export default Index;