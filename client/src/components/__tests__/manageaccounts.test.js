import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import AddAAccount from '../ManageAccounts/AddAAccount';
import EditAccount from '../ManageAccounts/EditAccount';
import ListAccount from '../ManageAccounts/ListAccount';
import ManageAccounts from '../ManageAccounts';
import AddAccount from '../ManageAccounts/AddAccount'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount  } from 'enzyme';
import {Modal} from 'react-bootstrap';
import { spy } from 'sinon';
import $ from 'jquery';




configure({ adapter: new Adapter() })
afterEach(() =>{
    cleanup();
})

test('matches snapshot of add an admin aacount', () =>{
    const tree = renderer.create(<AddAAccount/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of add account', () =>{
    const tree = renderer.create(<AddAccount/>).toJSON();
    expect(tree).toMatchSnapshot();
})


test('matches snapshot of list account', () =>{
    const tree = renderer.create(<ListAccount/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of manage account', () =>{
    const tree = renderer.create(<ManageAccounts/>).toJSON();
    expect(tree).toMatchSnapshot();
})


test('add an admin should render react-modal', () => {
    const wrapper = shallow(<AddAAccount />);
    expect(wrapper.find('Modal')).toHaveLength(1);
  });

  test('click add admin button ', () => {
    const mockOnClick = jest.fn()
    const mockonsubmit = jest.fn()
    const { getByTestId, getByLabelText } = render(<AddAAccount onClick={mockOnClick()} onsubmit={mockonsubmit}/>)
    const clickIndicator = getByTestId('showBtn')
    //open the modal
    fireEvent.click(clickIndicator)
    expect(mockOnClick).toHaveBeenCalledTimes(1)

    //edit the modal form
    const name = getByLabelText("Username:");
    const password = getByLabelText("Password:")
    const email = getByLabelText("Email:")
    const phone = getByLabelText("Phone:")

    fireEvent.change(name, {target:{value:"test"}})
    fireEvent.change(password, {target:{value:"test"}})
    fireEvent.change(email, {target:{value:"test@test.com"}})
    fireEvent.change(phone, {target:{value:"1244"}})

    expect(name.value).toMatch("test")
    expect(password.value).toMatch("test")
    expect(email.value).toMatch("test@test.com")
    expect(phone.value).toMatch("1244")

    //close the modal
    const closebtn = getByTestId('closebtn')
    fireEvent.click(closebtn)
    expect(mockOnClick).toHaveBeenCalledTimes(1)
    fireEvent.click(clickIndicator)
    expect(mockOnClick).toHaveBeenCalledTimes(1)

})

describe('handles the edit modal' ,() => {
    it('click edit button ', () => {
        const mockOnClick = jest.fn()
        const mockonsubmit = jest.fn()
        const account = {username:"test", user_password:"test", account_type:"admin", reg_email:"test@test.com", reg_phone:"1234"}
        const { getByTestId, getByLabelText } = render(<EditAccount account={account} onClick={mockOnClick()} onsubmit={mockonsubmit} />)
        const clickIndicator = getByTestId('showbtn')
        //open the modal
        fireEvent.click(clickIndicator)
        expect(mockOnClick).toHaveBeenCalledTimes(1)

        //edit the modal form
        const name = getByLabelText("Username:");
        const password = getByLabelText("Password:")
        const type = getByLabelText("Account Type:")
        const phone = getByLabelText("Phone:")

        fireEvent.change(name, {target:{value:"test"}})
        fireEvent.change(password, {target:{value:"test"}})
        fireEvent.change(type, {target:{value:"parent"}})
        fireEvent.change(phone, {target:{value:"1244"}})

        expect(name.value).toMatch("test")
        expect(password.value).toMatch("test")
        expect(type.value).toMatch("parent")
        expect(phone.value).toMatch("1244")

        //close the modal
        const closebtn = getByTestId('closebtn')
        fireEvent.click(closebtn)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
      
    })
})





test("search box should accept text", () => {
    const {getByTestId} = render(<ListAccount/>);
    const searchInputNode = getByTestId('searchAccount');
    expect(searchInputNode.value).toMatch("");
    fireEvent.change(searchInputNode, {target:{value:'Ja'}});
    expect (searchInputNode.value).toMatch("Ja")
})

