import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/index';
import rootEpic from './epics/index';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware)),
);
