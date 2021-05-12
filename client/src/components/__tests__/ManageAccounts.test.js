import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import AddAAccount from '../ManageAccounts/AddAAccount';
import AddBAccount from '../ManageAccounts/AddBAccount';
import AddPAccount from '../ManageAccounts/AddPAccount';
import ListAccount from '../ManageAccounts/ListAccount';
import EditAccount from '../ManageAccounts/EditAccount';
import AddAccount from '../ManageAccounts/AddAccount';


import ManageAccounts from '../ManageAccounts';


import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';
afterEach(() =>{
    cleanup();
})

test('matches snapshot of add  account', () =>{
    const tree = renderer.create(<AddAccount/>).toJSON();
    expect(tree).toMatchSnapshot();
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

/*
test('matches snapshot of edit account', () =>{
    const tree = renderer.create(<EditAccount/>).toJSON();
    expect(tree).toMatchSnapshot();
})
*/

describe("Admin clicks", () => {
    it('add breeder button ', () => {
        const mockOnClick = jest.fn()
        const { getByTestId } = render(<AddBAccount onClick={mockOnClick()} />)
        const clickIndicator = getByTestId('showBtn')
        fireEvent.click(clickIndicator)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    
    })

    it('add admin button ', () => {
        const mockOnClick = jest.fn()
        const { getByTestId } = render(<AddAAccount onClick={mockOnClick()} />)
        const clickIndicator = getByTestId('showBtn')
        fireEvent.click(clickIndicator)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    
    })

    it('add parent button ', () => {
        const mockOnClick = jest.fn()
        const { getByTestId } = render(<AddPAccount onClick={mockOnClick()} />)
        const clickIndicator = getByTestId('showBtn')
        fireEvent.click(clickIndicator)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    
    })
    });
    

test("search box should accept text", () => {
    const {getByTestId} = render(<ListAccount/>);
    const searchInputNode = getByTestId('searchAccount');
    expect(searchInputNode.value).toMatch("");
    fireEvent.change(searchInputNode, {target:{value:'Ja'}});
    expect (searchInputNode.value).toMatch("Ja")
})