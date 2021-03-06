export const LOAD_CHANNELS_STARTED = 'LOAD_CHANNELS_STARTED';
export const LOAD_CHANNELS_SUCCEEDED = 'LOAD_CHANNELS_SUCCEEDED';
export const LOAD_CHANNELS_FAILED = 'LOAD_CHANNELS_FAILED';
export const ADD_CHANNEL = 'ADD_CHANNEL';
export const SET_ACTIVE_CHANNEL = 'SET_ACTIVE_CHANNEL';

export const loadChannelsStarted = (workspaceId) => ({
  type: LOAD_CHANNELS_STARTED,
  payload: { workspaceId },
});

export const loadChannelsSucceeded = (channels) => ({
  type: LOAD_CHANNELS_SUCCEEDED,
  payload: { channels },
});

export const loadChannelsFailed = (error) => ({
  type: LOAD_CHANNELS_FAILED,
  payload: { error },
});

export const addChannel = channel => ({
  type: ADD_CHANNEL,
  payload: { channel },
});

export const setActiveChannel = channel => ({
  type: SET_ACTIVE_CHANNEL,
  payload: { channel },
});
