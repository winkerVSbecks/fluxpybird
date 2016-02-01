'use strict';

import Immutable from 'seamless-immutable';
import Styles from '../styles';
import { START, TICK, ADD_PIPES } from '../actions/index';

const defaultPipe = {
  x: Styles.screenW + 2, y: -2,
  w: 58, h: 800,
  bottom: false,
};

const initialState = Immutable({
  cursor: 100,
  cursorDir: Math.random() < 0.5,
  cursorFlipTime: Math.random(),
  distance: 120,
  pipes: [],
});

export default function pipes(state = initialState, action) {

  const { splash, vx, pipes, dt } = action;

  switch (action.type) {

    case START:
      return initialState;
      break;

    case TICK:
      if (splash) {
        return state;
      }

      let cursorV = Math.random() * (state.cursorDir ? 1 : -1) * 220;
      let cursorDir;
      if (state.cursor < 40) {
        cursorDir = true;
      } else if (state.cursor > Styles.screenH - 340) {
        cursorDir = false;
      } else {
        cursorDir = (state.cursorFlipTime < 0 ?
                     !state.cursorDir :
                     state.cursorDir);
      }

      return state.merge({
        cursor: (state.cursor + cursorV * dt),
        cursorFlipTime: (state.cursorFlipTime < 0 ?
                         2.2 * Math.random() :
                         state.cursorFlipTime - dt),
        cursorDir,

        distance: (state.distance < 0 ?
                   240 * Math.random() + 70 :
                   state.distance - vx * dt),
        pipes: state.pipes.map((pipe) => pipe.merge({
          x: pipe.x - vx * dt,
        })).filter((pipe) => pipe.x + pipe.w > 0),
      });
      break;

    case ADD_PIPES:
      const gap = 200 + 100 * Math.random();
      const top = state.cursor + 100 * Math.random();

      return state.merge({
        distance: (state.distance < 0 ?
                   240 * Math.random() + 70 :
                   state.distance - vx * dt),
        pipes: state.pipes.concat([{
          ...defaultPipe,
          y: top,
          bottom: false
        }, {
          ...defaultPipe,
          y: top + gap,
          bottom: true
        }])
      });
      break;

    default:
      return state;
  }

}
