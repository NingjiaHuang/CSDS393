import {render, screen, cleanup} from '@testing-library/react';
import register_breeder from '../register_breeder';
import register_parent from '../register_parent';


import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';

afterEach(() =>{
    cleanup();
})


test('matches snapshot of breeder register', () =>{
    const tree = renderer.create(<register_breeder/>).toJSON();
    expect(tree).toMatchSnapshot();
})


test('matches snapshot of parent register', () =>{
    const tree = renderer.create(<register_parent/>).toJSON();
    expect(tree).toMatchSnapshot();
})

