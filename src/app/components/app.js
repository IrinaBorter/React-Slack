import React from 'react';

import Workspaces from './workspaces/workspaces';
import Channels from './channels/channels';
import Chat from './chat/chat';

import style from './app.scss';

class App extends React.Component {
  render() {
    return (
      <div className={style.appContainer}>
        <Workspaces />
        <Channels />
        <Chat />
      </div>
    );
  }
}

export default App;
