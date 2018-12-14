import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../action/userAction';

class Profile extends Component 
{
    constructor(props)
    {
        super(props);
        this.findUser();
    }

    findUser = () => {
        const id = this.props.match.params.id.toString();
        //var user = this.props.users.find(user => user.id == id);
        //console.log(user);
        this.props.dispatch(getUser(id));
    }

    render()
    {
        return(
            <div className="container">
                <div className="panel border p-4">
                <h4 className="clearfix mb-2">
                    User Detail
                    <button className="btn btn-success float-right" onClick={ () => this.props.history.push('/')}>Back</button>
                </h4>

                <table className="table table-bordered">
                    <tbody>
                    <tr>
                        <th width="200">ID</th>
                        <td><input className="form-control"/></td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>{ this.props.user.name }</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{ this.props.user.email }</td>
                    </tr>
                    <tr>
                        <th>Designation</th>
                        <td>{ this.props.user.designation }</td>
                    </tr>
                    <tr>
                        <th>Created At</th>
                        <td>{ this.props.user.created_at }</td>
                    </tr>
                    </tbody>
                    
                </table>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (store) => {
    return {
        user: store.userListReducer
    }
}


export default connect(mapStateToProps)(Profile);