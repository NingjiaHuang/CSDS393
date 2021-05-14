import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import BreederRegister  from '../register_breeder';
import ParentRegister  from '../register_parent';


import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';


afterEach(() =>{
    cleanup();
})

test('matches snapshot of parent register', () =>{
    const tree = renderer.create(<ParentRegister/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of breeder register', () =>{
    const tree = renderer.create(<BreederRegister/>).toJSON();
    expect(tree).toMatchSnapshot();
})