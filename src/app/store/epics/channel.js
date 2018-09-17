import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';

import * as channelActions from '../actions/channel';
import { getChannels } from '../../services/channel';

const fetchChannels = action$ => {
  return action$.ofType(channelActions.LOAD_CHANNELS_STARTED)
    .switchMap(({ payload: { workspaceId } }) => {
      return getChannels(workspaceId)
        .map(response => channelActions.loadChannelsSucceeded(response.data))
        .catch((error) => of(channelActions.loadChannelsFailed(error)));
    });
};

export default fetchChannels;
