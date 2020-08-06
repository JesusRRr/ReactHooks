import React from 'react';
import { useForm } from 'react-hook-form';
const UserForm = () => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) =>{
        console.log(data)
        e.target.reset()
    }
    return (
        <div className="container">
           <h1>User</h1> 
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="userName"
                    className="form-control my-2"
                    placeholder="User name"
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
