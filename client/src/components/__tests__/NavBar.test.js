import {render, screen, cleanup} from '@testing-library/react';
import NavBar from '../NavBar/Navbar';

import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';

afterEach(() =>{
    cleanup();
})


test('matches snapshot of navbar', () =>{
    const tree = renderer.create(<NavBar/>).toJSON();
    expect(tree).toMatchSnapshot();
})
