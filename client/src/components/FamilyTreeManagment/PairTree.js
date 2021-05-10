import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import mock_data from "./MOCK_DATA_TREE.json"

const PairTree = (cat) =>{
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
            const response = await fetch(`http://localhost:4020/api/v1/gettree/${cat.certi_num}`,{ // url needs update. need to add to breeding cat table
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
                <Button variant="info" onClick={handleShow}>Pair</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Pair a kitten with parents</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={onSubmitForm}>
                            <label>Kitten certificate number: </label>
                            <input type="text" 
                            name="id"    
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
                    <Button variant="warning" onClick={onSubmitForm, handleClose}>
                        Pair
                    </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    )
}


export default PairTree;