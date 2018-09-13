import * as chatActions from '../actions/chat';

const initialState = {
  chatName: 'React Chat',
  messages: [],
  loading: false,
  error: false,
};

const chat = (state = initialState, action) => {
  switch (action.type) {
    case chatActions.LOAD_MESSAGES_STARTED: {
      return { ...state, loading: true };
    }
    case chatActions.LOAD_MESSAGES_SUCCEEDED: {
      return { ...state, messages: action.payload.messages, loading: false };
    }
    case chatActions.LOAD_MESSAGES_FAILED: {
      return { ...state, error: true, loading: false };
    }
    case chatActions.PUSH_MESSAGE_STARTED: {
      return { ...state, loading: true };
    }
    case chatActions.PUSH_MESSAGE_SUCCEEDED: {
      return { ...state, messages: action.payload.messages, loading: false };
    }
    case chatActions.PUSH_MESSAGE_FAILED: {
      return { ...state, error: true, loading: false };
    }
    default:
      return state
  }
};

export default chat;
