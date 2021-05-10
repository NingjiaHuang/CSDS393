import React, {Fragment, useState} from 'react'
import { Button } from 'react-bootstrap';

const AddAccount = () =>{
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
                <Button variant="info">Add an account</Button>
        </div>
    )
}

export default AddAccount;