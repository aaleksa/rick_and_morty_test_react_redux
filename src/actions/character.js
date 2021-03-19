import api from '../services/api';

export const CHARACTER_LIST_REQUESTED = 'counter/CHARACTER_LIST_REQUESTED'
export const CHARACTER_LIST = 'counter/CHARACTER_LIST'
export const CHARACTER_LIST_REQUESTED_FILTER = 'counter/CHARACTER_LIST_REQUESTED_FILTER'
export const CHARACTER_LIST_FILTER = 'counter/CHARACTER_LIST_FILTER'
export const CHARACTER_INFO_REQUESTED = 'counter/CHARACTER_INFO_REQUESTED'
export const CHARACTER_INFO = 'counter/CHARACTER_INFO'


export const loadCharacterListAsync = (nameList) => {

  return async (dispatch) => {
    dispatch({
      type: CHARACTER_INFO_REQUESTED,
    })
    const list = await api.getList(nameList);
    dispatch({
      type: CHARACTER_INFO,
      payload: list,
    })
  };
};

export const loadCharacterMultipleListAsync = (nameList,arrayCardIds) => {

  return async (dispatch) => {
    dispatch({
      type: CHARACTER_LIST_REQUESTED,
    })
    const list = await api.getMultipleList(nameList,arrayCardIds);
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
    const listBy20 = await api.getListFilter(pageAndFilterUrlPath);
    const pageItemsBy10 = page10ItemsFromPage20Results(listBy20.results, pageBy10Number);
    const listBy10 = {
      info: {
        count: listBy20.info.count,
        pages: Math.ceil(listBy20.info.count / 10),
      },
      results: pageItemsBy10,
    };
    dispatch({
      type: CHARACTER_LIST_FILTER,
      payload: listBy10,
      filter: filtersString,
    })
  };
};


export default {loadCharacterListAsync, loadCharacterMultipleListAsync,loadCharacterListAsyncSelectedPage,loadCharacterListAsyncFilter};