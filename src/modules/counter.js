import api from '../services/api';

export const CHARACTER_LIST_REQUESTED = 'counter/CHARACTER_LIST_REQUESTED'
export const CHARACTER_LIST = 'counter/CHARACTER_LIST'

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

    case CHARACTER_LIST:
      const arrayPages = [];
      const arrayLen = action.payload.info.pages;
      for (let i = 1; i <= arrayLen; i++) {
        const itemNumberPage = {
          id: i,
          value: i
        }
        arrayPages.push(itemNumberPage)
      }
      return {
        ...state,
        characterList: action.payload.results,
        arrayPages: arrayPages,
        isRequestingCharacterList: !state.isRequestingCharacterList,
      };

    default:
      return state;
  }
}

export const loadCharacterListAsync = () => {

  return async (dispatch) => {
    dispatch({
      type: CHARACTER_LIST_REQUESTED,
    })
    const list = await api.getList();
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
  console.log('loadCharacterListAsyncFilter 11',filters)
  return async (dispatch) => {
    console.log('loadCharacterListAsyncFilter 222')
    dispatch({
      type: CHARACTER_LIST_REQUESTED,
    })
    console.log('loadCharacterListAsyncFilter 333')
    const list = await api.getListFilter(filters);
    dispatch({
      type: CHARACTER_LIST,
      payload: list,
    })
  };
};


