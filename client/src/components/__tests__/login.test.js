import {render, screen, cleanup} from '@testing-library/react';
import login_admin from '../login_admin';
import login_breeder from '../login_breeder';
import login_parent from '../login_parent';


import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';

afterEach(() =>{
    cleanup();
})


test('matches snapshot of admin login', () =>{
    const tree = renderer.create(<login_admin/>).toJSON();
    expect(tree).toMatchSnapshot();
})


test('matches snapshot of breeder login', () =>{
    const tree = renderer.create(<login_breeder/>).toJSON();
    expect(tree).toMatchSnapshot();
})



test('matches snapshot of potential parents login', () =>{
    const tree = renderer.create(<login_parent/>).toJSON();
    expect(tree).toMatchSnapshot();
})

