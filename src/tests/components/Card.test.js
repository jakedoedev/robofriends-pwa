import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Card from '../../components/Card';

it('Renders card component', () => {

  // expect(shallow(<Card />).length).toEqual(1);
  expect(shallow(<Card />)).toMatchSnapshot();
})

