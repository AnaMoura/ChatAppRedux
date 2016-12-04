export const UPDATE_MESSAGE = 'update-message';
export const ADD_MESSAGE = 'add-message';
export const ADD_RESPONSE = 'add-response';
export const SET_USER_ID = 'setUserId';
export const START_TYPING = 'start-typing';
export const STOP_TYPING = 'stop-typing';
export const UPDATE_NICKNAME = 'update-nickname';
export const CHANGE_NICKNAME = 'change-nickname';

export function updateMessage(message) {
  return { type: UPDATE_MESSAGE, message};
}

export function addMessage(message) {
  return { type: ADD_MESSAGE, message };
}

export function addResponse(message) {
  return { type: ADD_RESPONSE, message };
}

export function setUserId(userId) {
  return { type: SET_USER_ID, userId };
}

export function startTyping(message) {
  return { type: START_TYPING, message};
}

export function stopTyping(message) {
  return { type: STOP_TYPING, message};
}

export function updateNickname(updatedNickname) {
  return { type: UPDATE_NICKNAME, updatedNickname};
}

export function changeNickname(nickname) {
  return { type: CHANGE_NICKNAME, nickname};
}
