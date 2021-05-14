import React from 'react'
import AddAccount from './ManageAccounts/AddAAccount'
import ListAccount from './ManageAccounts/ListAccount'
import { MDBContainer } from 'mdbreact';

export default function ManageAccounts() {
    return (
        <MDBContainer>
        <div className='mx-auto mt-5'>
          <h2 className="text-center">Manage system accounts</h2>
          <AddAccount />
          <div className='mt-3'>
          <ListAccount />
          </div>
        </div>
      </MDBContainer>
    )
}