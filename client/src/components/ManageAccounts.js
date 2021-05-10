import React, {Fragment} from 'react'
import AddAccount from './ManageAccounts/AddAccount'
import ListAccount from './ManageAccounts/ListAccount'

export default function ManageAccounts() {
    return (
        <MDBContainer>
        <div className='mx-auto mt-5'>
          <h2 className="text-center">Manage your cats</h2>
          <AddAccount />
          <div className='mt-3'>
          <ListAccount />
          </div>
        </div>
      </MDBContainer>
    )
}
