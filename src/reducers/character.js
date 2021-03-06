import {
  CHARACTER_INFO,
  CHARACTER_LIST,
  CHARACTER_LIST_FULL,
  CHARACTER_LIST_FILTER,
  CHARACTER_LIST_REQUESTED,
  CHARACTER_SINGLE
} from '../actions/character';

const initialStateCharacter = {
  characterSingle: {},
  characterList: [],
  arrayPages: [],
  isRequestingCharacterList: false,
  filterValue: '',
  arrayCharacter: [],
  characterFullList: [],

}

export default (state = initialStateCharacter, action) => {
  switch (action.type) {
    case CHARACTER_LIST_REQUESTED:
      return {
        ...state,
        isRequestingCharacterList: true,
      };
    case CHARACTER_SINGLE:
      return {
        ...state,
        characterSingle: action.payload,
      };
    case CHARACTER_LIST_FULL:
      return {
        ...state,
        characterFullList: action.payload,
      };
    case CHARACTER_LIST_FILTER:
      const arrayPagesFilter = [];
      const arrayLenFilter = action.payload.info.pages;
      for (let i = 1; i <= arrayLenFilter; i++) {
        const itemNumberPage = {
          id: i,
          value: i
        }
        arrayPagesFilter.push(itemNumberPage)
      }

      return {
        ...state,
        filterValue: action.filter,
        arrayPages: arrayPagesFilter,
        characterList: action.payload.results,
      };
    case CHARACTER_LIST:
      return {
        ...state,
        characterList: action.payload,
        isRequestingCharacterList: !state.isRequestingCharacterList,
      };

    case CHARACTER_INFO:
      const arrayPages = [];
      const arrayCharacter = [];
      for (let i = 0; i < action.payload.info.count; i++) {
        arrayCharacter.push(i);
      }
      const arrayLen = action.payload.info.pages;
      for (let i = 1; i <= arrayLen * 2; i++) {
        const itemNumberPage = {
          id: i,
          value: i
        }
        arrayPages.push(itemNumberPage)
      }
      return {
        ...state,
        filterCharacter: action.payload.info.url,
        arrayPages: arrayPages,
        arrayCharacter: arrayCharacter,
      };

    default:
      return state;
  }
}
