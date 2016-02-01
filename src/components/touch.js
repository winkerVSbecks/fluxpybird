'use strict';

import React, { View, PanResponder } from 'react-native';
import { connect } from 'react-redux/native';

/**
 * Touch Event Handler
 * Dispatches
 * `{ ...gestureState, type: 'TOUCH', pressed: <whether pressed> }`
 * on touch events, where `gestureState` is given as in
 * https://facebook.github.io/react-native/docs/panresponder.html.
 * Doesn't actually render anything.
 */
const Touch = ({ dispatch, style }) => {

  const panGrant = (_, gestureState) => {
    dispatch({
      ...gestureState,
      type: 'TOUCH',
      pressed: true
    });
  };

  const panRelease = (_, gestureState) => {
    dispatch({
      ...gestureState,
      type: 'TOUCH',
      pressed: false
    });
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: panGrant,
    onPanResponderRelease: panRelease,
    onPanResponderTerminate: panRelease,
    onShouldBlockNativeResponder: () => false,
  });

  return (
    <View {...panResponder.panHandlers}
      style={ style }>
    </View>
  );
};

export default Touch;