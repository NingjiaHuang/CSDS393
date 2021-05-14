import React, {Fragment, useEffect, useState} from 'react';
import mock_data from "../MOCK_DATA.json"
import EditAccount from "./EditAccount"

const ListAccount = () =>{
    const[searchTerm, setSearchTerm] = useState("")
    const[accounts, setAccounts] = useState([]);

    //delete cat function
    const deleteAccount = async(reg_email) =>{
        try{
            const deleteAccount = await fetch("http://localhost:4020/auth/delete",{
                method: "DELETE"
            });
            setAccounts(accounts.filter(account => account.reg_email !== reg_email))
        }catch (err){
            console.error(err.message);
        }
    }

    const getAccounts = async() => {
        try{
            
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
          placeholder="search cats by name here" 
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
            {accounts.filter((val) =>{  //if get all catteries completed, change "mock_data" to catteries
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
                        <td><EditAccount  cat = {val}/></td>
                    <td>
                        <button className="btn btn-danger"
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