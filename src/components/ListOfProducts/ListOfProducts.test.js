// Cannot read this directory :/
import ListOfProducts from './ListOfProducts';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// Doesnt work, cannot find the module
test('renders ListOfProducts without crashing', () => {
  const listOfProducts = shallow(<ListOfProducts />); // Creates a -fake- instance of the Virtual DOM called shallow wrapper for the component passed
  console.log(`listOfProducts`, listOfProducts.text());
  expect(listOfProducts.text().length).toBeTruthy();
});
