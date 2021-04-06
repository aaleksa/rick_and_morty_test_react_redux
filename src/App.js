import React from 'react';
import {Route, Link, Redirect} from 'react-router-dom';

import './App.css';

import Characters from './pages/сharacters';
import Episodes from './pages/episodes';
import Locations from './pages/locations';
import MyWatchList from './pages/myWatchList';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.isActivePage = this.isActivePage.bind(this)
  }

  isActivePage(event) {
    const activeElement = document.getElementsByClassName('active-page');
    const element = event.target;
    if (activeElement.length > 0) {
      activeElement[0].classList.remove('active-page');
      element.classList.add('active-page')
    } else {
      element.classList.add('active-page')
    }
  }

  render() {
    const activePageURL = window.location.href;
    const url = '/' + activePageURL.substring(activePageURL.lastIndexOf("/") + 1);
    return (

      <div className={'main-container'}>
        <div className={'navigator-container'}>
          { url === "/" &&
          <Link className={'item-navigation active-page'}
                onClick={this.isActivePage}
                to="/">Characters</Link>
          }
          { url !== "/" &&
          <Link className={'item-navigation'}
                onClick={this.isActivePage}
                to="/">Characters</Link>
          }

          {url === "/episodes" &&
          <Link className={'item-navigation active-page'}
                onClick={this.isActivePage}
                to="/episodes">Episodes</Link>
          }
          {url !== "/episodes" &&
          <Link className={'item-navigation'}
                onClick={this.isActivePage}
                to="/episodes">Episodes</Link>
          }

          {url === "/locations" &&
          <Link className={'item-navigation active-page'}
                onClick={this.isActivePage}
                to="/locations">Locations</Link>
          }
          {url !== "/locations" &&
          <Link className={'item-navigation'}
                onClick={this.isActivePage}
                to="/locations">Locations</Link>
          }

          {url === "/myWatchList" &&
          <Link className={'item-navigation active-page'}
                onClick={this.isActivePage}
                to="/myWatchList">MyWatchList</Link>
          }
          {url !== "/myWatchList" &&
          <Link className={'item-navigation'}
                onClick={this.isActivePage}
                to="/myWatchList">MyWatchList</Link>
          }

        </div>
        <div className={'component-container'}>
          <Route exact path="/" component={Characters}/>
          <Route path="/episodes" component={Episodes}/>
          <Route path="/locations" component={Locations}/>
          <Route path="/myWatchList" component={MyWatchList}/>
        </div>
      </div>
    )

  }
}

function

mapStateToProps(state) {
  return {};
}

const
  mapDispatchToProps = dispatch =>
    bindActionCreators(
      {},
      dispatch
    );


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)

(
  App
)
;
