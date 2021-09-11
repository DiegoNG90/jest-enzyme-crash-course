import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders App without crashing', () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.debug()); // Debug returns the DOM as string :)
  expect(wrapper).toBeTruthy();
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders hello world and edit', () => {
//   render(<App />);
//   const hello = screen.getByText(/Hello world/i);
//   const edit = screen.getByText(/Edit/i);
//   expect(hello).toBeInTheDocument();
//   expect(edit).toBeInTheDocument();
// });
