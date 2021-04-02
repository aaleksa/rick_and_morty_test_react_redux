import {
  EPISODES_INFO,
  EPISODES_LIST,
  EPISODES_LIST_FILTER, EPISODES_LIST_FULL,
  EPISODES_LIST_REQUESTED
} from '../actions/episodes';

const initialStateEpisodes = {
  episodesList: [],
  arrayPages: [],
  isRequestingEpisodesList: false,
  filterValue: '',
  arrayEpisodes: [],
  episodesFullList: [],
}

export default (state = initialStateEpisodes, action) => {
  switch (action.type) {

    case EPISODES_LIST_REQUESTED:
      return {
        ...state,
        isRequestingEpisodesList: true,
      };
    case EPISODES_LIST_FILTER:
      return {
        ...state,
        episodesList: action.payload.results,
      };
    case EPISODES_LIST:
      return {
        ...state,
        episodesList: action.payload,
        isRequestingEpisodesList: !state.isRequestingEpisodesList,
      };
    case EPISODES_LIST_FULL:
      return {
        ...state,
        episodesFullList: action.payload,
      };
    case EPISODES_INFO:
      const arrayPages = [];
      const arrayEpisodes = [];
      for (let i = 0; i < action.payload.info.count; i++) {
        arrayEpisodes.push(i);
      }
      const arrayLen = Math.round(action.payload.info.count / 25);
      for (let i = 1; i <= arrayLen; i++) {
        const itemNumberPage = {
          id: i,
          value: i
        }
        arrayPages.push(itemNumberPage)
      }
      return {
        ...state,
        arrayPages: arrayPages,
        arrayEpisodes: arrayEpisodes,
      };

    default:
      return state;
  }
}
