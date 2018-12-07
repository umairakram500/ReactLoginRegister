import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            user: {}
        }
        this.findUser();
    }

    findUser = () => {
        const Users = JSON.parse(localStorage.getItem("Users"));
        const id = this.props.match.params.id.toString();
        for(var user in Users) {
            if (user.id === id) {
                this.setState({
                    user: user
                })
                //this.state.user = user;
            }
        }
    }

    render()
    {
        return(
            <div className="container">
                <div className="panel border p-4">
                <h4 className="clearfix mb-2">
                    User Detail
                    <Link className="btn btn-success float-right" to="/">Back</Link>
                </h4>


                
                

                <table className="table table-bordered">
                    <tr>
                        <th width="200">ID</th>
                        <td>{ this.state.user.id }</td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>{ this.state.user.name }</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{ this.state.user.email }</td>
                    </tr>
                    <tr>
                        <th>Designation</th>
                        <td>{ this.state.user.designation }</td>
                    </tr>
                    <tr>
                        <th>Created At</th>
                        <td>{ this.state.user.created_at }</td>
                    </tr>
                    
                </table>
                </div>
            </div>
        )
    }
}

export default Profile;