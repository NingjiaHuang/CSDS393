import {render, screen, cleanup} from '@testing-library/react';
import AddAAccount from '../ManageAccounts/AddAAccount';
import AddBAccount from '../ManageAccounts/AddBAccount';
import AddPAccount from '../ManageAccounts/AddPAccount';
import ListAccount from '../ManageAccounts/ListAccount';
import EditAccount from '../ManageAccounts/EditAccount';

import ManageAccounts from '../ManageAccounts';


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

test('matches snapshot of add a parent account', () =>{
    const tree = renderer.create(<AddPAccount/>).toJSON();
    expect(tree).toMatchSnapshot();
})


test('matches snapshot of manage account', () =>{
    const tree = renderer.create(<ManageAccounts/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of list account', () =>{
    const tree = renderer.create(<ListAccount/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of edit account', () =>{
    const tree = renderer.create(<EditAccount/>).toJSON();
    expect(tree).toMatchSnapshot();
})

