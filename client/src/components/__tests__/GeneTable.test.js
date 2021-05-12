import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import GeneTable from '../GeneTable';

import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';

afterEach(() =>{
    cleanup();
})


test('matches snapshot of Gene table', () =>{
    const tree = renderer.create(<GeneTable/>).toJSON();
    expect(tree).toMatchSnapshot();
})


describe("User clicks", () => {
    it('calculate button should be clicked ', () => {
        const mockOnClick = jest.fn()
        const { getByTestId } = render(<GeneTable onClick={mockOnClick()} />)
        
        const clickIndicator = getByTestId('calBtn')
    
        fireEvent.click(clickIndicator)
    
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    
    })
    });
    