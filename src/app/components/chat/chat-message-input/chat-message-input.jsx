import React from 'react';

import style from './chat-message-input.scss';

class ChatMessageInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };

    this.input = React.createRef();
  }

  render () {
    return (
      <form className={style.chatMessageContainer} onSubmit={this.handleClick}>
        <input type="text"
               placeholder="Type here..."
               className={style.chatMessage}
               required
               name="message"
               value={this.state.message}
               onChange={this.handleChange}
               ref={this.input}
        />
        <button type="submit"
                className={style.sendButton}
                disabled={this.state.message.length === 0}
                title={this.state.message.length === 0 ? 'Message cannot be empty' : ''}
        >Send</button>
      </form>
    );
  }

  handleChange = (event) => {
    this.setState({ message: event.target.value });
  };

  handleClick = (event) => {
    event.preventDefault();
    this.props.onMessageSend(this.state.message);
    this.setState({ message: '' });
  };
}

export default ChatMessageInput;
