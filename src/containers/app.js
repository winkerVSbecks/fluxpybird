'use strict';

import React, { Component } from 'react-native';
import Game from '../components/game.js';
import { connect } from 'react-redux/native';

class App extends Component {

  render() {

    return (
      <Game { ...this.props } />
    );
  }

}


export default connect((state) => state)(App);
