import React, {Component} from 'react';

class MessageList extends Component {
  render() {
    let typingText = "";
    if(this.props.typing.length > 1) {
      let typers = this.props.typing.slice(0, this.props.typing.length-1).join(", ") + " and " + this.props.typing[this.props.typing.length-1];
      typingText = typers + " are typing...";
    }
    else if(this.props.typing.length > 0) {
      typingText = this.props.typing + " is typing...";
    }
    return (
      <div>
        <ol className='message-list'>
          {this.props.messages.map((message, index) => {
            const messageClass = message.userId !== this.props.userId ? 'is-response' : '';
            return (
              <li key={`message-${index}`} className={`message-item ${messageClass}`} >
                <div className={`message-text ${messageClass}`}>
                  <p>
                    {message.text}
                  </p>
                  <p className='message-nickname'>
                    {message.nickname}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
        <p className="isTyping">
          {typingText}
        </p>
      </div>
    );
  }
}

export default MessageList;
