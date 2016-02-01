'use strict';

import Dimensions from 'Dimensions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default {
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0, left: 0,
    width: SCREEN_WIDTH, height: SCREEN_HEIGHT,
  },
  screenW: SCREEN_WIDTH,
  screenH: SCREEN_HEIGHT,
  aqua: '#1CE0FF',
  red: '#FF6871',
  yellow: '#FFE15E',
  navy: '#1CAEFF',
  green: '#34D683',
  black: '#081E25'
};
