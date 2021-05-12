import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const cors = require('cors')

const ParentRegister = ({setAuth}) => {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
        reg_email: "",
        reg_phone: "",
        preferred_name: ""
    }); 

    const {username, password, reg_email, reg_phone, preferred_name} = inputs;
    const account_type = "parent";
    
    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]:e.target.value})
    }

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try{
            const body = {username, password, account_type, reg_email, reg_phone, preferred_name};
            
            const response = await fetch("http://localhost:4020/auth/register/parent", 
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            const parseRes = await response.json();
            if(parseRes.token) {
                localStorage.setItem("token", parseRes.token);
                setAuth(true);
                toast.success("Registered successfully.")
            }else{
                setAuth(false);
                toast.error(parseRes);
            }
        }catch(err){
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <h1 className="text-center my-5">Parent Register</h1>
            <form onSubmit={onSubmitForm}>
                <label htmlFor='name'>Name: </label><input id = 'name' type="text" name="username"  value={username} placeholder="name" onChange={e => onChange(e)} className="form-control my-2"/>
                <label htmlFor='password'>Password: </label> <input id='password' type="password" name="password" placeholder="password" className="form-control my-2" value={password} onChange={e => onChange(e)}/>
                <label htmlFor='reg_email'>Email: </label><input id='reg_email' type="email" name="reg_email" placeholder="email" className="form-control my-3" value={reg_email} onChange={e => onChange(e)}/>
                <label htmlFor='reg_phone'>Phone Number: </label><input id='reg_phone' type="text" name="reg_phone" placeholder="phone" className="form-control my-3" value={reg_phone} onChange={e => onChange(e)}/>
                <label htmlFor='preferred_name'>Preferred Name: </label><input id='preferred_name' type="text" name="preferred_name" placeholder="preferred name" className="form-control my-2" value={preferred_name} onChange={e => onChange(e)}/>
                <button className="btn btn-success btn-block">Submit</button>
            </form>
        </Fragment>
    )
}

export default ParentRegister;

