import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import DisplayTree from '../FamilyTreeManagment/DisplayTree';
import PairTree from '../FamilyTreeManagment/PairTree';
import FamilyTree from'../FamilyTree';
import {mount, configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
afterEach(() =>{
    cleanup();
})

configure({ adapter: new Adapter() });


test('matches snapshot of Display Tree', () =>{
    const tree = renderer.create(<DisplayTree/>).toJSON();
    expect(tree).toMatchSnapshot();
})


test('matches snapshot of Pair Tree', () =>{
    const tree = renderer.create(<PairTree/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of family Tree', () =>{
    const tree = renderer.create(<FamilyTree/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test("search box should accept text", () => {
    const {getByTestId} = render(<DisplayTree/>);
    const searchInputNode = getByTestId('searchTree');
    expect(searchInputNode.value).toMatch("");
    fireEvent.change(searchInputNode, {target:{value:'test@test.com'}});
    expect (searchInputNode.value).toMatch("test@test.com")
})

describe("Click tests", () => {
    it('should open drawer when ClickIndicator is clicked', () => {
        const mockOnClick = jest.fn()
        const { getByTestId } = render(<PairTree onClick={mockOnClick()} />)
      
        const clickIndicator = getByTestId('pairBtn')

        fireEvent.click(clickIndicator)

        expect(mockOnClick).toHaveBeenCalledTimes(1)

    })
    });
