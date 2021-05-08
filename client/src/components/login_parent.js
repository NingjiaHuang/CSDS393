import React, { Fragment, useState } from "react";
import {Link, Redirect} from "react-router-dom";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const ParentLogin = ({setAuth}) => {
    const [inputs, setInputs] = useState({
        reg_email: "",
        password: ""
    }); 
    const {reg_email, password} = inputs;

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]:e.target.value});
    };

    const onSubmitForm = async (e) => {
        e.preventDefault()
        try {
            const body = {reg_email, password}
            const response = await fetch("http://localhost:4020/auth/login/parent", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            const parseRes = await response.json();
            if(parseRes.token){
                localStorage.setItem("token", parseRes.token);
                setAuth(true)
                toast.success("Login successfully.");
            } else {
                setAuth(false);
                toast.error(parseRes);
            }

        } catch(err) {
            console.error(err.message);
        }
    }
    return (
        <Fragment>
            <h1 className="text-center my-5">Parent Login</h1>
            <form onSubmit={onSubmitForm}>
                <label>Email: </label><input type="email" name="reg_email" placeholder="email" className="form-control my-2" value={reg_email} onChange={e => onChange(e)}/>
                <label>Password: </label><input type="password" name="password" placeholder="password" className="form-control my-2" value={password} onChange={e => onChange(e)}/>
                <button className="btn btn-success btn-block" color="pink">Login</button>
            </form>
            <Link to="/register/parent">Parent Register</Link>
        </Fragment>
    )
}

export default ParentLogin;