'use strict';

import { combineReducers } from 'redux';
import scene from './scene';
import bird from './bird';
import clouds from './clouds';
import pipes from './pipes';

const rootReducer = combineReducers({
  scene,
  bird,
  clouds,
  pipes
});

export default rootReducer;