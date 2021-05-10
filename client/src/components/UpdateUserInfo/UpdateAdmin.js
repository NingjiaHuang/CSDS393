import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const UpdatePP = (admini) => {
    const [inputs, setInputs] = useState({
        username: admini.username,
        user_password: admini.user_password,
        reg_email: admini.reg_email,
        reg_phone: admini.reg_phone
    }); 

    const {username, user_password, reg_email, reg_phone} = inputs;
    const account_type = "admini";
    
    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]:e.target.value})
    }

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try{
            const body = {username, user_password, account_type, reg_email, reg_phone};
            
            const response = await fetch("http://localhost:4020/auth/register/admini", //update potential parents
            {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
        }catch(err){
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <h1 className="text-center my-5">Update your account</h1>
            <form onSubmit={onSubmitForm}>
                <label>Username: </label><input type="text" name="username"  value={username} placeholder={admini.username} onChange={e => onChange(e)} className="form-control my-2"/>
                <label>Password: </label> <input type="text" name="password" placeholder="password" className="form-control my-2" value={user_password}  placeholder={admini.user_password} onChange={e => onChange(e)}/>
                <label>Email: </label><input type="text" name="reg_email" placeholder="email" className="form-control my-3" value={reg_email} placeholder={admini.reg_email} onChange={e => onChange(e)}/>
                <label>Phone: </label><input type="text" name="reg_phone" placeholder="phone" className="form-control my-3" value={reg_email} placeholder={admini.reg_email} onChange={e => onChange(e)}/>                <button className="btn btn-success btn-block">Update</button>
            </form>
        </Fragment>
    )
}

export default UpdatePP;

