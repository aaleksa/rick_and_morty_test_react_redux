import React from 'react';
import {Route, Link} from 'react-router-dom';

import './App.css';

import Characters from './pages/сharacters';
import Episodes from './pages/episodes';
import Locations from './pages/locations';
import MyWatchList from './pages/myWatchList';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


const App = () => {

  function isActivePage(event) {
    const activeElement = document.getElementsByClassName('active-page');
    console.log('activeElement',activeElement)
    const element = event.target;

    if(activeElement.length != 0){
      activeElement[0].classList.remove('active-page');
      element.classList.add('active-page')

    }else {
      element.classList.add('active-page')
    }
  }

  return (
    <div className={'main-container'}>
      <div className={'navigator-container'}>
        <Link className={'item-navigation'}
              onClick={isActivePage}
              to="/">Characters</Link>
        <Link className={'item-navigation'}
              onClick={isActivePage}
              to="/episodes">Episodes</Link>
        <Link className={'item-navigation'}
              onClick={isActivePage}
              to="/locations">Locations</Link>
        <Link className={'item-navigation'}
              onClick={isActivePage}
              to="/myWatchList">MyWatchList</Link>
      </div>
      <div>
        <Route exact path="/" component={Characters}/>
        <Route exact path="/episodes" component={Episodes}/>
        <Route exact path="/locations" component={Locations}/>
        <Route exact path="/myWatchList" component={MyWatchList}/>
      </div>
    </div>
  )
};

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  );


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
