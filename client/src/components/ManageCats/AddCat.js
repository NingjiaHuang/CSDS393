import React, {Fragment, useState} from 'react'
import { Button } from 'react-bootstrap';
import { MDBContainer } from 'mdbreact';

const AddCat = () =>{
    const [info, setInfo] = useState("");
    const onSubmitForm = async(e) => {
        e.preventDefault();
        try{
            const body = {info};
            const response = await fetch("http://localhost:4020/api/v1/cats",{
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
        <div class="d-flex justify-content-center">
                <Button variant="info">Add a bredding cat</Button>
                &nbsp;&nbsp;&nbsp;
                <Button variant="info">Add a pregnant cat</Button>
                &nbsp;&nbsp;&nbsp;
                <Button variant="info">Add a kitten</Button>
        </div>
    )
}

export default AddCat;