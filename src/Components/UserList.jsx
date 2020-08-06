import React from 'react';
import { useState, useEffect } from 'react';
import userService from '../Services/userService';

const UserList = () => {

    const [users, setUsers] = useState([]);
    
    useEffect( () =>{
        getUsers();
    },[])

    const getUsers = () =>{
        userService.getAll()
          .then(response =>{
            setUsers(response.data)
          }).catch( e => {
              console.log(e);
          })
    }

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users && users.map( (user, index) =>{
                    <li key={index}>
                        {user}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default UserList;
