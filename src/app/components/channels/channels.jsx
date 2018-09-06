import React from 'react';

import style from './channels.scss';

class Channels extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      channels: [
        {
          id: '1',
          name: 'Channel 1',
        },
        {
          id: '2',
          name: 'Channel 2',
        },
      ],
    };
  }

  render() {
    return (
      <div className={style.channelsContainer}>
        <h3 className={style.channelsTabHeader}>Channels</h3>
        {
          this.state.channels.map(channel => <div className={style.channelItem} key={channel.id}>{channel.name}</div>)
        }
      </div>
    );
  }
}

export default Channels;
