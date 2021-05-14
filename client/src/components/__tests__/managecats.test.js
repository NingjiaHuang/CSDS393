import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import AddBCat, {onChange} from '../ManageCats/AddBCat';
import AddPCat from '../ManageCats/AddPCat';
import AddKitten from '../ManageCats/AddKitten';
import ListCat from '../ManageCats/ListCat';
import AddCat from '../ManageCats/AddCat'
import { shallow, configure  } from 'enzyme';
import {Modal,form} from 'react-bootstrap';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';
import ManageCatsBreeder from '../ManageCatsBreeder';
import ManageCatsParent from '../ManageCatsParent';
import Adapter from 'enzyme-adapter-react-16';
import EditCat from '../ManageCats/EditCat';

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
    const tree = renderer.create(<ListCat/>).toJSON();
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

    test("search box should accept text", () => {
        const {getByTestId} = render(<ListCat/>);
        const searchInputNode = getByTestId('searchCat');
        expect(searchInputNode.value).toMatch("");
        fireEvent.change(searchInputNode, {target:{value:'Ja'}});
        expect (searchInputNode.value).toMatch("Ja")
    })

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
        const cat = {certi_num:"111", cat_name:"test", title:"admin", cat_reg_name:"test@test.com", sale_status:"NFS"}
        const { getByTestId } = render(<EditCat cat={cat} onClick={mockOnClick()} />)
        const clickIndicator = getByTestId('showbtn')
        fireEvent.click(clickIndicator)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    })

    
    

