import React,{Fragment, useState} from 'react';

const EditAccount = ({account}) =>{
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
        account_type: "",
        reg_email: "",
        reg_phone: "",
    }); 
    const {username, password, account_type, reg_email, reg_phone} = inputs;
    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]:e.target.value})
    }


    //update cat info function
    const updateUserInfo = async(e) =>{
        e.preventDefault();
        try{
            const body = {username, password, account_type, reg_email, reg_phone};
            const response = await fetch(`http://localhost:4020/api/v1/cats/${user.reg_email}`,{
                method:"PATCH",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/";
        }catch(err){
            console.error(err.message)
        }
    }


    return(
        <Fragment>

            <button type="button" 
            class="btn btn-warning" 
            data-toggle="modal" 
            data-target={`#id${account.reg_email}`}>
            Edit
            </button>

            {/*
                id = id10
                this is the real one!!!!
                <div class="modal" id={`id${cat.certi_num}`} onClick={() => setcerti_num(cat.certi_num)}>
            */}
            
            
            <div class="modal" id={`id${account.reg_email}`} 
            onClick={() => setInputs(account.username, account.password, account.account_type, account.reg_email,  account.reg_phone)}>
            <div class="modal-dialog">
                <div class="modal-content">


                <div class="modal-header">
                    <h4 class="modal-title">Edit Account</h4>
                    <button type="button" class="close" data-dismiss="modal" 
                     onClick={() => setInputs(account.username, account.password, account.account_type, account.reg_email,  account.reg_phone)}>
                        &times;
                    </button>
                </div>


                <div class="modal-body">
                    <form>
                        <label>Username: </label>
                        <input type="text" 
                        name="username"    
                        placeholder= {account.username}
                        onChange={e => onChange(e)}
                        className="form-control my-2"/>

                        <label>Password: </label>
                        <input 
                        type="text" 
                        name="password"  
                        placeholder={account.password}  
                        onChange={e => onChange(e)}
                        className="form-control my-2"/>

                        <label>Account type: </label>
                        <input 
                        type="text" 
                        name="account_type"   
                        placeholder={account.account_type}  
                        className="form-control my-2"/>

                        <label>Email: </label>
                        <input type="text" 
                        name="reg_email"   
                        placeholder={account.reg_email} 
                        className="form-control my-2"/>

                        <label>Phone: </label>
                        <input type="text" 
                        name="reg_phone"   
                        placeholder={account.reg_phone} 
                        onChange={e => onChange(e)}
                        className="form-control my-2"/>

                        <button type="button" class="btn btn-warning" 
                        data-dismiss="modal"
                        onClick ={e => updateUserInfo(e)}>
                            Edit
                        </button>
                 </form>
                </div>


                <div class="modal-footer">
                    
                    <button type="button" class="btn btn-danger" data-dismiss="modal"
                     onClick={() => setInputs(account.username, account.password, account.account_type, account.reg_email,  account.reg_phone)}>
                        Close
                    </button>
                </div>

                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default EditAccount;