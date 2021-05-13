import React, {Fragment, useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import { MDBContainer } from 'mdbreact';

const AddBcat = () =>{
    const [info, setInfo] = useState({
        cur_owner_cattery:"",
        cur_owner:"",
        certi_num:"",
        title:"",
        cat_reg_name:"",
        cat_name:"",
        breed:"",
        sex:"",
        birth_date:"",
        sire_name:"",
        dam_name:"",
        sale_status:"",
        retire_status:"",
    });

    const {cur_owner_cattery, cur_owner, certi_num, title, cat_reg_name, cat_name,
        breed, sex, birth_date, sire_name, dam_name, sale_status,retire_status} = info;
        
    const onChange = (e) => {
        setInfo({...info, [e.target.name]:e.target.value})
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try{
            const body = {cur_owner_cattery, cur_owner, certi_num, title, cat_reg_name, cat_name,
                breed, sex, birth_date, sire_name, dam_name, sale_status,retire_status};
            const response = await fetch("http://localhost:4020/api/v1/cats/create_breed",{ // url needs update. need to add to breeding cat table
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
                <Button data-testid="showBtn" variant="info" onClick={handleShow} >Add a breeding cat</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add a breeding cat</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={onSubmitForm}>
                            <label>Current owner cattery name: </label>
                            <input type="text" 
                            name="cur_owner_cattery"    
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Current owner: </label>
                            <input 
                            type="text" 
                            name="cur_owner_cattery"  
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Certificate number: </label>
                            <input 
                            type="text" 
                            name="certi_num"  
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Title: </label>
                            <input 
                            type="text" 
                            name="title"   
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Cat registered name: </label>
                            <input type="text" 
                            name="cat_reg_name"   
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Cat preferred name: </label>
                            <input type="text" 
                            name="cat_name"   
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Breed: </label>
                            <input type="text" 
                            name="breed"   
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Sex: </label>
                            <input type="text" 
                            name="sex"   
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Date of birth: </label>
                            <input type="text" 
                            name="birth_date"   
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Sire: </label>
                            <input type="text" 
                            name="sire_name"   
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Dam: </label>
                            <input type="text" 
                            name="dam_name"   
                            className="form-control my-2"
                            onChange={e => onChange(e)}/> 

                            <label>Sale status: </label>
                            <input type="text" 
                            name="sale_status"   
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Retire status: </label>
                            <input type="text" 
                            name="retire_status"   
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="warning" onClick={onSubmitForm}>
                        Add
                    </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    )
}

export default AddBcat;