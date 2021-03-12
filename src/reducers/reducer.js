
const Map = require("immutable").Map;

const reducer = function(state = Map(), action) {
  switch (action.type) {
    case "CHARACTER_LIST":
      console.log('jjjjjjj')
      return state.merge(action.state);

  }
  return state;
}
module.exports = reducer;