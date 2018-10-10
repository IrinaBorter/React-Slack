import { fromJS, Record } from 'immutable';

import * as channelActions from '../actions/channel';

const initialState = Record({
  channels: [],
  activeChannel: null,
  loading: false,
  error: false,
});

const channel = (state = initialState, action) => {
  switch (action.type) {
    case channelActions.ADD_CHANNEL: {
      return state.setIn(['channels'], fromJS([...state.channels, action.payload.channel]));
    }
    case channelActions.SET_ACTIVE_CHANNEL: {
      return state.setIn(['activeChannel'], fromJS(action.payload.channel));
    }
    case channelActions.LOAD_CHANNELS_STARTED: {
      return state.setIn(['loading'], true);
    }
    case channelActions.LOAD_CHANNELS_SUCCEEDED: {
      return state.setIn(['loading'], false).setIn(['channels'], fromJS(action.payload.channels));
    }
    case channelActions.LOAD_CHANNELS_FAILED: {
      return state.setIn(['error'], true).setIn(['loading'], false);
    }
    default:
      return state
  }
};

export default channel;
