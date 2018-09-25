import { fromJS, Record } from 'immutable';

import * as workspaceActions from '../actions/workspace';

const initialState = Record({
  workspaces: [],
  activeWorkspace: null,
  loading: false,
  error: false,
});

const workspace = (state = initialState, action) => {
  switch (action.type) {
    case workspaceActions.ADD_WORKSPACE: {
      return state.setIn(['workspaces'], fromJS([...state.workspaces, action.payload.workspace]));
    }
    case workspaceActions.SET_ACTIVE_WORKSPACE: {
      return state.setIn(['activeWorkspace'], fromJS(action.payload.workspace));
    }
    case workspaceActions.LOAD_WORKSPACES_STARTED: {
      return state.setIn(['loading'], true);
    }
    case workspaceActions.LOAD_WORKSPACES_SUCCEEDED: {
      return state.setIn(['loading'], false).setIn(['workspaces'], fromJS(action.payload.workspace));
    }
    case workspaceActions.LOAD_WORKSPACES_FAILED: {
      return state.setIn(['error'], true).setIn(['loading'], false);
    }
    default:
      return state
  }
};

export default workspace;
