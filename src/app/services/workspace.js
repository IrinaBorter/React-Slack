import axios from 'axios';
import { Observable } from 'rxjs';

export function getWorkspaces(memberId) {
  return Observable.fromPromise(axios({
    method: 'get',
    url: `http://localhost:3000/api/workspaces/member/${memberId}`,
  }));
}
