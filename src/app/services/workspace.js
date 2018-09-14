import axios from 'axios';
import { Observable } from 'rxjs';

export function getWorkspaces() {
  return Observable.fromPromise(axios({
    method: 'get',
    url: 'http://localhost:3000/api/workspaces/member/1',
  }));
}
