import React from 'react';
import { connect } from 'react-redux';

import { fetchChannels } from '../../store/actions/channel';

import style from './channels.scss';

class Channels extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {
    const { channels } = this.props;

    return (
      <div className={style.channelsContainer}>
        <h3 className={style.channelsTabHeader}>Channels</h3>
        {
          channels.map(channel => <div className={style.channelItem} key={channel.id}>{channel.name}</div>)
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  channels: state.channel.channels,
});

const mapActionsToProps = { fetchChannels };

export default connect(mapStateToProps, mapActionsToProps)(Channels);
