import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Scroll from '../../components/Scroll';

it('Renders Scroll component', () => {
  expect(shallow(<Scroll />)).toMatchSnapshot();
})
