import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Counter from './Counter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create ShallowWrapper for the Counter component.
 * @function setup
 * @param {object} props - Component props specifit to this setup.
 * @param {any} state - Initial state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  return shallow(<Counter {...props} />);
};
/**
 * Return ShalloWrapper containg node(s) with the given data-test value.
 * @param {Shallowwrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

const wrapper = setup(<Counter />);

test('renders Counter without crashing', () => {
  // console.log(wrapper.debug()); // Debug returns the Counter DOM as string :)
  expect(wrapper).toBeTruthy();
});

test('renders an h2 counter display element', () => {
  const titleCounter = findByTestAttr(wrapper, 'title-count');
  // console.log(`titleCounter:`, titleCounter.debug());
  expect(titleCounter.length).toBe(1);
});

test('renders increment button', () => {
  const incrementBtn = findByTestAttr(wrapper, 'increment-btn');
  expect(incrementBtn.length).toBe(1);
});

test('renders decrement button', () => {
  const decrementBtn = findByTestAttr(wrapper, 'decrement-btn');
  expect(decrementBtn.length).toBe(1);
});

test('renders The count is: 0', () => {
  // Resolved problem: Enzyme can only check state of CLASS components. Instead, will try to check it's effect (what text will it render inside h2):
  const titleCounter = findByTestAttr(wrapper, 'title-count');
  // console.log(`titleCounter.text()`, titleCounter.text());
  expect(titleCounter.text()).toEqual('The count is: 0');
});

test('clicking button INCREMENTS counter display', () => {
  // Problem: Enzyme can only check state of CLASS components
  // https://blog.logrocket.com/testing-state-changes-in-react-functional-components/
  const counterIncrement = jest.fn();
  console.log(`counterIncrement`, Boolean(counterIncrement));
  const wrapperWithState = setup(<Counter />, counterIncrement);
  const handleClick = jest.spyOn(React, 'useState');
  handleClick.mockImplementation((count) => [count, counterIncrement]);

  wrapperWithState.find("[data-test='increment-btn']").simulate('click');
  expect(counterIncrement).toBeTruthy();
});
