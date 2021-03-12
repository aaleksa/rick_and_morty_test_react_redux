import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

import Characters from './pages/сharacters';
import Episodes from './pages/episodes';
import {bindActionCreators} from 'redux';
import {loadCharacterListAsync} from './modules/counter';
import {connect} from 'react-redux';
import store from './store/store';
// import Locations from './pages/locations';
// import MyWatchList from './pages/myWatchList';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Characters</Link>
//           </li>
//           <li>
//             <Link to="/episodes">Episodes</Link>
//           </li>
//           <li>
//             <Link to="/locations">Locations</Link>
//           </li>
//           <li>
//             <Link to="/myWatchList">MyWatchList</Link>
//           </li>
//         </ul>
//
//         <hr />
//
//         {/*
//           A <Switch> looks through all its children <Route>
//           elements and renders the first one whose path
//           matches the current URL. Use a <Switch> any time
//           you have multiple routes, but you want only one
//           of them to render at a time
//         */}
//         <Switch>
//           <Route exact path="/">
//             <Characters/>
//           </Route>
//           <Route path="/episodes">
//             <Episodes />
//           </Route>
//           <Route path="/locations">
//             <Locations />
//           </Route>
//           <Route path="/myWatchList">
//             <MyWatchList />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// You can think of these components as "pages"
// in your app.


const App = (props) => (
    <div>
    <ul>
      <li onClick={props.loadCharacterListAsync}
          disabled={props.isRequestingCharacterList}>
        <Link to="/">Characters</Link>
      </li>
      <li>
        <Link to="/episodes">Episodes</Link>
      </li>
      {/*<li>*/}
      {/*  <Link to="/locations">Locations</Link>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <Link to="/myWatchList">MyWatchList</Link>*/}
      {/*</li>*/}
    </ul>
    <hr />
    <div>
      <Route exact path="/" component={Characters} />
      <Route exact path="/episodes" component={Episodes} />
    </div>
  </div>
)

function mapStateToProps(state) {
  return {
    isRequestingCharacterList: state.counter.isRequestingCharacterList,
    characterList: state.counter.characterList,
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadCharacterListAsync,
    },
    dispatch
  );


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
