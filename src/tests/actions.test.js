import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from '../constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import nock from 'nock';
import * as actions from '../actions';

const mockStore = configureMockStore([thunkMiddleware]);

it('Creates an action to search', () => {
  const text = 'go';
  const action = {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };

  expect(actions.setSearchField(text)).toEqual(action);
})

it('Handles requesting robots REQUEST_ROBOTS_PENDING', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  const actionOut = {
    type: REQUEST_ROBOTS_PENDING
  };

  expect(action).toEqual([actionOut]);
});

it('Handles requesting robots REQUEST_ROBOTS_SUCCESS', () => {
  const store = mockStore();
  const robot = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
  }

  nock('https://jsonplaceholder.typicode.com')
  .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
  .persist()
  .get('/users')
  .reply(200, robot);

  return store.dispatch(actions.requestRobots())
    .then(() => {

      const expectedAction = [{
          type: REQUEST_ROBOTS_PENDING
        },
        {
          payload: robot,
          type: REQUEST_ROBOTS_SUCCESS
        }
      ];

      expect(store.getActions()).toEqual(expectedAction);
    });


});

it('Handles requesting robots REQUEST_ROBOTS_FAILED', () => {
  const store = mockStore();
  const errorInstance = {
    error: 'Error in line 1'
  }

  nock('https://jsonplaceholder.typicode.com')
  .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
  .get('/users')
  .replyWithError(errorInstance);

  return store.dispatch(actions.requestRobots())
    .then(() => {

      const expectedAction = [{
          type: REQUEST_ROBOTS_PENDING
        },
        {
          payload: errorInstance,
          type: REQUEST_ROBOTS_FAILED
        }
      ];

      expect(store.getActions()).toEqual(expectedAction);
    });


});
