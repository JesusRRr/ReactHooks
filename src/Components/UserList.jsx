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
            console.log(response.data);
          }).catch( e => {
              console.log(e);
          })
    }

    return (
        <div>
            <h3>Users</h3>
            <ul>
                {users.map((user,index)=>(
                    <li 
                        key={index}
                        className="list-group-item"
                    >
                        {user.email}
                    </li>
                    
                ))}
            </ul>  
        </div>
    )
}

export default UserList;
