import { combineReducers } from 'redux';
import workspace from './workspace';
import channel from './channel';
import chat from './chat';

export default combineReducers({ workspace, channel, chat });
