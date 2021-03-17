import api from '../services/api';

export const CHARACTER_LIST_REQUESTED = 'counter/CHARACTER_LIST_REQUESTED'
export const CHARACTER_LIST = 'counter/CHARACTER_LIST'
export const CHARACTER_LIST_REQUESTED_FILTER = 'counter/CHARACTER_LIST_REQUESTED_FILTER'
export const CHARACTER_LIST_FILTER = 'counter/CHARACTER_LIST_FILTER'
export const CHARACTER_INFO_REQUESTED = 'counter/CHARACTER_INFO_REQUESTED'
export const CHARACTER_INFO = 'counter/CHARACTER_INFO'

const initialState = {
  characterList: [],
  arrayPages: [],
  isRequestingCharacterList: false,

}

export default (state = initialState, action) => {
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
        arrayPages: arrayPages,
      };

    default:
      return state;
  }
}

// export const loadCharacterListAsync = () => {
//   return async (dispatch) => {
//     dispatch({
//       type: CHARACTER_LIST_REQUESTED,
//     })
//     const list = await api.getList();
//     dispatch({
//       type: CHARACTER_LIST,
//       payload: list,
//     })
//   };
// };
export const loadCharacterListAsync = () => {
  return async (dispatch) => {
    dispatch({
      type: CHARACTER_INFO_REQUESTED,
    })
    const list = await api.getList();
    dispatch({
      type: CHARACTER_INFO,
      payload: list,
    })
  };
};

export const loadCharacterMultipleListAsync = (arrayCard) => {

  return async (dispatch) => {
    dispatch({
      type: CHARACTER_LIST_REQUESTED,
    })
    const list = await api.getMultipleList(arrayCard);
    console.log('loadCharacterMultipleListAsync respons', list)
    dispatch({
      type: CHARACTER_LIST,
      payload: list,
    })
  };
};

export const loadCharacterListAsyncSelectedPage = (numberPage) => {
  return async (dispatch) => {
    dispatch({
      type: CHARACTER_LIST_REQUESTED,
    })
    const list = await api.getListSelectedPage(numberPage);
    dispatch({
      type: CHARACTER_LIST,
      payload: list,
    })
  };
};

export const loadCharacterListAsyncFilter = (filters) => {
  return async (dispatch) => {
    dispatch({
      type: CHARACTER_LIST_REQUESTED_FILTER,
    })
    const list = await api.getListFilter(filters);
    console.log('loadCharacterListAsyncFilter list', list)
    dispatch({
      type: CHARACTER_LIST_FILTER,
      payload: list,
    })
  };
};


