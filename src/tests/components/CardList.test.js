import React from 'react';
import {shallow, mount, render} from 'enzyme';
import CardList from '../../components/CardList';

it('Renders CardList component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'Hohn Snow',
      username: 'johnsnow',
      email : 'john@gmail.com'
    }
  ]
  // expect(shallow(<CardList />).length).toEqual(1);
  expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})

