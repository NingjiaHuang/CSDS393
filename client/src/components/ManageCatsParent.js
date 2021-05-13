import React, {Fragment,} from 'react'
import ListCatParent from './ManageCats/ListCatParent'
import { MDBContainer } from 'mdbreact';
import { Link } from "react-router-dom"

const ManageCatsParent = ({setAuth}) => {
    return (
      <Fragment>
        <MDBContainer>
        <div className='mx-auto mt-5'>
          <h2 className="text-center">Manage your cats </h2>
          <div className='mt-3'>
            <ListCatParent />
          </div>
        </div>
      </MDBContainer>
      </Fragment>
    )
}

export default ManageCatsParent;