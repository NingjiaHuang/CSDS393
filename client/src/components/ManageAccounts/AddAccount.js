import React, {Fragment, useState} from 'react'
import { Button } from 'react-bootstrap';
import AddAAccount from "./AddAAccount"
import AddBAccount from "./AddBAccount"
import AddPAccount from "./AddPAccount"

const AddAccount = () =>{
    return(
        <div className = 'mx-auto'>
             <table class="mx-auto" size="sm">
                 <thead>
                    <th><AddBAccount/></th>
                    <th><AddAAccount/></th>
                    <th><AddPAccount/></th>
                 </thead>
             </table>
        </div>
    )
}

export default AddAccount;