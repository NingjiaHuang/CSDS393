import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import GeneTable from '../GeneTable';
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect';
afterEach(() =>{
    cleanup();
})


test('calcultae button ', () => {
    const mockOnClick = jest.fn()
    const { getByTestId } = render(<GeneTable onClick={mockOnClick()} />)
    const clickIndicator = getByTestId('calBtn')
    fireEvent.click(clickIndicator)
    expect(mockOnClick).toHaveBeenCalledTimes(1)

})


test("Test with mock bloodtype sire", () => {
    render(<GeneTable />);
    expect(screen.getByText("You selected bs N/N")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("bs"), {
      target: { value: "N/b" },
    });
    expect(screen.getByText("You selected bs N/b")).toBeInTheDocument();
  });

  test("Test with mock bloodtype dam", () => {
    render(<GeneTable />);
    expect(screen.getByText("You selected bd N/N")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("bd"), {
      target: { value: "N/b" },
    });
    expect(screen.getByText("You selected bd N/b")).toBeInTheDocument();
  });

  test("Test with mock pdk sire", () => {
    render(<GeneTable />);
    expect(screen.getByText("You selected ps N/N")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("ps"), {
      target: { value: "N/P" },
    });
    expect(screen.getByText("You selected ps N/P")).toBeInTheDocument();
  });

  test("Test with mock pdk dam", () => {
    render(<GeneTable />);
    expect(screen.getByText("You selected pd N/N")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("pd"), {
      target: { value: "N/P" },
    });
    expect(screen.getByText("You selected pd N/P")).toBeInTheDocument();
  });

  test("Test with mock hcm sire", () => {
    render(<GeneTable />);
    expect(screen.getByText("You selected hs N/N")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("hs"), {
      target: { value: "N/HCMrd" },
    });
    expect(screen.getByText("You selected hs N/HCMrd")).toBeInTheDocument();
  });

  test("Test with mock hcm dam", () => {
    render(<GeneTable />);
    expect(screen.getByText("You selected hd N/N")).toBeInTheDocument();
    fireEvent.change(screen.getByTestId("hd"), {
      target: { value: "N/HCMrd" },
    });
    expect(screen.getByText("You selected hd N/HCMrd")).toBeInTheDocument();
  });