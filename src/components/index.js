import React, { Component } from 'react';
import User from './user';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteUser } from '../action/userAction'


class Index extends Component 
{
    constructor(props)
    {
        super(props);
    }

    delUser(index)
    {
        this.props.dispatch(deleteUser(index, 'delete_user'));
    }

    bindUsers = () => { 
        //debugger
        if (this.props.users.length > 0) {
            return this.props.users.map((value, index) => {
                return <tr key={index} data-key={index}>
                    <td >{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.designation}</td>
                    <td>{value.created_at}</td>
                    <td>
                        <Link className="btn btn-success" to={`/profile/${value.id}`}>&#xe258;</Link>
                        <button onClick={() => this.delUser(value.id)}>DEL</button>
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

const mapStateToProps = (store) => {
    return {
        users: store.userListReducer
    }
}


export default connect(mapStateToProps)(Index);