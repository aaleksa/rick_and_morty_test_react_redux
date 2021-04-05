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
  arrayCharacterForEachLocation: [],
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
      console.log('action.payload',action.payload)
      let arrayCharacterForEachLocation = [];
      let arrayCharacterOneLocation = [];
      let payloadLength = action.payload.length;
        for(let i = 0; i < payloadLength; i++){
          let residentsLength = action.payload[i].residents.length;
          arrayCharacterOneLocation = [];
          for(let y = 0; y < residentsLength; y++){
            let url = action.payload[i].residents[y];
            console.log('url',url)
            let str = url.substring(url.lastIndexOf("/")+1);
            arrayCharacterOneLocation.push(str);
          }
          arrayCharacterForEachLocation.push(arrayCharacterOneLocation);
          console.log('arrayCharacterForEachLocation',arrayCharacterForEachLocation)
        }
      return {
        ...state,
        locationsList: action.payload,
        isRequestingLocationsList: !state.isRequestingLocationsList,
        arrayCharacterForEachLocation: arrayCharacterForEachLocation,

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
