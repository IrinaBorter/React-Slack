import axios from 'axios';

export function getMessages(channelId) {
  return axios({
    method: 'get',
    url: `http://localhost:3000/api/messages/channels/${channelId}`,
  });
}

export function postMessage({ content, author: { id } }) {
  return axios({
    method: 'post',
    url: `http://localhost:3000/api/messages`,
    data: { content, authorId: id, channelId: '1' },
  });
}
