import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap';

const AddAAccount = () =>{
    const [info, setInfo] = useState({
        username:"",
        user_password:"",
        account_type:"admini",
        reg_email:"",
        reg_phone:"",
    });

    const {username, user_password,account_type, reg_email, reg_phone} = info;
        
    const onChange = (e) => {
        setInfo({...info, [e.target.name]:e.target.value})
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try{
            const body = {username, user_password,account_type, reg_email, reg_phone};
            const response = await fetch("http://localhost:4020/api/v1/cats",{ // url needs update. need to add to breeding cat table
                method:"Post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location="/";
        } catch(err){
            console.error(err.message);
        }
    }



    return(
        <div>
                <Button data-testid="showBtn" variant="info" onClick={handleShow}>Add an admin account</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add a breeding cat</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={onSubmitForm}>
                            <label>Username: </label>
                            <input type="text" 
                            name="username"    
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Password: </label>
                            <input 
                            type="text" 
                            name="user_password"  
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Account type: </label>
                            <input 
                            placeholder = "admini"
                            type="text" 
                            name="account_type"  
                            className="form-control my-2"/>

                            <label>Email: </label>
                            <input 
                            type="text" 
                            name="reg_email"   
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Phone: </label>
                            <input type="text" 
                            name="reg_phone"   
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="warning" onClick={onSubmitForm, handleClose}>
                        Add
                    </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    )
}

export default AddAAccount;