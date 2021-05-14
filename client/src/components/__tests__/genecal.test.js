import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import GeneTable from '../GeneTable';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';
afterEach(() =>{
    cleanup();
})

test('matches snapshot of the gene calculator', () =>{
    const tree = renderer.create(<GeneTable/>).toJSON();
    expect(tree).toMatchSnapshot();
})