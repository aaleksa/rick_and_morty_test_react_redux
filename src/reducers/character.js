import {
  CHARACTER_INFO,
  CHARACTER_LIST,
  CHARACTER_LIST_FILTER,
  CHARACTER_LIST_REQUESTED
} from '../actions/character';

const initialStateCharacter = {
  characterList: [],
  arrayPages: [],
  isRequestingCharacterList: false,
  filterValue: '',
}

export default (state = initialStateCharacter, action) => {
  switch (action.type) {

    case CHARACTER_LIST_REQUESTED:
      return {
        ...state,
        isRequestingCharacterList: true,
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
    // case CHARACTER_LIST:
    //   const arrayPages = [];
    //   const arrayLen = action.payload.info.pages;
    //   for (let i = 1; i <= arrayLen*2; i++) {
    //     const itemNumberPage = {
    //       id: i,
    //       value: i
    //     }
    //     arrayPages.push(itemNumberPage)
    //   }
    //   return {
    //     ...state,
    //     characterList: action.payload.results,
    //     isRequestingCharacterList: !state.isRequestingCharacterList,
    //     arrayPages: arrayPages,
    //   };
    case CHARACTER_INFO:
      const arrayPages = [];
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
      };

    default:
      return state;
  }
}
