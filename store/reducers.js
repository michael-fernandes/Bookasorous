import { ADD_WORD } from './constants';

export function addWord(title, word) {
  return { type: ADD_WORD, word: content };
}

export default function rootReducer(state = [], action) {
  switch (action.type) {
    case ADD_WORD:
      return {
        words: [...state.words],
      };
    default:
      return state;
  }
}
