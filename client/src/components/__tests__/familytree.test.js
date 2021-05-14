import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import DisplayTree from '../FamilyTreeManagment/DisplayTree';
import PairTree from '../FamilyTreeManagment/PairTree';
import FamilyTreeBreeder from '../FamilyTreeBreeder';
import FamilyTreePP from '../FamilyTreePP';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';
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

