import axios from 'axios';
import { fromPromise } from 'rxjs/observable/fromPromise';

export function getChannels(workspaceId) {
  return fromPromise(axios({
    method: 'get',
    url: `http://localhost:3000/api/channels/workspace/${workspaceId}`,
  }));
}
