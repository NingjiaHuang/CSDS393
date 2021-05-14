import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import AddAAccount from '../ManageAccounts/AddAAccount';
import EditAccount from '../ManageAccounts/EditAccount';
import ListAccount from '../ManageAccounts/ListAccount';
import ManageAccounts from '../ManageAccounts';
import AddAccount from '../ManageAccounts/AddAccount'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';
afterEach(() =>{
    cleanup();
})

test('matches snapshot of add an admin aacount', () =>{
    const tree = renderer.create(<AddAAccount/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of add account', () =>{
    const tree = renderer.create(<AddAccount/>).toJSON();
    expect(tree).toMatchSnapshot();
})


test('matches snapshot of list account', () =>{
    const tree = renderer.create(<ListAccount/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of manage account', () =>{
    const tree = renderer.create(<ManageAccounts/>).toJSON();
    expect(tree).toMatchSnapshot();
})