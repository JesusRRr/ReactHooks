import React from 'react'
import UserForm from './UserForm'
import UserList from './UserList'

const Users = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <UserForm/>
                </div>

                <div className="col">
                    <UserList/>
                </div>
            </div>
        </div>
    )
}

export default Users;
