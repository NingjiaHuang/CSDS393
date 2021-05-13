import React, {Fragment, useState} from 'react'
import { Button } from 'react-bootstrap';
import { MDBContainer } from 'mdbreact';
import AddBCat from "./AddBCat"
import AddPCat from "./AddPCat"
import AddKitten from "./AddKitten"

const AddCat = () =>{
    return(
        <div className = 'mx-auto'>
             <table class="mx-auto" size="sm">
                 <thead>
                    <th><AddBCat/></th>
                    <th><AddPCat/></th>
                    <th><AddKitten/></th>
                 </thead>
             </table>
               
        </div>
    )
}

export default AddCat;