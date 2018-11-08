import React from 'react';
import {shallow, mount, render} from 'enzyme';
import ErrorBoundry from '../../components/ErrorBoundry';

it('Renders ErrorBoundry component', () => {

  // expect(shallow(<ErrorBoundry />).length).toEqual(1);
  expect(shallow(<ErrorBoundry />)).toMatchSnapshot();
})

it('Renders error when exists', () => {
  let wrapper = shallow(<ErrorBoundry />);
  wrapper.setState({hasError: true});

  expect(wrapper.state()).toEqual({ hasError: true});
})

it('Renders error when exists', () => {
  let wrapper = shallow(<ErrorBoundry />);

  wrapper.instance().componentDidCatch({}, {});

  expect(wrapper.state()).toEqual({ hasError: true});
})
