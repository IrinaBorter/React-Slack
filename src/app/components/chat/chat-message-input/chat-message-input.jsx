import React from 'react';

import style from './chat-message-input.scss';

class ChatMessageInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };

    this.input = React.createRef();

    this.handleChange = this.handleChange.bind(this);
  }

  render () {
    return (
      <form className={style.chatMessageContainer}>
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
                disabled={this.state.message.length === 0}
                title={!this.state.message.length === 0 ? 'Message cannot be empty' : ''}
        >Send</button>
      </form>
    );
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default ChatMessageInput;
