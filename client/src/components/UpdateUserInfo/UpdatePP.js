import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const UpdatePP = (potential_parent) => {
    const [inputs, setInputs] = useState({
        username: potential_parent.username,
        user_password: potential_parent.user_password,
        reg_email: potential_parent.reg_email,
        reg_phone: potential_parent.reg_phone,   
        preferred_name: potential_parent.preferred_name
    }); 

    const {username, user_password, reg_email, reg_phone, preferred_name} = inputs;
    const account_type = "potential_parent";
    
    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]:e.target.value})
    }

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try{
            const body = {username, user_password, account_type, reg_email, reg_phone, preferred_name};
            
            const response = await fetch("http://localhost:4020/auth/register/potential_parents", //update potential parents
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
                <label>Username: </label><input type="text" name="username"  value={username} placeholder={potential_parent.username} onChange={e => onChange(e)} className="form-control my-2"/>
                <label>Password: </label> <input type="text" name="password" placeholder="password" className="form-control my-2" value={user_password}  placeholder={potential_parent.user_password} onChange={e => onChange(e)}/>
                <label>Email: </label><input type="text" name="reg_email" placeholder="email" className="form-control my-3" value={reg_email} placeholder={potential_parent.reg_email} onChange={e => onChange(e)}/>
                <label>Phone: </label><input type="text" name="reg_phone" placeholder="phone" className="form-control my-3" value={reg_email} placeholder={potential_parent.reg_email} onChange={e => onChange(e)}/>
                <label>Preferred name: </label><input type="text" name="preferred_name" placeholder="preferred name" className="form-control my-3" value={preferred_name} placeholder={potential_parent.preferred_name} onChange={e => onChange(e)}/>
                <button className="btn btn-success btn-block">Update</button>
            </form>
        </Fragment>
    )
}

export default UpdatePP;

