import React, {Fragment, useState, useEffect} from 'react'
import mock_data from "./MOCK_DATA.json"
import { Button } from 'react-bootstrap';

const SearchCattery = ({setAuth}) =>{
  const[searchTerm, setSearchTerm] = useState("")
  const[catteries, setCatteries] = useState([]);
  const getCatteries = async() => {
      try{
          
          const response = await fetch("http://localhost:4020/api/v1/catteries")
          const jsonData = await response.json()
          setCatteries(jsonData);

      } catch (err){
          console.error(err.message);
      }
  }

  useEffect(() =>{
      getCatteries();
  }, [])

    return(
        <Fragment>
             {" "}
          <input type="text" className="form-control" 
          data-testid ="searchcattery"
          placeholder="search cattery here" 
          onChange={event => {setSearchTerm(event.target.value)}}
          />
          <table class="table mt-5 text-center">
              <thead>
                  <tr>
                      <th>Cattery Name</th>
                      <th>Owner Name</th>
                  </tr>
              </thead>
              <tbody>
              {catteries.filter((val) =>{  //if get all catteries completed, change "mock_data" to catteries
                  if (searchTerm == ""){
                    return val
                  } else if (val.cattery_name.toLowerCase().includes(searchTerm.toLowerCase()) ){
                    return val
                  }
              }
              ).map((val, key) => (
                  <tr key={key}>
                      <td>{val.cattery_name}</td>
                      <td>{val.owner_name}</td>
                      <td>
                      </td>
                  </tr>
              ))
              }
            </tbody>
        </table>
        </Fragment>
    )
}

export default SearchCattery;