import api from '../services/api';
export const EPISODES_LIST_REQUESTED = 'counter/EPISODES_LIST_REQUESTED'
export const EPISODES_LIST = 'counter/EPISODES_LIST'
export const EPISODES_LIST_FILTER = 'counter/EPISODES_LIST_FILTER'
export const EPISODES_INFO_REQUESTED = 'counter/EPISODES_INFO_REQUESTED'
export const EPISODES_INFO = 'counter/EPISODES_INFO'
export const EPISODES_LIST_FULL = 'counter/EPISODES_LIST_FULL'

export const loadEpisodesListAsync = (nameList) => {

  return async (dispatch) => {
    dispatch({
      type: EPISODES_INFO_REQUESTED,
    })
    const list = await api.getList(nameList);
    dispatch({
      type: EPISODES_INFO,
      payload: list,
    })
  };
};
export const loadFullListEpisodes = (nameList,arrayEpisodes) => {
  return async (dispatch) => {
    dispatch({
      type: EPISODES_INFO_REQUESTED,
    })
    const list = await api.getMultipleList(nameList,arrayEpisodes);
    dispatch({
      type: EPISODES_LIST_FULL,
      payload: list,
    })
  };
};
export const loadEpisodesMultipleListAsync = (nameList,arrayCard) => {
  return async (dispatch) => {
    dispatch({
      type: EPISODES_INFO_REQUESTED,
    })
    const list = await api.getMultipleList(nameList,arrayCard);
    // console.log('loadEpisodesListAsync',list)
    dispatch({
      type: EPISODES_LIST,
      payload: list,
    })
  };
};
export const loadEpisodesListAsyncFilter = (nameList,filter) => {
  return async (dispatch) => {
    dispatch({
      type: EPISODES_INFO_REQUESTED,
    })
    const list = await api.getListFilter(nameList,filter);
    // console.log('loadEpisodesListAsync',list)
    dispatch({
      type: EPISODES_LIST_FILTER,
      payload: list,
    })
  };
};
