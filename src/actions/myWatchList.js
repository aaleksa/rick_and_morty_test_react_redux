export const MY_WATCH_LIST_EPISODES = 'counter/MY_WATCH_LIST_EPISODES'

export const listSelectedEpisodesMyWatch = (nameList) => {

  return async (dispatch) => {
    dispatch({
      type: MY_WATCH_LIST_EPISODES,
      list: nameList
    })
  };
};