import { combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'

import character from '../reducers/character'
import episodes from '../reducers/episodes'
import locations from '../reducers/locations'



export default  (history) => combineReducers({
  router: connectRouter(history),
  character,
  episodes,
  locations
});
