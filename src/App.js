import React from 'react';
import { Route, Link } from 'react-router-dom';

import './App.css';

import Characters from './pages/сharacters';
import Episodes from './pages/episodes';
import Locations from './pages/locations';
import MyWatchList from './pages/myWatchList';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


const App = () => (
    <div>
    <ul>
      <li >
        <Link to="/">Characters</Link>
      </li>
      <li>
        <Link to="/episodes">Episodes</Link>
      </li>
      <li>
        <Link to="/locations">Locations</Link>
      </li>
      <li>
        <Link to="/myWatchList">MyWatchList</Link>
      </li>
    </ul>
    <hr />
    <div>
      <Route exact path="/" component={Characters} />
      <Route exact path="/episodes" component={Episodes} />
      <Route exact path="/locations" component={Locations} />
      <Route exact path="/myWatchList" component={MyWatchList} />
    </div>
  </div>
)

function mapStateToProps(state) {
  return {

  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {

    },
    dispatch
  );


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
