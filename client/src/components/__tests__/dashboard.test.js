import {render, screen, cleanup} from '@testing-library/react';
import dashboard_admin from '../dashboard_admin';
import dashboard_breeder from '../dashboard_breeder';
import dashboard_parent from '../dashboard_parent';


import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';

afterEach(() =>{
    cleanup();
})
test('matches snapshot of admin dashboard', () =>{
    const tree = renderer.create(<dashboard_admin/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of breeder dashboard', () =>{
    const tree = renderer.create(<dashboard_breeder/>).toJSON();
    expect(tree).toMatchSnapshot();
})


test('matches snapshot of parent dashboard', () =>{
    const tree = renderer.create(<dashboard_parent/>).toJSON();
    expect(tree).toMatchSnapshot();
})

