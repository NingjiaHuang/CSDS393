import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import AddBCat from '../ManageCats/AddBCat';
import AddPCat from '../ManageCats/AddPCat';
import AddKitten from '../ManageCats/AddKitten';
import EditCat from '../ManageCats/EditCat';
import ListCat from '../ManageCats/ListCat';
import ManageCats from '../ManageCats';
import AddCat from '../ManageCats/AddCat'

import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';
afterEach(() =>{
    cleanup();
})

test('matches snapshot of add cat', () =>{
    const tree = renderer.create(<AddCat/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of add breeding cat', () =>{
    const tree = renderer.create(<AddBCat/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of add pregnant cat', () =>{
    const tree = renderer.create(<AddPCat/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of add a kitten', () =>{
    const tree = renderer.create(<AddKitten/>).toJSON();
    expect(tree).toMatchSnapshot();
})


test('matches snapshot of list cats', () =>{
    const tree = renderer.create(<ListCat/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of manage cats', () =>{
    const tree = renderer.create(<ManageCats/>).toJSON();
    expect(tree).toMatchSnapshot();
})

/*
test('matches snapshot of edit cats', () =>{
    const tree = renderer.create(<EditCat/>).toJSON();
    expect(tree).toMatchSnapshot();
})
*/

describe("Breeder clicks", () => {
    it('add breeding cat button ', () => {
        const mockOnClick = jest.fn()
        const { getByTestId } = render(<AddBCat onClick={mockOnClick()} />)
        const clickIndicator = getByTestId('showBtn')
        fireEvent.click(clickIndicator)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    
    })

    it('add preagnant cat button ', () => {
        const mockOnClick = jest.fn()
        const { getByTestId } = render(<AddPCat onClick={mockOnClick()} />)
        const clickIndicator = getByTestId('showBtn')
        fireEvent.click(clickIndicator)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    
    })

    it('add kitten button ', () => {
        const mockOnClick = jest.fn()
        const { getByTestId } = render(<AddKitten onClick={mockOnClick()} />)
        const clickIndicator = getByTestId('showBtn')
        fireEvent.click(clickIndicator)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    
    })
    });
    

test("search box should accept text", () => {
    const {getByTestId} = render(<ListCat/>);
    const searchInputNode = getByTestId('searchCat');
    expect(searchInputNode.value).toMatch("");
    fireEvent.change(searchInputNode, {target:{value:'Ja'}});
    expect (searchInputNode.value).toMatch("Ja")
})