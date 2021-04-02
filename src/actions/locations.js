import api from '../services/api';
export const LOCATIONS_LIST_REQUESTED = 'counter/LOCATIONS_LIST_REQUESTED'
export const LOCATIONS_LIST = 'counter/LOCATIONS_LIST'
export const LOCATIONS_LIST_FILTER = 'counter/LOCATIONS_LIST_FILTER'
export const LOCATIONS_INFO_REQUESTED = 'counter/LOCATIONS_INFO_REQUESTED'
export const LOCATIONS_INFO = 'counter/LOCATIONS_INFO'
export const LOCATIONS_LIST_FULL = 'counter/LOCATIONS_LIST_FULL'

export const loadLocationsListAsync = (nameList) => {

  return async (dispatch) => {
    dispatch({
      type: LOCATIONS_INFO_REQUESTED,
    })
    const list = await api.getList(nameList);
    dispatch({
      type: LOCATIONS_INFO,
      payload: list,
    })
  };
};
export const loadLocationsMultipleListAsync = (nameList,arrayCard) => {
  return async (dispatch) => {
    dispatch({
      type: LOCATIONS_INFO_REQUESTED,
    })
    const list = await api.getMultipleList(nameList,arrayCard);
    dispatch({
      type: LOCATIONS_LIST,
      payload: list,
    })
  };
};