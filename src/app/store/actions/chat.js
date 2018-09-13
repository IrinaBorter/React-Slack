import { getMessages, postMessage } from '../../services/chat';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const LOAD_MESSAGES_STARTED = 'LOAD_MESSAGES_STARTED';
export const LOAD_MESSAGES_SUCCEEDED = 'LOAD_MESSAGES_SUCCEEDED';
export const LOAD_MESSAGES_FAILED = 'LOAD_MESSAGES_FAILED';
export const PUSH_MESSAGE_STARTED = 'PUSH_MESSAGE_STARTED';
export const PUSH_MESSAGE_SUCCEEDED = 'PUSH_MESSAGE_SUCCEEDED';
export const PUSH_MESSAGE_FAILED = 'PUSH_MESSAGE_FAILED';

export const loadMessagesStarted = () => ({
  type: LOAD_MESSAGES_STARTED,
  payload: null,
});

export const loadMessagesSucceeded = (messages) => ({
  type: LOAD_MESSAGES_SUCCEEDED,
  payload: { messages },
});

export const loadMessagesFailed = (error) => ({
  type: LOAD_MESSAGES_FAILED,
  payload: { error },
});

export const pushMessageStarted = (message) => ({
  type: PUSH_MESSAGE_STARTED,
  payload: { message },
});

export const pushMessageSucceeded = (messages) => ({
  type: PUSH_MESSAGE_SUCCEEDED,
  payload: { messages },
});

export const pushMessageFailed = (error) => ({
  type: PUSH_MESSAGE_FAILED,
  payload: { error },
});

export function fetchMessages() {
  return (dispatch) => {
    dispatch(loadMessagesStarted());

    return getMessages(1)
      .then((response) => {
        dispatch(loadMessagesSucceeded(response.data));
      })
      .catch(error => {
        dispatch(loadMessagesFailed(error));
      });
  };
}

export function pushMessage(message) {
  return (dispatch) => {
    dispatch(pushMessageStarted(message));

    return postMessage(message)
      .then(response => {
        dispatch(pushMessageSucceeded(response.data));
      })
      .catch(error => {
        dispatch(pushMessageFailed(error));
      });
  };
}
