import React from 'react';
import { connect } from 'react-redux';

import { pushMessageStarted, loadMessagesStarted } from '../../store/actions/chat';

import style from './chat.scss';

import ChatHeader from './chat-header/chat-header';
import ChatMessagesList from './chat-messages-list/chat-messages-list';
import ChatMessageInput from './chat-message-input/chat-message-input';

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { channelId } = this.props.match.params;

    this.props.loadMessagesStarted(channelId);
  }

  componentDidUpdate(prevProps) {
    const { channelId } = this.props.match.params;
    const prevChannelId = prevProps.match.params.channelId;

    if (channelId !== prevChannelId) {
      this.props.loadMessagesStarted(channelId);
    }
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

  sendMessage = (content) => {
    const message = {
      content,
      time: new Date().toISOString(),
      author: {
        id: '1',
        name: 'Iryna',
      },
      channelId: this.props.match.params.channelId,
    };

    this.props.pushMessageStarted(message);
  };
}

const mapStateToProps = (state) => ({
  messages: state.chat.messages,
  title: state.chat.chatName,
});

const mapActionsToProps = {
  pushMessageStarted,
  loadMessagesStarted,
};

export default connect(mapStateToProps, mapActionsToProps)(Chat);
