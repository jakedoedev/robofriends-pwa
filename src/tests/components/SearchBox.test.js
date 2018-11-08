import React from 'react';
import {shallow, mount, render} from 'enzyme';
import SearchBox from '../../components/SearchBox';

it('Renders SearchBox component', () => {
  expect(shallow(<SearchBox />)).toMatchSnapshot();
})
