import {
  EPISODES_INFO,
  EPISODES_LIST,
  EPISODES_LIST_FILTER,
  EPISODES_LIST_REQUESTED
} from '../actions/episodes';

const initialStateEpisodes = {
  episodesList: [],
  arrayPages: [],
  isRequestingEpisodesList: false,
  filterValue: '',
}

export default (state = initialStateEpisodes, action) => {
  switch (action.type) {

    case EPISODES_LIST_REQUESTED:
      return {
        ...state,
        isRequestingEpisodesList: true,
      };
    // case EPISODES_LIST_FILTER:
    //   const arrayPagesFilter = [];
    //   const arrayLenFilter = action.payload.info.pages;
    //   for (let i = 1; i <= arrayLenFilter; i++) {
    //     const itemNumberPage = {
    //       id: i,
    //       value: i
    //     }
    //     arrayPagesFilter.push(itemNumberPage)
    //   }
    //
    //   return {
    //     ...state,
    //     filterValue: action.filter,
    //     arrayPages: arrayPagesFilter,
    //     episodesList: action.payload.results,
    //   };
    case EPISODES_LIST:
      return {
        ...state,
        episodesList: action.payload,
        isRequestingEpisodesList: !state.isRequestingEpisodesList,
      };

    case EPISODES_INFO:
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
