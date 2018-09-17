import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';

import * as chatActions from '../actions/chat';
import { getMessages, postMessage } from '../../services/chat';

const fetchChats = action$ => {
  return action$.ofType(chatActions.LOAD_MESSAGES_STARTED)
    .switchMap(({ payload: { channelId } }) => {
      return getMessages(channelId)
        .map(response => chatActions.loadMessagesSucceeded(response.data))
        .catch((error) => of(chatActions.loadMessagesFailed(error)));
    });
};

const pushMessage = action$ => {
  return action$.ofType(chatActions.PUSH_MESSAGE_STARTED)
    .switchMap(({ payload: { message } }) => {
      return postMessage(message)
        .map(response => chatActions.pushMessageSucceeded(response.data))
        .catch(error => of(chatActions.pushMessageFailed(error)));
    });
};

export default [fetchChats, pushMessage];
