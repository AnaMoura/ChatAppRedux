import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MessageList from 'components/message-list';
import Menu from 'components/menu';
import MessageEntryBox from 'components/message-entry-box';
import * as messageActionCreators from 'actions/message-actions';
require('../../../style.sass');

class App extends Component {
  render() {
    return (
        <div className='chat-window'>
          <Menu
            nickname={this.props.nickname}
            userId={this.props.userId}
            value={this.props.updatedNickname}
            onChange={this.props.updateNickname}
            onSubmit={this.props.changeNickname} />
          <MessageList typing={this.props.typing} userId={this.props.userId} messages={this.props.messages}/>
          <MessageEntryBox
            value={this.props.currentMessage}
            userId={this.props.userId}
            onChange={this.props.updateMessage}
            onSubmit={this.props.addMessage}
            nickname = {this.props.nickname}/>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userId: state.userId,
    updatedNickname: state.updatedNickname,
    nickname: state.nickname,
    currentMessage: state.currentMessage,
    messages: state.messages,
    typing: state.typing
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(messageActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
