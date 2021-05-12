import {render, screen, cleanup} from '@testing-library/react';
import DisplayTree from '../FamilyTreeManagment/DisplayTree';
import PairTree from '../FamilyTreeManagment/PairTree';

import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';
afterEach(() =>{
    cleanup();
})


test('matches snapshot of Display Tree', () =>{
    const tree = renderer.create(<DisplayTree/>).toJSON();
    expect(tree).toMatchSnapshot();
})


test('matches snapshot of Pair Tree', () =>{
    const tree = renderer.create(<PairTree/>).toJSON();
    expect(tree).toMatchSnapshot();
})
