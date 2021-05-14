import {render, screen, cleanup, getByTestId, fireEvent} from '@testing-library/react';
import {mount} from 'enzyme';
import SearchCattery from '../SearchCattery';

import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';

afterEach(() =>{
    cleanup();
})


test('matches snapshot of search cattery', () =>{
    const tree = renderer.create(<SearchCattery/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test("search box should accept text", () => {
    const {getByTestId} = render(<SearchCattery/>);
    const searchInputNode = getByTestId('searchcattery');
    expect(searchInputNode.value).toMatch("");
    fireEvent.change(searchInputNode, {target:{value:'test@test.com'}});
    expect (searchInputNode.value).toMatch("test@test.com")
})