import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const UpdateBreeder = (breeder) => {
    const [inputs, setInputs] = useState({
        username: breeder.username,
        user_password: breeder.user_password,
        reg_email: breeder.reg_email,
        reg_phone: breeder.reg_phone,
        cattery_name:breeder.cattery_name,
        organization: breeder.organization,
        owner_name:breeder.owner_name,
        city: breeder.city
    }); 

    const {username, user_password, reg_email, reg_phone, cattery_name,organization, owner_name, city } = inputs;
    const account_type = "breeder";
    
    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]:e.target.value})
    }

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try{
            const body =  {username, user_password, reg_email, reg_phone, cattery_name,organization, owner_name, city };
            
            const response = await fetch("http://localhost:4020/auth/register/breeder", //update potential parents
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
                <label>Username: </label><input type="text" name="username"  value={username} placeholder={breeder.username} onChange={e => onChange(e)} className="form-control my-2"/>
                <label>Password: </label> <input type="text" name="password"className="form-control my-2" value={user_password}  placeholder={breeder.user_password} onChange={e => onChange(e)}/>
                <label>Email: </label><input type="text" name="reg_email"  className="form-control my-3" value={reg_email} placeholder={breeder.reg_email} onChange={e => onChange(e)}/>
                <label>Phone: </label><input type="text" name="reg_phone" className="form-control my-3" value={reg_email} placeholder={breeder.reg_email} onChange={e => onChange(e)}/>
                <label>Cattery name: </label><input type="text" name="cattery_name" className="form-control my-3" value={cattery_name} placeholder={breeder.cattery_name} onChange={e => onChange(e)}/>
                <label>Organization: </label><input type="text" name="organization" className="form-control my-3" value={organization} placeholder={breeder.organization} onChange={e => onChange(e)}/>
                <label>Owner name: </label><input type="text" name="owner_name" className="form-control my-3" value={owner_name} placeholder={breeder.owner_name} onChange={e => onChange(e)}/>
                <label>City: </label><input type="text" name="city" className="form-control my-3" value={city} placeholder={breeder.city} onChange={e => onChange(e)}/>
                <button className="btn btn-success btn-block">Update</button>
            </form>
        </Fragment>
    )
}

export default UpdateBreeder;

