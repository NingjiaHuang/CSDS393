import React from 'react'
import DisplayTree from "./FamilyTreeManagment/DisplayTree"
import PairTree from "./FamilyTreeManagment/PairTree"
import { MDBContainer } from 'mdbreact';

function FamilyTree() {
  return(
    <MDBContainer>
     <div className='mx-auto mt-5'>
          <h2 className="text-center">Family Tree</h2>
            <PairTree />
          <div className='mt-3'>
            <DisplayTree />
          </div>
        </div>
  </MDBContainer>

  ); 
}

export default FamilyTree;
