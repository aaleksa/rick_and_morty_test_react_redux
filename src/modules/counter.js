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
  filterValue: '',
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

export const loadCharacterMultipleListAsync = (arrayCardIds) => {

  return async (dispatch) => {
    dispatch({
      type: CHARACTER_LIST_REQUESTED,
    })
    const list = await api.getMultipleList(arrayCardIds);
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

const pageBy20FromBy10Number = (pageNumberBy10) => {
  const itemIndexOfPageStart = (pageNumberBy10 - 1) * 10;
  const pageNumberBy20 = Math.floor((itemIndexOfPageStart / 20)) + 1;
  return pageNumberBy20;
};

const page10ItemsFromPage20Results = (pageBy20Items, pageNumberBy10) => {
  console.log('pageBy20Items', pageBy20Items);
  console.log('pageNumberBy10', pageNumberBy10);
  const isFirst10Items = pageNumberBy10 % 2 === 1;
  const pageBy10Items = isFirst10Items ? pageBy20Items.slice(0, 10) :  pageBy20Items.slice(10, 20);
  return pageBy10Items;
}

export const loadCharacterListAsyncFilter = (filtersString = '', pageBy10Number = 1) => {

  const pageBy20Number = pageBy20FromBy10Number(pageBy10Number);
  const pageAndFilterUrlPath = 'page=' + pageBy20Number + '&' + filtersString;

  return async (dispatch) => {
    dispatch({
      type: CHARACTER_LIST_REQUESTED_FILTER,
    })

    console.log('pageAndFilterUrlPath', pageAndFilterUrlPath);

    // const list = await api.getListFilter(pageAndFilterUrlPath);
    const listBy20 = await api.getListFilter(pageAndFilterUrlPath);

    const pageItemsBy10 = page10ItemsFromPage20Results(listBy20.results, pageBy10Number);

    const listBy10 = {
      info: {
        count: listBy20.info.count,
        pages: Math.ceil(listBy20.info.count / 10),
      },
      results: pageItemsBy10,
    };
    console.log('loadCharacterListAsyncFilter listBy20', listBy20)
    console.log('loadCharacterListAsyncFilter listBy10', listBy10)
    dispatch({
      type: CHARACTER_LIST_FILTER,
      payload: listBy10,
      filter: filtersString,
    })
  };
};


