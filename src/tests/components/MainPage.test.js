import React from 'react';
import {shallow, mount, render} from 'enzyme';
import MainPage from '../../components/MainPage';
import { wrap } from 'module';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage { ...mockProps} />);
})

it('Renders MainPage component', () => {
  // expect(shallow(<MainPage />).length).toEqual(1);
  expect(wrap).toMatchSnapshot();
})

it('Displays pending state', () => {
  const mockPropsFilter = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'Chris',
      email: 'chris@gmail.com'
    }],
    searchField: '',
    isPending: true
  }

  const wrapperFiltered = shallow(<MainPage { ...mockPropsFilter} />);
  expect(wrapperFiltered.instance().props.isPending).toEqual(true);
  expect(wrapperFiltered.html()).toEqual('<h1 class="tc"> Loading </h1>');
});

it('Filters robots correctly', () => {
  expect(wrapper.instance().filterRobots()).toEqual([]);

  const mockPropsFilter = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'Chris',
      email: 'chris@gmail.com'
    }],
    searchField: 'c',
    isPending: false
  }

  const wrapperFiltered = shallow(<MainPage { ...mockPropsFilter} />);
  expect(wrapperFiltered.instance().filterRobots()).toEqual([{
    id: 3,
    name: 'Chris',
    email: 'chris@gmail.com'
  }]);
});

it('Returns empty if not found', () => {
  const mockPropsFilter = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'Chris',
      email: 'chris@gmail.com'
    }],
    searchField: 'z',
    isPending: false
  }
  const filteredRobots = [];
  const wrapperFiltered = shallow(<MainPage { ...mockPropsFilter} />);
  expect(wrapperFiltered.instance().filterRobots()).toEqual(filteredRobots);
});
