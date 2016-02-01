import React, { View } from 'react-native';
import Clock from './clock.js';
import Touch from './touch.js';
import Scene from './scene.js';
import Styles from '../styles.js';


const Game = (props) => {

  return (
    <View style={ Styles.container }>

      <Clock dispatch={ props.dispatch }
        splash={ props.scene.splash }
        vx={ props.bird.vx } />

      <Scene { ...props } />

      <Touch dispatch={ props.dispatch } style={ Styles.container }/>

    </View>
  );
};

export default Game;