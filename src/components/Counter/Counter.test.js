import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Counter from './Counter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders Counter without crashing', () => {
  const wrapper = shallow(<Counter />);
  console.log(wrapper.debug()); // Debug returns the Counter DOM as string :)
  const titleCounter = wrapper.find("[data-test='title-count']");
  console.log(`titleCounter:`, titleCounter.debug());
  expect(wrapper).toBeTruthy();
  expect(titleCounter.length).toBe(1);
});

test('renders increment button', () => {});

test('renders decrement button', () => {});

test('renders counter display', () => {});

test('counter starts at 0', () => {});

test('clicking button INCREMENTS counter display', () => {});
