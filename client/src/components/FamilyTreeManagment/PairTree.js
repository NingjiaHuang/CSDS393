import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap';

const PairTree = () =>{
    const [info, setInfo] = useState({
        id:"",
        cat_name:"",
        sire_id:"",
        dam_id:""
    });

    const {id, cat_name, sire_id, dam_id} = info;
        
    const onChange = (e) => {
        setInfo({...info, [e.target.name]:e.target.value})
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try{
            const body = {id, cat_name, sire_id, dam_id};
            console.log(body);
            const response = await fetch("http://localhost:4020/api/v1/cats/tree",{ // url needs update. need to add to breeding cat table
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location="/family_tree";
        } catch(err){
            console.error(err.message);
        }
    }



    return(
        <div>
                <Button data-testid="pairBtn" variant="info" onClick={handleShow}>Pair</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Pair a kitten with parents</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={onSubmitForm}>
                            <label htmlFor='id'>Kitten certificate number: </label>
                            <input type="text" 
                            name="id"   
                            id='id' 
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Kitten name: </label>
                            <input 
                            type="text" 
                            name="cat_name"  
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Sire certificate number: </label>
                            <input 
                            type="text" 
                            name="sire_id"  
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>

                            <label>Dam certificate number: </label>
                            <input 
                            type="text" 
                            name="dam_id"   
                            className="form-control my-2"
                            onChange={e => onChange(e)}/>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="warning" onClick={onSubmitForm}>
                        Pair
                    </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    )
}


export default PairTree;