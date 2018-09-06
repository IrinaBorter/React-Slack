import React from 'react';

import style from './chat-header.scss';

class ChatHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className={style.chatHeader}>
        <h2 className={style.chatHeaderTitle}>{this.props.title}</h2>
      </header>
    );
  }
}

export default ChatHeader;
