import * as workspaceActions from '../actions/workspace';

const initialState = {
  workspaces: [],
  activeWorkspace: null,
  loading: false,
  error: false,
};

const workspace = (state = initialState, action) => {
  switch (action.type) {
    case workspaceActions.ADD_WORKSPACE: {
      return { ...state, workspaces: [...state.workspaces, action.payload.workspace] };
    }
    case workspaceActions.SET_ACTIVE_WORKSPACE: {
      return { ...state, activeWorkspace: action.payload.workspace };
    }
    case workspaceActions.LOAD_WORKSPACES_STARTED: {
      return { ...state, loading: true };
    }
    case workspaceActions.LOAD_WORKSPACES_SUCCEEDED: {
      return { ...state, ...action.payload, loading: false };
    }
    case workspaceActions.LOAD_WORKSPACES_FAILED: {
      return { ...state, error: true, loading: false };
    }
    default:
      return state
  }
};

export default workspace;
