import api from '../services/api';
import {CHARACTER_INFO, CHARACTER_INFO_REQUESTED} from './character';

export const EPISODES_LIST_REQUESTED = 'counter/EPISODES_LIST_REQUESTED'
export const EPISODES_LIST = 'counter/EPISODES_LIST'
export const EPISODES_LIST_REQUESTED_FILTER = 'counter/EPISODES_LIST_REQUESTED_FILTER'
export const EPISODES_LIST_FILTER = 'counter/EPISODES_LIST_FILTER'
export const EPISODES_INFO_REQUESTED = 'counter/EPISODES_INFO_REQUESTED'
export const EPISODES_INFO = 'counter/EPISODES_INFO'

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
export const loadEpisodesMultipleListAsync = (nameList,arrayCard) => {
  return async (dispatch) => {
    dispatch({
      type: EPISODES_INFO_REQUESTED,
    })
    const list = await api.getMultipleList(nameList,arrayCard);
    console.log('loadEpisodesListAsync',list)
    dispatch({
      type: EPISODES_LIST,
      payload: list,
    })
  };
};
