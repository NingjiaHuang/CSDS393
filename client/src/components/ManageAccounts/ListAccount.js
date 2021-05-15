import React, {Fragment, useEffect, useState} from 'react';

import EditAccount from "./EditAccount"

const ListAccount = () =>{
    const[searchTerm, setSearchTerm] = useState("")
    const[accounts, setAccounts] = useState([]);

    //delete cat function
    const deleteAccount = async(reg_email) =>{
        try{
            const body = {reg_email};
            const deleteAccount = await fetch("http://localhost:4020/auth/delete",{
                method: "DELETE",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log("deleted")
            setAccounts(Object.values(accounts).filter(account => account.reg_email !== reg_email))
        }catch (err){
            console.error(err.message);
        }
    }

    const getAccounts = async() => {
        try{
            console.log("executed")
            const response = await fetch("http://localhost:4020/auth/all_accounts")
            const jsonData = await response.json()
            setAccounts(jsonData);

        } catch (err){
            console.error(err.message);
        }
    }

    useEffect(() =>{
        getAccounts();
    }, [])

    return (
    <Fragment>
        {" "}
        <input type="text" className="form-control" 
          placeholder="search accounts by username here" 
          data-testid="searchAccount"
          onChange={event => {setSearchTerm(event.target.value)}}
          />
        <table class="table mt-5 text-center">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Account type</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {Object.values(accounts).filter((val) =>{  //if get all catteries completed, change "mock_data" to catteries
                  if (searchTerm == ""){
                    return val
                  } else if (val.username.toLowerCase().includes(searchTerm.toLowerCase()) ){
                    return val
                  }
              }
              ).map((val, key) => (
                  <tr key={key}>
                      <td>{val.username}</td>
                      <td>{val.account_type}</td>
                      <td>{val.reg_email}</td>
                        <td><EditAccount  account = {val}/></td>
                    <td>
                        <button className="btn btn-danger" data-testid="deletebtn"
                        onClick={() => deleteAccount(val.reg_email)}>Delete</button>
                        </td>
                </tr>
            ))
            }
            </tbody>
        </table>
    </Fragment>
    )
}
export default ListAccount;