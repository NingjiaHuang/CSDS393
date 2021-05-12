import {render, screen, cleanup, fireEvent, act, getByDisplayValue, getByText, getByPlaceholderText} from '@testing-library/react';
import login_admin from '../login_admin';
import AdminLogin from '../login_admin';
import BreederLogin from '../login_breeder';
import ParentLogin from '../login_parent';
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

test("admin email input should accept text", () => {
    const {getByLabelText} = render(<AdminLogin/>);
    const emailInputNode = getByLabelText("Email:");
    expect(emailInputNode.value).toMatch("");
    fireEvent.change(emailInputNode, {target:{value:'test@test.com'}});
    expect (emailInputNode.value).toMatch("test@test.com")
})

test("admin password input should accept text", () => {
    const {getByLabelText} = render(<AdminLogin/>);
    const passwordInputNode = getByLabelText("Password:");
    expect(passwordInputNode.value).toMatch("");
    fireEvent.change(passwordInputNode, {target:{value:'12345678'}});
    expect (passwordInputNode.value).toMatch("12345678")
})



test('matches snapshot of breeder login', () =>{
    const tree = renderer.create(<login_breeder />).toJSON();
    expect(tree).toMatchSnapshot();
})

test("breeder email input should accept text", () => {
    const {getByLabelText} = render(<BreederLogin/>);
    const emailInputNode = getByLabelText("Email:");
    expect(emailInputNode.value).toMatch("");
    fireEvent.change(emailInputNode, {target:{value:'test@test.com'}});
    expect (emailInputNode.value).toMatch("test@test.com")
})

test("breeder password input should accept text", () => {
    const {getByLabelText} = render(<BreederLogin/>);
    const passwordInputNode = getByLabelText("Password:");
    expect(passwordInputNode.value).toMatch("");
    fireEvent.change(passwordInputNode, {target:{value:'12345678'}});
    expect (passwordInputNode.value).toMatch("12345678")
})



test('matches snapshot of potential parents login', () =>{
    const tree = renderer.create(<login_parent/>).toJSON();
    expect(tree).toMatchSnapshot();
    })


test("parent email input should accept text", () => {
    const {getByLabelText} = render(<ParentLogin/>);
    const emailInputNode = getByLabelText("Email:");
    expect(emailInputNode.value).toMatch("");
    fireEvent.change(emailInputNode, {target:{value:'test@test.com'}});
    expect (emailInputNode.value).toMatch("test@test.com")
})

test("parent password input should accept text", () => {
    const {getByLabelText} = render(<ParentLogin/>);
    const passwordInputNode = getByLabelText("Password:");
    expect(passwordInputNode.value).toMatch("");
    fireEvent.change(passwordInputNode, {target:{value:'12345678'}});
    expect (passwordInputNode.value).toMatch("12345678")
})
    

/*
describe("Admin login", ()=>{
    describe("with valid inputs", () =>{
      it('calls the onSubmitForm function' ,async() =>{
          const mockOnSubmitForm = jest.fn();
          const {getByLabelText, getByRole} = render(<AdminLogin onSubmitForm ={mockOnSubmitForm}/>);
          const submitButton = getByRole('button')

        await act(async() => {
            fireEvent.change(getByLabelText("Email:"), {target:{value:"email@test.com"}})
            fireEvent.change(getByLabelText("Password:"), {target:{value:"1234567"}})
        })
        await act(async() =>{
            fireEvent.click(submitButton)
        })
      expect(mockOnSubmitForm).toBeCalled()
    })
})
})


describe("Breeder login", ()=>{
    describe("with valid inputs", () =>{
      it('calls the onSubmitForm function' ,async() =>{
          const mockOnSubmitForm = jest.fn();
          const {getByLabelText, getByRole} = render(<BreederLogin onSubmitForm ={mockOnSubmitForm}/>);
          const submitButton = getByRole('button')

        await act(async() => {
            fireEvent.change(getByLabelText("Email:"), {target:{value:"email@test.com"}})
            fireEvent.change(getByLabelText("Password:"), {target:{value:"1234567"}})
        })
        await act(async() =>{
            fireEvent.click(submitButton)
        })
      expect(mockOnSubmitForm).toBeCalled()
    })
})
})


describe("Parent login", ()=>{
    describe("with valid inputs", () =>{
      it('calls the onSubmitForm function' ,async() =>{
          const mockOnSubmitForm = jest.fn();
          const {getByLabelText, getByRole} = render(<ParentLogin onSubmitForm ={mockOnSubmitForm}/>);
          const submitButton = getByRole('button')

        await act(async() => {
            fireEvent.change(getByLabelText("Email:"), {target:{value:"email@test.com"}})
            fireEvent.change(getByLabelText("Password:"), {target:{value:"1234567"}})
        })
        await act(async() =>{
            fireEvent.click(submitButton)
        })
      expect(mockOnSubmitForm).toBeCalled()
    })
})
})
*/