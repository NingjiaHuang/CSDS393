import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import AddBCat, {onChange} from '../ManageCats/AddBCat';
import AddPCat from '../ManageCats/AddPCat';
import AddKitten from '../ManageCats/AddKitten';
import AddCat from '../ManageCats/AddCat'
import { shallow, configure  } from 'enzyme';
import {Modal,form} from 'react-bootstrap';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';
import ManageCatsBreeder from '../ManageCatsBreeder';
import ManageCatsParent from '../ManageCatsParent';
import Adapter from 'enzyme-adapter-react-16';
import EditCat from '../ManageCats/EditCat';
import ListCatBreeder from '../ManageCats/ListCatBreeder';
import ListCatParent from '../ManageCats/ListCatParent';

configure({ adapter: new Adapter() })
afterEach(() =>{
    cleanup();
})

test('matches snapshot of add cat', () =>{
    const tree = renderer.create(<AddCat/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of add breeding cat', () =>{
    const tree = renderer.create(<AddBCat/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of add pregnant cat', () =>{
    const tree = renderer.create(<AddPCat/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of add a kitten', () =>{
    const tree = renderer.create(<AddKitten/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of list cats', () =>{
    const tree = renderer.create(<ListCatBreeder/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of list cats', () =>{
    const tree = renderer.create(<ListCatParent/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of manage cats of breeder', () =>{
    const tree = renderer.create(<ManageCatsBreeder/>).toJSON();
    expect(tree).toMatchSnapshot();
})

test('matches snapshot of veiw cats of parent', () =>{
    const tree = renderer.create(<ManageCatsParent/>).toJSON();
    expect(tree).toMatchSnapshot();
})


describe("Breeder clicks", () => {
    it('add breeding cat button ', () => {
        const mockOnClick = jest.fn()
        const { getByTestId } = render(<AddBCat onClick={mockOnClick()} />)
        const clickIndicator = getByTestId('showBtn')
        fireEvent.click(clickIndicator)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    
    })

    it('add preagnant cat button ', () => {
        const mockOnClick = jest.fn()
        const { getByTestId } = render(<AddPCat onClick={mockOnClick()} />)
        const clickIndicator = getByTestId('showBtn')
        fireEvent.click(clickIndicator)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    
    })

    it('add kitten button ', () => {
        const mockOnClick = jest.fn()
        const { getByTestId } = render(<AddKitten onClick={mockOnClick()} />)
        const clickIndicator = getByTestId('showBtn')
        fireEvent.click(clickIndicator)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    
    })
    });

    test('add breeding cat renders react-modal', () => {
        const wrapper = shallow(<AddBCat />);
        expect(wrapper.find('Modal')).toHaveLength(1);
      });

      
      test('add preagnant cat renders react-modal', () => {
        const wrapper = shallow(<AddPCat />);
        expect(wrapper.find('Modal')).toHaveLength(1);
      });
      test('add kitten renders react-modal', () => {
        const wrapper = shallow(<AddKitten />);
        expect(wrapper.find('Modal')).toHaveLength(1);
      });

      test('click edit button ', () => {
        const mockOnClick = jest.fn()
        const mockonsubmit = jest.fn()
        const cat = {certi_num:"111", cat_name:"test", title:"admin", cat_reg_name:"test@test.com", sale_status:"NFS"}
        const { getByTestId, getByLabelText } = render(<EditCat cat={cat} onClick={mockOnClick()} onSubnmit = {mockonsubmit}/>)
        const clickIndicator = getByTestId('showbtn')
        //open the modal
        fireEvent.click(clickIndicator)
        expect(mockOnClick).toHaveBeenCalledTimes(1)

        //edit the modal form
        const cert = getByLabelText("Certificate number:");
        const catname = getByLabelText("Cat name:")
        const title = getByLabelText("Title:")
        const regname = getByLabelText("Cat registered name:")

        fireEvent.change(cert, {target:{value:"111"}})
        fireEvent.change(catname, {target:{value:"test"}})
        fireEvent.change(title, {target:{value:"parent"}})
        fireEvent.change(regname, {target:{value:"test"}})

        expect(cert.value).toMatch("111")
        expect(catname.value).toMatch("test")
        expect(title.value).toMatch("parent")
        expect(regname.value).toMatch("test")

        //close the modal
        const closebtn = getByTestId('closebtn')
        fireEvent.click(closebtn)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    })


    test("search box should accept text", () => {
        const {getByTestId} = render(<ListCatBreeder/>);
        const searchInputNode = getByTestId('searchCat');
        expect(searchInputNode.value).toMatch("");
        fireEvent.change(searchInputNode, {target:{value:'Ja'}});
        expect (searchInputNode.value).toMatch("Ja")
    })


    test("search box should accept text", () => {
        const {getByTestId} = render(<ListCatParent/>);
        const searchInputNode = getByTestId('searchCat');
        expect(searchInputNode.value).toMatch("");
        fireEvent.change(searchInputNode, {target:{value:'Ja'}});
        expect (searchInputNode.value).toMatch("Ja")
    })


    test('click add breeding cat button ', () => {
        const mockOnClick = jest.fn()
        const mockonsubmit = jest.fn()
        const { getByTestId, getByLabelText } = render(<AddBCat onClick={mockOnClick()} onsubmit={mockonsubmit}/>)
        const clickIndicator = getByTestId('showBtn')
        //open the modal
        fireEvent.click(clickIndicator)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    
        //edit the modal form
        const cattery = getByLabelText("Current owner cattery name:");
        const owner = getByLabelText("Current owner:")
        const cert = getByLabelText("Certificate number:")
        const title = getByLabelText("Title:")
        const reg_name = getByLabelText("Cat registered name:");
        const name = getByLabelText("Cat preferred name:")
        const breed = getByLabelText("Breed:")
        const sex = getByLabelText("Sex:")
        const birth = getByLabelText("Date of birth:");
        const sire = getByLabelText("Sire:")
        const dam = getByLabelText("Dam:")
        const sale = getByLabelText("Sale status:")
        const retire = getByLabelText("Retire status:")

    
        fireEvent.change(cattery, {target:{value:"test"}})
        fireEvent.change(owner, {target:{value:"test"}})
        fireEvent.change(cert, {target:{value:"1"}})
        fireEvent.change(title, {target:{value:"test"}})
        fireEvent.change(reg_name, {target:{value:"test"}})
        fireEvent.change(breed, {target:{value:"test"}})
        fireEvent.change(sex, {target:{value:"test"}})
        fireEvent.change(birth, {target:{value:"01/01/2021"}})
        fireEvent.change(sire, {target:{value:"test"}})
        fireEvent.change(dam, {target:{value:"test"}})
        fireEvent.change(sale, {target:{value:"test"}})
        fireEvent.change(retire, {target:{value:"test"}})
        fireEvent.change(name, {target:{value:"test"}})


    
        expect(cattery.value).toMatch("test")
        expect(owner.value).toMatch("test")
        expect(cert.value).toMatch("1")
        expect(title.value).toMatch("test")
        expect(reg_name.value).toMatch("test")
        expect(breed.value).toMatch("test")
        expect(sex.value).toMatch("test")
        expect(birth.value).toMatch("01/01/2021")
        expect(sire.value).toMatch("test")
        expect(dam.value).toMatch("test")
        expect(sale.value).toMatch("test")
        expect(retire.value).toMatch("test")
        expect(name.value).toMatch("test")
    
        //close the modal
        const closebtn = getByTestId('closebtn')
        fireEvent.click(closebtn)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
        fireEvent.click(clickIndicator)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    
    })


    test('click add kitten button ', () => {
        const mockOnClick = jest.fn()
        const mockonsubmit = jest.fn()
        const { getByTestId, getByLabelText } = render(<AddKitten onClick={mockOnClick()} onsubmit={mockonsubmit}/>)
        const clickIndicator = getByTestId('showBtn')
        //open the modal
        fireEvent.click(clickIndicator)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    
        //edit the modal form
        const cattery = getByLabelText("Current owner cattery name:");
        const owner = getByLabelText("Current owner:")
        const cert = getByLabelText("Certificate number:")
        const title = getByLabelText("Title:")
        const reg_name = getByLabelText("Cat registered name:");
        const name = getByLabelText("Cat preferred name:")
        const breed = getByLabelText("Breed:")
        const sex = getByLabelText("Sex:")
        const birth = getByLabelText("Date of birth:");
        const sire = getByLabelText("Sire:")
        const dam = getByLabelText("Dam:")
        const sale = getByLabelText("Sale status:")
        const weight = getByLabelText("Current weight:")
        const health = getByLabelText("Health condition:")
        const vac = getByLabelText("Vaccination condition:")

    
        fireEvent.change(cattery, {target:{value:"test"}})
        fireEvent.change(owner, {target:{value:"test"}})
        fireEvent.change(cert, {target:{value:"1"}})
        fireEvent.change(title, {target:{value:"test"}})
        fireEvent.change(reg_name, {target:{value:"test"}})
        fireEvent.change(breed, {target:{value:"test"}})
        fireEvent.change(sex, {target:{value:"test"}})
        fireEvent.change(birth, {target:{value:"01/01/2021"}})
        fireEvent.change(sire, {target:{value:"test"}})
        fireEvent.change(dam, {target:{value:"test"}})
        fireEvent.change(sale, {target:{value:"test"}})
        fireEvent.change(weight, {target:{value:"1"}})
        fireEvent.change(name, {target:{value:"test"}})
        fireEvent.change(health, {target:{value:"test"}})
        fireEvent.change(vac, {target:{value:"test"}})


    
        expect(cattery.value).toMatch("test")
        expect(owner.value).toMatch("test")
        expect(cert.value).toMatch("1")
        expect(title.value).toMatch("test")
        expect(reg_name.value).toMatch("test")
        expect(breed.value).toMatch("test")
        expect(sex.value).toMatch("test")
        expect(birth.value).toMatch("01/01/2021")
        expect(sire.value).toMatch("test")
        expect(dam.value).toMatch("test")
        expect(sale.value).toMatch("test")
        expect(health.value).toMatch("test")
        expect(name.value).toMatch("test")
        expect(weight.value).toMatch("1")
        expect(vac.value).toMatch("test")


    
        //close the modal
        const closebtn = getByTestId('closebtn')
        fireEvent.click(closebtn)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
        fireEvent.click(clickIndicator)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    
    })

    
    

