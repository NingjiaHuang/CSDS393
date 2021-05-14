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
                            <label htmlFor="cur_owner_cattery">Current owner cattery name: </label>
                            <input type="text" 
                            name="cur_owner_cattery"    
                            id="cur_owner_cattery"
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label htmlFor="cur_owner">Current owner: </label>
                            <input 
                            type="text" 
                            name="cur_owner" 
                            id="cur_owner"
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label htmlFor="certi_num">Certificate number: </label>
                            <input 
                            type="text" 
                            name="certi_num"  
                            id="certi_num"

                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label htmlFor="title">Title: </label>
                            <input 
                            type="text" 
                            name="title"  
                            id="title" 
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label htmlFor="cat_reg_name">Cat registered name: </label>
                            <input type="text" 
                            name="cat_reg_name"
                            id="cat_reg_name"   
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label htmlFor="cat_name">Cat preferred name: </label>
                            <input type="text" 
                            name="cat_name"   
                            id="cat_name"
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label htmlFor="breed">Breed: </label>
                            <input type="text" 
                            name="breed"   
                            id="breed"
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label htmlFor="sex">Sex: </label>
                            <input type="text" 
                            name="sex"   
                            id="sex"
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label htmlFor="birth_date">Date of birth: </label>
                            <input type="text" 
                            name="birth_date"   
                            id="birth_date"
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label htmlFor="sire_name">Sire: </label>
                            <input type="text" 
                            name="sire_name" 
                            id="sire_name"  
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label htmlFor="dam_name">Dam: </label>
                            <input type="text" 
                            name="dam_name" 
                            id="dam_name"  
                            className="form-control my-2"
                            onChange={e => onChange(e)}/> 

                            <label htmlFor="sale_status">Sale status: </label>
                            <input type="text" 
                            name="sale_status"  
                            id="sale_status" 
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label htmlFor="retire_status">Retire status: </label>
                            <input type="text" 
                            name="retire_status"
                            id="retire_status"   
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button data-testid = "closebtn" variant="secondary" onClick={handleClose}>
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