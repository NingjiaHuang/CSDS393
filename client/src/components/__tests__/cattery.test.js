import {render, screen, fireEvent, cleanup, act} from '@testing-library/react';
import SearchCattery from '../SearchCattery';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';


const unmockedFetch = global.fetch

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    })
})

afterAll(() => {
  global.fetch = unmockedFetch
})

test('matches snapshot of search cattery', () =>{
    const tree = renderer.create(<SearchCattery/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test("search box should accept text", () => {
    const {getByTestId} = render(<SearchCattery/>);
    const searchInputNode = getByTestId('searchcattery');
    expect(searchInputNode.value).toMatch("");
    fireEvent.change(searchInputNode, {target:{value:'Ja'}});
    expect (searchInputNode.value).toMatch("Ja")
})
