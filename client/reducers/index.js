import {combineReducers} from 'redux';
import {UPDATE_MESSAGE, ADD_MESSAGE, ADD_RESPONSE, SET_USER_ID, START_TYPING, STOP_TYPING, CHANGE_NICKNAME, UPDATE_NICKNAME} from 'actions/message-actions';

export default function (initialState) {
  function messages(currentMessages=initialState.messages, action) {
    const messages = currentMessages.map(message => Object.assign({}, message));
    switch (action.type) {
     case ADD_MESSAGE:
     case ADD_RESPONSE:
       let messages = currentMessages.map(message => Object.assign({}, message));
       messages.push(Object.assign({}, action.message));
       return messages;
     default:
       return currentMessages;
   }
 }

  function currentMessage(currentMessage=initialState.currentMessage, action) {
    switch(action.type) {
      case UPDATE_MESSAGE:
        return action.message;
      case ADD_MESSAGE:
        return '';
      default:
        return currentMessage;
    }
  }

  function userId(currentUserId=initialState.userId, action) {
    if (action.type === SET_USER_ID) {
      return action.userId;
    }

    return currentUserId;
  }


  function typing(currentTyping=initialState.typing, action) {
    if(action.type === ADD_RESPONSE){
      let user = action.message.nickname + "#" + action.message.userId
      let typing = currentTyping.slice();
      let index = typing.indexOf(user);
      typing.splice(index,1);
      return typing;
    }
    if (action.type === START_TYPING) {
      let user = action.message.nickname + "#" + action.message.userId
      let typing = currentTyping.slice();
      if(action.message.text === "") {
        let index = typing.indexOf(user);
        typing.splice(index,1);
        return typing;
      }
      if (typing.indexOf(user) === -1) {
        let user = action.message.nickname + "#" + action.message.userId
        typing.push(user);
        return typing;
      }
    }
    if (action.type === STOP_TYPING) {
      console.log("timeout in typing");
    }

    return currentTyping;
  }

  function updatedNickname(currentUpdatedNickname=initialState.updatedNickname, action) {
    if (action.type === CHANGE_NICKNAME) {
      return '';
    }
    if (action.type === UPDATE_NICKNAME) {
      return action.updatedNickname;
    }
    return currentUpdatedNickname;
  }

  function nickname(currentNickname=initialState.nickname, action) {
    if (action.type === CHANGE_NICKNAME) {
      return action.nickname;
    }

    return currentNickname;
  }

  return combineReducers({userId, currentMessage, messages, typing, nickname, updatedNickname});
}
