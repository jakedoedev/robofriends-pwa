import React from 'react';
import {shallow, mount, render} from 'enzyme';
import CounterButton from '../../components/CounterButton';

it('Renders CounterButton component', () => {
  const mockColor = 'red';

  // expect(shallow(<CounterButton />).length).toEqual(1);
  expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot();
})

it('Increments correct counter value', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor}/>);

  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  expect(wrapper.state()).toEqual({ count: 2 });
  wrapper.find('[id="counter"]').simulate('keypress');
  expect(wrapper.state()).toEqual({ count: 2 });

  wrapper.instance().updateCount()
  expect(wrapper.state()).toEqual({ count: 3 });
})

it('Displays the correct color', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor}/>);
  expect(wrapper.props().color).toEqual('red');
});

it('Rerenders update for counter click only', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor}/>);

  const shouldUpdate = wrapper.instance().shouldComponentUpdate({}, {count: 1});
  expect(shouldUpdate).toBe(true);

  wrapper.find('[id="counter"]').simulate('click');
  const shouldUpdate2 = wrapper.instance().shouldComponentUpdate({}, {count: 1});
  expect(shouldUpdate2).toBe(false);
});
