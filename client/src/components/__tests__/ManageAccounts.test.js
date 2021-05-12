import {render, screen, cleanup} from '@testing-library/react';
import DisplayTree from '../FamilyTreeManagment/DisplayTree';
import PairTree from '../FamilyTreeManagment/PairTree';
import AddAAccount from '../ManageAccounts/AddAAccount';
import AddBAccount from '../ManageAccounts/AddBAccount';
import AddPAccount from '../ManageAccounts/AddPAccount';

import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';
afterEach(() =>{
    cleanup();
})

test('matches snapshot of add an admin account', () =>{
    const tree = renderer.create(<AddAAccount/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of add a breeder account', () =>{
    const tree = renderer.create(<AddBAccount/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of add a potential parent account', () =>{
    const tree = renderer.create(<AddPAccount/>).toJSON();
    expect(tree).toMatchSnapshot();
})