import React from 'react';

import style from './chat.scss';

import ChatHeader from './chat-header/chat-header';
import ChatMessagesList from './chat-messages-list/chat-messages-list';
import ChatMessageInput from './chat-message-input/chat-message-input';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'React Chat',
      messages: [
        {
          content: 'bla bla message',
          time: '2017-08-01T17:24:39.000Z',
          author: {
            id: '1',
            name: 'Iryna',
          },
        },
        {
          content: 'again bla bla message',
          time: '2017-08-01T17:26:39.000Z',
          author: {
            id: '1',
            name: 'Iryna',
          },
        },
        {
          content: 'and again bla bla message',
          time: '2017-08-01T17:30:39.000Z',
          author: {
            id: '1',
            name: 'Iryna',
          },
        },
      ],
    };
  }

  render() {
    return (
      <div className={style.chatContainer}>
        <ChatHeader title={this.state.title}/>
        <ChatMessagesList messages={this.state.messages} />
        <ChatMessageInput />
      </div>
    );
  }
}

export default Chat;
