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

describe("login admin", () =>{
    describe("with valid inputs", () =>{
    it('changes the input', async() =>{
        const mockonsubmit = jest.fn()
        const {getByLabelText} = render(<AdminLogin onsubmit={mockonsubmit}/>)
        const password = getByLabelText("Password:")
        const email = getByLabelText("Email:")
        fireEvent.change(email, {target:{value:"test@test.com"}})
        fireEvent.change(password, {target:{value:"test"}})

        expect(password.value).toMatch("test")
        expect(email.value).toMatch("test@test.com")
    })
    })
})

describe("login breeder", () =>{
    describe("with valid inputs", () =>{
    it('changes the input', async() =>{
        const mockonsubmit = jest.fn()
        const {getByLabelText} = render(<BreederLogin onsubmit={mockonsubmit}/>)
        const password = getByLabelText("Password:")
        const email = getByLabelText("Email:")
        fireEvent.change(email, {target:{value:"test@test.com"}})
        fireEvent.change(password, {target:{value:"test"}})

        expect(password.value).toMatch("test")
        expect(email.value).toMatch("test@test.com")
    })
    })
})

describe("login admin", () =>{
    describe("with valid inputs", () =>{
    it('changes the input', async() =>{
        const mockonsubmit = jest.fn()
        const {getByLabelText} = render(<ParentLogin onsubmit={mockonsubmit}/>)
        const password = getByLabelText("Password:")
        const email = getByLabelText("Email:")
        fireEvent.change(email, {target:{value:"test@test.com"}})
        fireEvent.change(password, {target:{value:"test"}})

        expect(password.value).toMatch("test")
        expect(email.value).toMatch("test@test.com")
    })
    })
})