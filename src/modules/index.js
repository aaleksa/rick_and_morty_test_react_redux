import { combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'

import character from '../reducers/character'
import episodes from '../reducers/episodes'
import locations from '../reducers/locations'
import myWatchList from '../reducers/myWatchList'




export default  (history) => combineReducers({
  router: connectRouter(history),
  character,
  episodes,
  locations,
  myWatchList
});
