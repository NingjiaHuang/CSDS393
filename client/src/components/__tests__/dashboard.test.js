import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import Card from '../Card/Card';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';
import dashboard_admin from '../dashboard_admin'
import dashboard_breeder from '../dashboard_breeder'
import dashboard_parent from '../dashboard_parent'
import AdminDashboard from '../dashboard_admin';
import BreederDashboard from '../dashboard_breeder';
import ParentDashboard from '../dashboard_parent';
afterEach(() =>{
    cleanup();
})

test('matches snapshot of a card', () =>{
    const tree = renderer.create(<Card/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of parent dashboard', () =>{
    const tree = renderer.create(<dashboard_parent/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of breeder dashboard', () =>{
    const tree = renderer.create(<dashboard_breeder/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of admin dashboard', () =>{
    const tree = renderer.create(<dashboard_admin/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('admin logout button ', () => {
    const mockOnClick = jest.fn()
    const { getByTestId } = render(<AdminDashboard onClick={mockOnClick()} />)
    const clickIndicator = getByTestId('logoutbtn')
    fireEvent.click(clickIndicator)
    expect(mockOnClick).toHaveBeenCalledTimes(1)

})


test('breeder logout button ', () => {
    const mockOnClick = jest.fn()
    const { getByTestId } = render(<BreederDashboard onClick={mockOnClick()} />)
    const clickIndicator = getByTestId('logoutbtn')
    fireEvent.click(clickIndicator)
    expect(mockOnClick).toHaveBeenCalledTimes(1)

})


test('parent logout button ', () => {
        const mockOnClick = jest.fn()
        const { getByTestId } = render(<ParentDashboard onClick={mockOnClick()} />)
        const clickIndicator = getByTestId('logoutbtn')
        fireEvent.click(clickIndicator)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
})