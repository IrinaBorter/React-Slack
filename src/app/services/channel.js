import axios from 'axios';

export function getChannels(workspaceId) {
  return axios({
    method: 'get',
    url: `http://localhost:3000/api/channels/workspace/${workspaceId}`,
  });
}
