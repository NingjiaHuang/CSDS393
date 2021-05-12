import {render, screen, cleanup} from '@testing-library/react';
import AddBCat from '../ManageCats/AddBCat';
import AddPCat from '../ManageCats/AddPCat';
import AddKitten from '../ManageCats/AddKitten';
import EditCat from '../ManageCats/EditCat';
import ListCat from '../ManageCats/ListCat';
import ManageCats from '../ManageCats';

import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';
afterEach(() =>{
    cleanup();
})

test('matches snapshot of add breeding cat', () =>{
    const tree = renderer.create(<AddBCat/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of add pregnant cat', () =>{
    const tree = renderer.create(<AddPCat/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of add a kitten', () =>{
    const tree = renderer.create(<AddKitten/>).toJSON();
    expect(tree).toMatchSnapshot();
})


test('matches snapshot of list cats', () =>{
    const tree = renderer.create(<ListCat/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of manage cats', () =>{
    const tree = renderer.create(<ManageCats/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of edit cats', () =>{
    const tree = renderer.create(<EditCat/>).toJSON();
    expect(tree).toMatchSnapshot();
})