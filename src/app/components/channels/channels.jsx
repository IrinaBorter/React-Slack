import React from 'react';
import { connect } from 'react-redux';

import { loadChannelsStarted } from '../../store/actions/channel';

import style from './channels.scss';
import {Link} from "react-router-dom";
import {renderRoutes} from "react-router-config";

class Channels extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadChannelsStarted();
  }

  render() {
    const { channels } = this.props;

    return (
      <div className={style.channelsContainer}>
        <h3 className={style.channelsTabHeader}>Channels</h3>
        {
          channels.map(channel => {
            return (
              <Link to={`/channels/${channel.id}`}>
                <div className={style.channelItem} key={channel.id}>{channel.name}</div>
              </Link>
            );
          })
        }
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  channels: state.channel.channels,
});

const mapActionsToProps = { loadChannelsStarted };

export default connect(mapStateToProps, mapActionsToProps)(Channels);
