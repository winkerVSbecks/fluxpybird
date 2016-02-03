'use strict';

import Immutable from 'seamless-immutable';
import Styles from '../styles';
import { START, TICK, TOUCH } from '../actions/index';

const initialState = Immutable({
  splash: true,
  score: 0
});

export default function scene(state = initialState, action) {

  switch (action.type) {

    case START:
      return initialState;
      break;

    case TICK:
      const { dt } = action;
      return state.set('score', state.splash ? 0 : state.score + dt);
      break;

    case TOUCH:
      return state.set('splash', state.splash && !action.pressed);
      break;

    default:
      return state;
  }

}
