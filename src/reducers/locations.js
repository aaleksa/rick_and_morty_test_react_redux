import {
  LOCATIONS_INFO,
  LOCATIONS_LIST,
  LOCATIONS_LIST_FILTER,
  LOCATIONS_LIST_FULL,
  LOCATIONS_LIST_REQUESTED
} from '../actions/locations';

const initialStateLocations = {
  locationsList: [],
  arrayPages: [],
  isRequestingLocationsList: false,
  filterValue: '',
  arrayLocation: [],
  locationsFullList: [],
}

export default (state = initialStateLocations, action) => {

  switch (action.type) {

    case LOCATIONS_LIST_REQUESTED:
      return {
        ...state,
        isRequestingLocationsList: true,
      };
    case LOCATIONS_LIST_FILTER:
      return {
        ...state,
        locationsList: action.payload.results,
      };
    case LOCATIONS_LIST:
      return {
        ...state,
        locationsList: action.payload,
        isRequestingLocationsList: !state.isRequestingLocationsList,
      };
    case LOCATIONS_LIST_FULL:
      return {
        ...state,
        locationsFullList: action.payload,
      };
    case LOCATIONS_INFO:
      const arrayPages = [];
      const arrayLocation = [];
      for (let i = 0; i < action.payload.info.count; i++) {
        arrayLocation.push(i);
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
        arrayLocation: arrayLocation,
      };

    default:
      return state;
  }
}
