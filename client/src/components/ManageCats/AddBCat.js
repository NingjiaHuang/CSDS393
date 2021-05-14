import React, {Fragment, useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import { MDBContainer } from 'mdbreact';

const AddBcat = ({setAuth}) =>{
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
                breed, sex, birth_date, sire_name, dam_name, sale_status, retire_status};

            const response = await fetch("http://localhost:4020/api/v1/cats/create_breed", { // url needs update. need to add to breeding cat table
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location="/manage_cat_breeder";
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
                        <form name="addcat" data-testid="addcat" onSubmit={onSubmitForm}>
                            <label>Current owner cattery name: </label>
                            <input type="text" 
                            data-testid="cur_owner_cattery"
                            name="cur_owner_cattery"    
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Current owner: </label>
                            <input 
                            type="text" 
                            data-testid="cur_owner"
                            name="cur_owner"  
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Certificate number: </label>
                            <input 
                            type="text" 
                            data-testid="certi_num"
                            name="certi_num"  
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Title: </label>
                            <input 
                            type="text" 
                            name="title"  
                            data-testid="title" 
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Cat registered name: </label>
                            <input type="text" 
                            name="cat_reg_name"
                            data-testid="cat_reg_name"   
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Cat preferred name: </label>
                            <input type="text" 
                            name="cat_name"   
                            data-testid="cat_name"
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Breed: </label>
                            <input type="text" 
                            name="breed"   
                            data-testid="breed"
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Sex: </label>
                            <input type="text" 
                            name="sex"   
                            data-testid="sex"
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Date of birth: </label>
                            <input type="text" 
                            name="birth_date"   
                            data-testid="birth_date"
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Sire: </label>
                            <input type="text" 
                            name="sire_name" 
                            data-testid="sire_name"  
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Dam: </label>
                            <input type="text" 
                            name="dam_name" 
                            data-testid="dam_name"  
                            className="form-control my-2"
                            onChange={e => onChange(e)}/> 

                            <label>Sale status: </label>
                            <input type="text" 
                            name="sale_status"  
                            data-testid="sale_status" 
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Retire status: </label>
                            <input type="text" 
                            name="retire_status"
                            data-testid="retire_status"   
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