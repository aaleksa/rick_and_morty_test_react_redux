import { combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'

import character from '../reducers/character'
import episodes from '../reducers/episodes'


export default  (history) => combineReducers({
  router: connectRouter(history),
  character,
  episodes
});
