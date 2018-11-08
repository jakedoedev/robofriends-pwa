import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from '../constants';

import * as reducers from '../reducers';

describe('searchRobots', () => {
  const initialStateSearch = {
    'searchField': ''
  }
  it('Returns the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch);
  });

  it('Returns the CHANGE_SEARCH_FIELD result', () => {
    expect(reducers.searchRobots(initialStateSearch, {
      type: CHANGE_SEARCH_FIELD,
      payload: 'abc'
    })).toEqual({
      searchField: 'abc'
    });
  });

});
describe('requestRobots', () => {
  const initialStateRobots = {
    robots: [],
    isPending: false,
  }
  it('Returns the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('Returns the REQUEST_ROBOTS_PENDING result', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_PENDING
    })).toEqual({
      isPending: true,
      robots: []
    });
  });

  it('Returns the REQUEST_ROBOTS_SUCCESS result', () => {
    const robot = {
      id: '1',
      name: 'robotest',
      email: 'robotest@gmail.com'
    };

    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [robot]
    })).toEqual({
      robots: [robot],
      isPending: false,
    });
  });

  it('Returns the REQUEST_ROBOTS_FAILED result', () => {
    const errorInstance = 'Error occured on line 1';

    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_FAILED,
      payload: errorInstance
    })).toEqual({
      error: errorInstance,
      isPending: false,
      robots: []
    });
  });

});
