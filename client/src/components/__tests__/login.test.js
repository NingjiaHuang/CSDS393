import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import BreederLogin  from '../login_breeder';
import ParentLogin  from '../login_parent';
import AdminLogin  from '../login_admin';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';


afterEach(() =>{
    cleanup();
})

test('matches snapshot of parent register', () =>{
    const tree = renderer.create(<BreederLogin/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of breeder register', () =>{
    const tree = renderer.create(<ParentLogin/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of breeder register', () =>{
    const tree = renderer.create(<AdminLogin/>).toJSON();
    expect(tree).toMatchSnapshot();
})