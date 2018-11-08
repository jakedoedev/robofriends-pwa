import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Header from '../../components/Header';

it('Renders Header component', () => {
  expect(shallow(<Header />)).toMatchSnapshot();
})

it('Renders Header component', () => {
  let wrapper = shallow(<Header />);
  const shouldUpdate = wrapper.instance().shouldComponentUpdate();

  expect(shouldUpdate).toEqual(false);
})
