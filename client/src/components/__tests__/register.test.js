import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import register_breeder from '../register_breeder';
import register_parent from '../register_parent';

import BreederRegister from '../register_breeder';
import ParentRegister from '../register_parent';
import { onSubmitForm } from '../login_admin'; // the function to mock--called by handleSubmit
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom/extend-expect';

afterEach(() =>{
    cleanup();
})


test('matches snapshot of breeder register', () =>{
    const tree = renderer.create(<register_breeder/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test("breeder name input should accept text", () => {
    const {getByLabelText} = render(<BreederRegister/>);
    const emailInputNode = getByLabelText("Name:");
    expect(emailInputNode.value).toMatch("");
    fireEvent.change(emailInputNode, {target:{value:'nora'}});
    expect (emailInputNode.value).toMatch("nora")
})

test("breeder phone number input should accept text", () => {
    const {getByLabelText} = render(<BreederRegister/>);
    const passwordInputNode = getByLabelText("Phone Number:");
    expect(passwordInputNode.value).toMatch("");
    fireEvent.change(passwordInputNode, {target:{value:'2211334444'}});
    expect (passwordInputNode.value).toMatch("2211334444")
})

test("breeder email input should accept text", () => {
    const {getByLabelText} = render(<BreederRegister/>);
    const emailInputNode = getByLabelText("Email:");
    expect(emailInputNode.value).toMatch("");
    fireEvent.change(emailInputNode, {target:{value:'test@test.com'}});
    expect (emailInputNode.value).toMatch("test@test.com")
})

test("breeder password input should accept text", () => {
    const {getByLabelText} = render(<BreederRegister/>);
    const passwordInputNode = getByLabelText("Password:");
    expect(passwordInputNode.value).toMatch("");
    fireEvent.change(passwordInputNode, {target:{value:'12345678'}});
    expect (passwordInputNode.value).toMatch("12345678")
})

test("breeder cattery name input should accept text", () => {
    const {getByLabelText} = render(<BreederRegister/>);
    const passwordInputNode = getByLabelText("Cattery Name:");
    expect(passwordInputNode.value).toMatch("");
    fireEvent.change(passwordInputNode, {target:{value:'kitty'}});
    expect (passwordInputNode.value).toMatch("kitty")
})

test("breeder organization input should accept text", () => {
    const {getByLabelText} = render(<BreederRegister/>);
    const passwordInputNode = getByLabelText("Organization:");
    expect(passwordInputNode.value).toMatch("");
    fireEvent.change(passwordInputNode, {target:{value:'CFA'}});
    expect (passwordInputNode.value).toMatch("CFA")
})

test("breeder owner name input should accept text", () => {
    const {getByLabelText} = render(<BreederRegister/>);
    const passwordInputNode = getByLabelText("Owner Name:");
    expect(passwordInputNode.value).toMatch("");
    fireEvent.change(passwordInputNode, {target:{value:'Mike'}});
    expect (passwordInputNode.value).toMatch("Mike")
})

test("breeder city input should accept text", () => {
    const {getByLabelText} = render(<BreederRegister/>);
    const passwordInputNode = getByLabelText("City:");
    expect(passwordInputNode.value).toMatch("");
    fireEvent.change(passwordInputNode, {target:{value:'Cleveland'}});
    expect (passwordInputNode.value).toMatch("Cleveland")
})



test('matches snapshot of parent register', () =>{
    const tree = renderer.create(<register_parent/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test("parent name input should accept text", () => {
    const {getByLabelText} = render(<ParentRegister/>);
    const emailInputNode = getByLabelText("Name:");
    expect(emailInputNode.value).toMatch("");
    fireEvent.change(emailInputNode, {target:{value:'nora'}});
    expect (emailInputNode.value).toMatch("nora")
})

test("parent phone number input should accept text", () => {
    const {getByLabelText} = render(<ParentRegister/>);
    const passwordInputNode = getByLabelText("Phone Number:");
    expect(passwordInputNode.value).toMatch("");
    fireEvent.change(passwordInputNode, {target:{value:'2211334444'}});
    expect (passwordInputNode.value).toMatch("2211334444")
})

test("parent email input should accept text", () => {
    const {getByLabelText} = render(<ParentRegister/>);
    const emailInputNode = getByLabelText("Email:");
    expect(emailInputNode.value).toMatch("");
    fireEvent.change(emailInputNode, {target:{value:'test@test.com'}});
    expect (emailInputNode.value).toMatch("test@test.com")
})

test("parent password input should accept text", () => {
    const {getByLabelText} = render(<ParentRegister/>);
    const passwordInputNode = getByLabelText("Password:");
    expect(passwordInputNode.value).toMatch("");
    fireEvent.change(passwordInputNode, {target:{value:'12345678'}});
    expect (passwordInputNode.value).toMatch("12345678")
})

test("parent preferred name input should accept text", () => {
    const {getByLabelText} = render(<ParentRegister/>);
    const passwordInputNode = getByLabelText("Preferred Name:");
    expect(passwordInputNode.value).toMatch("");
    fireEvent.change(passwordInputNode, {target:{value:'kitty'}});
    expect (passwordInputNode.value).toMatch("kitty")
})
