import {render, screen, cleanup} from '@testing-library/react';
import UpdateAdmin from '../UpdateUserInfo/UpdateAdmin';
import UpdateBreeder from '../UpdateUserInfo/UpdateBreeder';
import UpdatePP from '../UpdateUserInfo/UpdatePP';


import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';

afterEach(() =>{
    cleanup();
})


test('matches snapshot of update admin info', () =>{
    const tree = renderer.create(<UpdateAdmin/>).toJSON();
    expect(tree).toMatchSnapshot();
})


test('matches snapshot of update breeder info', () =>{
    const tree = renderer.create(<UpdateBreeder/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of update parent info', () =>{
    const tree = renderer.create(<UpdatePP/>).toJSON();
    expect(tree).toMatchSnapshot();
})

