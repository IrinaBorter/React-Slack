import axios from 'axios';

export function getWorkspaces() {
  return axios({
    method: 'get',
    url: 'http://localhost:3000/api/workspaces/member/1',
  });
}
