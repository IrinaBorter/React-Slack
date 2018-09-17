import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { loadChannelsStarted } from '../../store/actions/channel';

import style from './channels.scss';

class Channels extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadChannelsStarted();
  }

  render() {
    const { channels } = this.props;

    return ([
        <div className={style.channelsContainer}>
          <h3 className={style.channelsTabHeader}>Channels</h3>
          {
            channels.map(channel => {
              return (
                <Link to={`${this.props.match.url}/channels/${channel.id}`} key={channel.id}>
                  <div className={style.channelItem}>{channel.name}</div>
                </Link>
              );
            })
          }
        </div>,
        renderRoutes(this.props.route.routes),
    ]);
  }
}

const mapStateToProps = (state) => ({
  channels: state.channel.channels,
});

const mapActionsToProps = { loadChannelsStarted };

export default connect(mapStateToProps, mapActionsToProps)(Channels);
