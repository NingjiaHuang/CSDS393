import React,{Fragment, useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

const EditCat = ({cat}, {setAuth}) =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [inputs, setInputs] = useState({
        certi_num: cat.certi_num,
        cat_name: cat.cat_name,
        title: cat.title,
        cat_reg_name: cat.cat_reg_name,
        sale_status: cat.sale_status
    }); 
    const {certi_num, cat_name, title, cat_reg_name, sale_status} = inputs;
    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]:e.target.value})
    }


    //update cat info function
    const updateCatInfo = async(e) =>{
        e.preventDefault();
        try{
            const body = {certi_num, cat_name, title, cat_reg_name, sale_status};
            console.log(body)
            const response = await fetch("http://localhost:4020/api/v1/cats/update_cat",{
                method:"PATCH",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(body)
            });
            window.location = "/manage_cat_breeder";
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

            {/*
                id = id10
                this is the real one!!!!
                <div class="modal" id={`id${cat.certi_num}`} onClick={() => setcerti_num(cat.certi_num)}>
            */}
            
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Cat</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={updateCatInfo}>
                        <label htmlFor="certi_num">Certificate number: </label>
                        <input type="text" 
                        name="certi_num"   
                        id="certi_num" 
                        placeholder= {cat.certi_num}
                        onChange={e => onChange(e)}
                        className="form-control my-2"/>

                        <label htmlFor="cat_name">Cat name: </label>
                        <input 
                        type="text" 
                        id="cat_name"  

                        name="cat_name"  
                        placeholder={cat.cat_name}  
                        onChange={e => onChange(e)}
                        className="form-control my-2"/>

                        <label htmlFor="title">Title: </label>
                        <input 
                        type="text" 
                        name="title"   
                        id="title"
                        placeholder={cat.title}  
                        onChange={e => onChange(e)}
                        className="form-control my-2"/>

                        <label htmlFor="cat_reg_name">Cat registered name: </label>
                        <input type="text" 
                        name="cat_reg_name"
                        id="cat_reg_name"   
                        placeholder={cat.cat_reg_name} 
                        onChange={e => onChange(e)}
                        className="form-control my-2"/>

                        <label htmlFor="sale_status">Sale status: </label>
                        <input type="text" 
                        id="sale_status"   
                        name="sale_status"   
                        placeholder={cat.sale_status} 
                        onChange={e => onChange(e)}
                        className="form-control my-2"/>
                 </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button data-testid="closebtn" variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={updateCatInfo}>
                        Save Changes
                    </Button>
                </Modal.Footer>

                </Modal>
        </Fragment>
    )
}

export default EditCat;