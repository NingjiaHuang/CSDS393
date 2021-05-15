import React from 'react'
import AddAAccount from "./AddAAccount"
import AddBAccount from "./AddBAccount"
import AddPAccount from "./AddPAccount"

const AddAccount = () =>{
    return(
        <div className = 'mx-auto'>
             <table class="mx-auto" size="sm">
                 <thead>
                    <th><AddAAccount/></th>
                 </thead>
             </table>
        </div>
    )
}

export default AddAccount;