import { getContrastRatio } from '@material-ui/core'
import React, {Fragment, useEffect, useState} from 'react';
import mock_data from "../MOCK_DATA.json"
import EditCat from "./EditCat"

const ListCatBreeder = () =>{
    const[searchTerm, setSearchTerm] = useState("")
    const[cats, setCats] = useState([]);

    //delete cat function
    const deleteCat = async(id) =>{
        try{
            const deleteCat = await fetch(`http://localhost:4020/api/v1/cats/${id}`,{
                method: "DELETE"
            });
            setCats(cats.filter(cat => cat.certi_num !== id))
        }catch (err){
            console.error(err.message);
        }
    }

    const getCats = async() => {
        try{
            
            const response = await fetch("http://localhost:4020/api/v1/cats")
            const jsonData = await response.json()
            setCats(jsonData);

        } catch (err){
            console.error(err.message);
        }
    }

    useEffect(() =>{
        getCats();
    }, [])

    return (
    <Fragment>
        {" "}
        <input type="text" className="form-control" 
          placeholder="search cats by name here" 
          data-testid="searchCat"
          onChange={event => {setSearchTerm(event.target.value)}}
          />
        <table class="table mt-5 text-center">
            <thead>
                <tr>
                    <th>Certificate Number</th>
                    <th>Cat Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {cats.filter((val) =>{  //if get all catteries completed, change "mock_data" to catteries
                  if (searchTerm == ""){
                    return val
                  } else if (val.cat_name.toLowerCase().includes(searchTerm.toLowerCase()) ){
                    return val
                  }
              }
              ).map((val, key) => (
                  <tr key={key}>
                      <td>{val.certi_num}</td>
                      <td>{val.cat_name}</td>
                        <td><EditCat  cat = {val}/></td>
                    <td>
                        <button className="btn btn-danger"
                        onClick={() => deleteCat(val.certi_num)}>Delete</button>
                    </td>
                </tr>
            ))
            }
            </tbody>
        </table>
    </Fragment>
    )
}
export default ListCatBreeder;