import React from 'react';

import style from './chat-message.scss';

class ChatMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoUrl: 'https://ca.slack-edge.com/T6HND6Y7P-U6HL83N3E-caff3f09c704-72',
    };
  }

  render () {
    return (
      <section className={style.chatMessageSection}>
        <img src={this.state.photoUrl} alt="Photo" className={style.chatMessagePhoto} />
          <div className={style.chatMessage}>
            <p>
              <a className={style.chatMessageAuthor}>{this.props.message.author.name}</a>
              <span className={style.chatMessageTime}>{this.props.message.time}</span>
            </p>
            <p>{this.props.message.content}</p>
          </div>
      </section>
    );
  }
}

export default ChatMessage;
