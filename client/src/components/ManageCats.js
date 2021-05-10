import React, {Fragment} from 'react'
import AddCat from './ManageCats/AddCat'
import ListCat from './ManageCats/ListCat'
import { MDBContainer } from 'mdbreact';

export default function ManageCats() {
    return (
        <MDBContainer>
        <div className='mx-auto mt-5'>
          <h2 className="text-center">Manage your cats</h2>
            <AddCat />
          <div className='mt-3'>
            <ListCat />
          </div>
        </div>
      </MDBContainer>
    )
}
