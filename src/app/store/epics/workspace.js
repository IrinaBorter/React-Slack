import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';

import * as workspaceActions from '../actions/workspace';
import { getWorkspaces } from '../../services/workspace';

const fetchWorkspaces = action$ => {
  return action$.ofType(workspaceActions.LOAD_WORKSPACES_STARTED)
    .switchMap(({ payload: { memberId } }) => {
      return getWorkspaces(memberId)
        .map(response => workspaceActions.loadWorkspacesSucceeded(response.data))
        .catch((error) => of(workspaceActions.loadWorkspacesFailed(error)));
    });
};

export default fetchWorkspaces;
