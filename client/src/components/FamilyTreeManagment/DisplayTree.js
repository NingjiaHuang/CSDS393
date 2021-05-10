import React, {Fragment, useState, useEffect} from 'react'
import mock_data from "./MOCK_DATA_TREE.json"

const DisplayTree = (cat) =>{
  const[searchTerm, setSearchTerm] = useState("")
  const[tree, setTree] = useState([]);
  const getTree = async() => {
      try{
          const response = await fetch(`http://localhost:4020/api/v1/gettree/${cat.certi_num}`) //should be get tree of a certain cat
          const jsonData = await response.json()
          setTree(jsonData);
      } catch (err){
          console.error(err.message);
      }
  }

    useEffect(() =>{
        getTree();
    }, [])

    return(
        <Fragment>
             {" "}
          <input type="text" className="form-control" 
          placeholder="search a family member here" 
          onChange={event => {setSearchTerm(event.target.value)}}
          />
          <table class="table mt-5 text-center">
              <thead>
                  <tr>
                      <th>Cat Name</th>
                      <th>Certificate number</th>
                      <th>Sire path</th>
                      <th>Dam path</th>
                  </tr>
              </thead>
              <tbody>
              {mock_data.filter((val) =>{  //if get all tree completed, change "mock_data" to tree
                  if (searchTerm == ""){
                    return val
                  } else if (val.cat_name.toLowerCase().includes(searchTerm.toLowerCase()) ){
                    return val
                  }
              }
              ).map((val, key) => (
                  <tr key={key}>
                      <td>{val.cat_id}</td>
                      <td>{val.cat_name}</td>
                      <td>{val.sire_path}</td>
                      <td>{val.dam_path}</td>
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

export default DisplayTree;