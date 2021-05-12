import {render, screen, cleanup} from '@testing-library/react';
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
