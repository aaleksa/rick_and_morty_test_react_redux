import {
  MY_WATCH_LIST_EPISODES,
} from '../actions/myWatchList';

const initialStateMyWatch = {
  listEpisodesMyWatch: [],
}
let array = [];

export default (state = initialStateMyWatch, action) => {
  switch (action.type) {
    case MY_WATCH_LIST_EPISODES:
      array.push(action.list);
      console.log('MY_WATCH_LIST_EPISODES', action.list,array)
      return {
        ...state,
        listEpisodesMyWatch: array,
      };

    default:
      return state;
  }
}