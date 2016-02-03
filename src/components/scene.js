'use strict';

import React, { View, Component } from 'react-native';
import { START, ADD_PIPES } from '../actions/index';
import Styles from '../styles';
import Bird from './bird';
import Splash from './splash';
import Score from './score';
import Clouds from './clouds';
import Pipes from './pipes';

/**
 * Scene
 */
export default class Scene extends Component {

  componentDidUpdate() {
    const { pipes, bird, dispatch } = this.props;

    const didCollide = pipes.pipes.some(({ x, y, w, bottom }) => (
      x + w > bird.x - bird.w / 2 &&
        x < bird.x + bird.w / 2 &&
          (bottom ?
            bird.y + bird.h / 2 > y :
            bird.y - bird.h / 2 < y)
    ));

    if (didCollide) {
      dispatch({ type: START });
    }

    if (pipes.distance < 0) {
      dispatch({ type: ADD_PIPES });
    }
  }

  render() {
    const { scene, clouds, pipes, bird, dispatch } = this.props;

      return (
        <View
          key="scene-container"
          style={[
            Styles.container,
            { backgroundColor: Styles.aqua }
          ]}>

          <Clouds clouds={ clouds } />

          <Bird dispatch={ dispatch } { ...bird } />

          <Pipes { ...pipes } />

          <Score visible={ !scene.splash } score={ scene.score } />

          <Splash visible={ scene.splash } />

        </View>
      );
  }

}
