import { fromJS, Record } from 'immutable';

import * as chatActions from '../actions/chat';

const initialState = Record({
  chatName: 'React Chat',
  messages: [],
  loading: false,
  error: false,
});

const chat = (state = initialState, action) => {
  switch (action.type) {
    case chatActions.LOAD_MESSAGES_STARTED: {
      return state.setIn(['loading'], true);
    }
    case chatActions.LOAD_MESSAGES_SUCCEEDED: {
      return state.setIn(['loading'], false).setIn(['messages'], fromJS(action.payload.messages));
    }
    case chatActions.LOAD_MESSAGES_FAILED: {
      return state.setIn(['error'], true).setIn(['loading'], false);
    }
    case chatActions.PUSH_MESSAGE_STARTED: {
      return state.setIn(['loading'], true);
    }
    case chatActions.PUSH_MESSAGE_SUCCEEDED: {
      return state.setIn(['loading'], false).setIn(['messages'], fromJS(action.payload.messages));
    }
    case chatActions.PUSH_MESSAGE_FAILED: {
      return state.setIn(['error'], true).setIn(['loading'], false);
    }
    default:
      return state
  }
};

export default chat;
