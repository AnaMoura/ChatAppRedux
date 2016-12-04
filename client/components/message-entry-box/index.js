import React, {Component} from 'react';

class MessageEntryBox extends Component {
  render() {
    return (
      <div className='message-entry-box'>
        <textarea
          name='message'
          placeholder='Enter a message'
          value={this.props.value.text}
          onChange={this.handleChange.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}/>
      </div>
    );
  }

  handleChange(ev) {
    this.props.onChange({
      text: ev.target.value,
      userId: this.props.userId,
      nickname: this.props.nickname
    })
  }


  handleKeyPress(ev) {
    if (ev.which === 13) {
      ev.preventDefault();
      console.log(this.props.value.text);
      if(typeof this.props.value.text != "undefined" && this.props.value.text !== "") {
        const trimmedMessage = this.props.value.text.trim();
        if (trimmedMessage) {
          this.props.onSubmit({
            text: trimmedMessage,
            userId: this.props.userId,
            nickname: this.props.nickname
          });
        }
        ev.target.value = "";
      }
    }
  }
}

export default MessageEntryBox;
