import React from 'react';

/******************* COMPONENT IMPORTS *********************/

import Randomizer from '../components/Randomizer';

/********************* REDUX IMPORTS ***********************/

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as Actions from '../actions/index.js';

// The app class acts as the main container to store the entirety
// of what the user will see as the web application
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="center-block fill">
        <Randomizer />
      </div>
    );
  }
}

// Passes data to the container from the store. Makes the result of
// reducers available to the containers as props
function mapStateToProps(state) {
  return {
    // property: state.stateProp.valueName
  };
}

// Passes data from container to the store. Provides ability for 
// container to tell the store that it needs to change. Adds action 
// creators to container as props
function mapDispatchToProps(dispatch) {
  return {
    // To uncomment once actions actually exist. 
    // actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);