import axios from 'axios';
import { fromPromise } from 'rxjs/observable/fromPromise';

export function getMessages(channelId) {
  return fromPromise(axios({
    method: 'get',
    url: `http://localhost:3000/api/messages/channels/${channelId}`,
  }));
}

export function postMessage({ content, author: { id } }) {
  return fromPromise(axios({
    method: 'post',
    url: `http://localhost:3000/api/messages`,
    data: { content, authorId: id, channelId: '1' },
  }));
}
