import { combineEpics } from 'redux-observable';
import workspace from './workspace';
import channel from './channel';
import chat from './chat';

export default combineEpics(workspace, channel, ...chat);
