import React,{Fragment, useState} from 'react';
import {Modal, Button} from 'react-bootstrap';


const EditAccount = ({account}) =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [inputs, setInputs] = useState({
        username: account.username,
        user_password: account.user_password,
        account_type:  account.account_type,
        reg_email: account.reg_email,
        reg_phone: account.reg_phone,
    }); 
    const {username, user_password, account_type, reg_email, reg_phone} = inputs;
    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]:e.target.value})
    }


    //update cat info function
    const updateAccountInfo = async(e) =>{
        e.preventDefault();
        try{
            const body = {username, user_password, account_type, reg_email, reg_phone};
            console.log(body)
            const response = await fetch("http://localhost:4020/auth/update_account",{
                method:"PATCH",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/manage_user_account";
        }catch(err){
            console.error(err.message)
        }
    }


    return(
        <Fragment>

            <Button type="button" 
            class="btn btn-warning" 
            data-testid="showbtn"
            onClick={handleShow}>
            Edit
            </Button>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={updateAccountInfo}>
                        <label htmlFor="username">Username: </label>
                        <input type="text" 
                        name="username"    
                        id="username"
                        placeholder= {account.username}
                        onChange={e => onChange(e)}
                        className="form-control my-2"/>

                        <label htmlFor="password">Password: </label>
                        <input 
                        type="text" 
                        id="password"
                        name="password"  
                        placeholder={account.user_password}  
                        onChange={e => onChange(e)}
                        className="form-control my-2"/>

                        <label  htmlFor="account_type">Account Type: </label>
                        <input 
                        type="text" 
                        id="account_type"
                        name="account_type"  
                        placeholder={account.account_type}  
                        onChange={e => onChange(e)}
                        className="form-control my-2"/>

                        <label htmlFor="reg_phone">Phone: </label>
                        <input type="text" 
                        name="reg_phone"   
                        id="reg_phone"
                        placeholder={account.reg_phone} 
                        onChange={e => onChange(e)}
                        className="form-control my-2"/>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button data-testid ="closebtn" variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={updateAccountInfo}>
                        Save Changes
                    </Button>
                </Modal.Footer>

                </Modal>
        </Fragment>
    )
}

export default EditAccount;
