import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import DisplayTree from '../FamilyTreeManagment/DisplayTree';
import PairTree from '../FamilyTreeManagment/PairTree';
import FamilyTreeBreeder from '../FamilyTreeBreeder';
import FamilyTreePP from '../FamilyTreePP';
import renderer from 'react-test-renderer'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure  } from 'enzyme';
import '@testing-library/jest-dom/extend-expect';

configure({ adapter: new Adapter() })
afterEach(() =>{
    cleanup();
})

test('matches snapshot of family tree of parents', () =>{
    const tree = renderer.create(<FamilyTreePP/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of family tree of breeder', () =>{
    const tree = renderer.create(<FamilyTreeBreeder/>).toJSON();
    expect(tree).toMatchSnapshot();
})


test('matches snapshot of pair cats', () =>{
    const tree = renderer.create(<PairTree/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of display tree', () =>{
    const tree = renderer.create(<DisplayTree/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('click pair button ', () => {
    const mockOnClick = jest.fn()
    const { getByTestId } = render(<PairTree onClick={mockOnClick()} />)
    const clickIndicator = getByTestId('pairBtn')
    fireEvent.click(clickIndicator)
    expect(mockOnClick).toHaveBeenCalledTimes(1)
})

test('pair tree should render react-modal', () => {
    const wrapper = shallow(<PairTree />);
    expect(wrapper.find('Modal')).toHaveLength(1);
  });

  test("search box should accept text", () => {
    const {getByTestId} = render(<DisplayTree/>);
    const searchInputNode = getByTestId('searchTree');
    expect(searchInputNode.value).toMatch("");
    fireEvent.change(searchInputNode, {target:{value:'Ja'}});
    expect (searchInputNode.value).toMatch("Ja")
})

