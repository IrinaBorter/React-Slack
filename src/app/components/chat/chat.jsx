import React from 'react';
import { connect } from 'react-redux';

import { pushMessage, fetchMessages } from '../../store/actions/chat';

import style from './chat.scss';

import ChatHeader from './chat-header/chat-header';
import ChatMessagesList from './chat-messages-list/chat-messages-list';
import ChatMessageInput from './chat-message-input/chat-message-input';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    const { title, messages } = this.props;

    return (
      <div className={style.chatContainer}>
        <ChatHeader title={title}/>
        <ChatMessagesList messages={messages} />
        <ChatMessageInput onMessageSend={this.sendMessage}/>
      </div>
    );
  }

  sendMessage(content) {
    const message = {
      content,
      time: new Date().toISOString(),
      author: {
        id: '1',
        name: 'Iryna',
      },
    };

    console.log(message);
    this.props.pushMessage(message);
  }
}

const mapStateToProps = (state) => ({
  messages: state.chat.messages,
  title: state.chat.chatName,
});

const mapActionsToProps = {
  pushMessage,
  fetchMessages,
};

export default connect(mapStateToProps, mapActionsToProps)(Chat);
