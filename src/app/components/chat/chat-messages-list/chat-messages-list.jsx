import React from 'react';

import style from './chat-messages-list.scss';

import ChatMessage from '../chat-message/chat-message';

class ChatMessagesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className={style.chatMessagesList}>
        {
          this.props.messages.map(message => <ChatMessage message={message} key={message.time} />)
        }
      </main>
    );
  }
}

export default ChatMessagesList;
