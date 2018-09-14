import * as channelActions from '../actions/channel';

const initialState = {
  channels: [],
  activeChannel: null,
  loading: false,
  error: false,
};

const channel = (state = initialState, action) => {
  switch (action.type) {
    case channelActions.ADD_CHANNEL: {
      return { ...state, channels: [...state.channels, action.payload.channel] };
    }
    case channelActions.SET_ACTIVE_CHANNEL: {
      return { ...state, activeChannel: action.payload.channel };
    }
    case channelActions.LOAD_CHANNELS_STARTED: {
      return { ...state, loading: true };
    }
    case channelActions.LOAD_CHANNELS_SUCCEEDED: {
      return { ...state, ...action.payload, loading: false };
    }
    case channelActions.LOAD_CHANNELS_FAILED: {
      return { ...state, error: true, loading: false };
    }
    default:
      return state
  }
};

export default channel;
