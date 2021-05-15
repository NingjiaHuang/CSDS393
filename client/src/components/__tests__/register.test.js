import {render, screen, fireEvent, cleanup, act} from '@testing-library/react';
import BreederRegister, {onSubmitForm}  from '../register_breeder';
import ParentRegister  from '../register_parent';
import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";



import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({adapter: new Adapter() });

afterEach(() =>{
    cleanup();
})

test('matches snapshot of parent register', () =>{
    const tree = renderer.create(<ParentRegister/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of breeder register', () =>{
    const tree = renderer.create(<BreederRegister/>).toJSON();
    expect(tree).toMatchSnapshot();
})

describe("register parent", () =>{
    describe("with valid inputs", () =>{
    it('changes the input', async() =>{
        const mockonsubmit = jest.fn()
        const {getByLabelText} = render(<ParentRegister onsubmit={mockonsubmit}/>)
        const name = getByLabelText("Name:");
        const password = getByLabelText("Password:")
        const email = getByLabelText("Email:")
        const phone = getByLabelText("Phone Number:")
        const prefer = getByLabelText("Preferred Name:")
        fireEvent.change(name, {target:{value:"test"}})
        fireEvent.change(password, {target:{value:"test"}})
        fireEvent.change(email, {target:{value:"test@test.com"}})
        fireEvent.change(phone, {target:{value:"1244"}})
        fireEvent.change(prefer, {target:{value:"test"}})

       
        expect(name.value).toMatch("test")
        expect(password.value).toMatch("test")
        expect(email.value).toMatch("test@test.com")
        expect(phone.value).toMatch("1244")
        expect(prefer.value).toMatch("test")
    })
    })
})

describe("register breeder", () =>{
    describe("with valid inputs", () =>{
    it('changes the input', async() =>{
        const mockonsubmit = jest.fn()
        const {getByLabelText} = render(<BreederRegister onsubmit={mockonsubmit}/>)
        const name = getByLabelText("Name:");
        const password = getByLabelText("Password:")
        const email = getByLabelText("Email:")
        const phone = getByLabelText("Phone Number:")
        const cattery = getByLabelText("Cattery Name:")
        const org = getByLabelText("Organization:")
        const owner = getByLabelText("Owner Name:")
        const city = getByLabelText("City:")
        fireEvent.change(name, {target:{value:"test"}})
        fireEvent.change(password, {target:{value:"test"}})
        fireEvent.change(email, {target:{value:"test@test.com"}})
        fireEvent.change(phone, {target:{value:"1244"}})
        fireEvent.change(cattery, {target:{value:"test"}})
        fireEvent.change(org, {target:{value:"rewfd"}})
        fireEvent.change(owner, {target:{value:"rewfd"}})
        fireEvent.change(city, {target:{value:"rewfd"}})
       
        expect(name.value).toMatch("test")
        expect(password.value).toMatch("test")
        expect(email.value).toMatch("test@test.com")
        expect(phone.value).toMatch("1244")
        expect(cattery.value).toMatch("test")
        expect(org.value).toMatch("rewfd")
        expect(owner.value).toMatch("rewfd")
        expect(city.value).toMatch("rewfd")
    })
    })
})