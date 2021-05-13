import React, {Fragment,} from 'react'
import AddCat from './ManageCats/AddCat'
import ListCatBreeder from './ManageCats/ListCatBreeder'
import { MDBContainer } from 'mdbreact';
import { Link } from "react-router-dom"

const ManageCatsBreeder = ({setAuth}) => {
    return (
      <Fragment>
        <MDBContainer>
        <div className='mx-auto mt-5'>
          <h2 className="text-center">Manage your cats </h2>
            <AddCat />
          <div className='mt-3'>
            <ListCatBreeder />
          </div>
        </div>
      </MDBContainer>
      </Fragment>
    )
}

export default ManageCatsBreeder;