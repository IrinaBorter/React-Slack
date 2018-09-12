export const FETCH_WORKSPACES = 'FETCH_WORKSPACES';
export const LOAD_WORKSPACES_STARTED = 'LOAD_WORKSPACES_STARTED';
export const LOAD_WORKSPACES_SUCCEEDED = 'LOAD_WORKSPACES_SUCCEEDED';
export const LOAD_WORKSPACES_FAILED = 'LOAD_WORKSPACES_FAILED';
export const ADD_WORKSPACE = 'ADD_WORKSPACE';
export const SET_ACTIVE_WORKSPACE = 'SET_ACTIVE_WORKSPACE';
export const INCLUDE_MEMBER_TO_WORKSPACE = 'INCLUDE_MEMBER_TO_WORKSPACE';
export const EXCLUDE_MEMBER_FROM_WORKSPACE = 'EXCLUDE_MEMBER_FROM_WORKSPACE';

export const fetchWorkspaces = () => ({
  type: FETCH_WORKSPACES,
  payload: null,
});

export const loadWorkspacesStarted = () => ({
  type: LOAD_WORKSPACES_STARTED,
  payload: null,
});

export const loadWorkspacesSucceeded = (workspaces) => ({
  type: LOAD_WORKSPACES_SUCCEEDED,
  payload: { workspaces },
});

export const loadWorkspacesFailed = (error) => ({
  type: LOAD_WORKSPACES_FAILED,
  payload: { error },
});

export const addWorkspace = workspace => ({
  type: ADD_WORKSPACE,
  payload: { workspace },
});

export const setWorkspace = workspace => ({
  type: SET_ACTIVE_WORKSPACE,
  payload: { workspace },
});

export const includeMemeberToWorkspace = (member) => ({
  type: INCLUDE_MEMBER_TO_WORKSPACE,
  payload: { member },
});

export const excludeMemberToWorkspace = (member) => ({
  type: EXCLUDE_MEMBER_FROM_WORKSPACE,
  payload: { member },
});
