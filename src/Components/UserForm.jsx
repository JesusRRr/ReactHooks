import React from 'react';
import { useForm } from 'react-hook-form';
import userService from '../Services/userService'
const UserForm = () => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) =>{
        console.log(data);
        userService.create(data)
            .then(response =>{
                console.log(response);
                console.log(data);
            }).catch( e =>{
                console.log(e);
            })
        e.target.reset()
    }
    return (
        <div className="container">
           <h3>Register</h3> 
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="email"
                    className="form-control my-2"
                    placeholder="email"
                    ref={
                        register({
                            required: { value: true, message: 'missing user name'}
                        })
                    }
                />

                <input
                    name="password"
                    className="form-control my-2"
                    placeholder="password"
                    type="password"
                    ref={
                        register({
                            required: { value: true, message: 'missing password'}
                        })
                    }
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors?.userName?.message}
                    {errors?.password?.message}
                </span>

                <button className="btn btn-primary">Save</button>
            </form>
        </div>
    )
}

export default UserForm;
