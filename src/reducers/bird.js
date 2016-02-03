'use strict';

import Immutable from 'seamless-immutable';
import Styles from '../styles';
import { START, TICK, TOUCH } from '../actions/index';

const initialState = Immutable({
  time: 0,
  alive: true,
  x: Styles.screenW - 200,
  y: Styles.screenH / 2,
  w: 30, h: 30,
  vx: 110, vy: 0,
  ay: 700, ax: 9,
});

const BIRD_FREQ = 1.2;
const BIRD_AMP = 140;


export default function bird(state = initialState, action) {

  switch (action.type) {

    case START:
      return initialState;
      break;

    case TICK:
      const { splash, dt } = action;

      const die = (state.y < 0 || state.y + state.h > Styles.screenH) ?
                      true : false;

      let vy = state.vy;

      if (splash) {
        vy = BIRD_AMP * Math.sin(BIRD_FREQ * Math.PI * state.time);
      } else if (die) {
        vy = -150;
      } else {
        vy += state.ay * dt;
      }

      return state.merge({
        time: state.time + dt,
        alive: state.alive && !die,
        y: state.y + state.vy * dt,
        x: state.alive ? state.x : state.x - 0.5 * state.vx * dt,
        vx: splash ? state.vx : Math.max(0, state.vx + state.ax * dt),
        vy,
        ax: (die ?
             Math.min(-state.vx / 2, -0.25 * state.vx * state.vx / (state.x - state.w)) :
             state.ax),
        ay: die ? 700 : state.ay,
      });
      break;

    case TOUCH:
      const { pressed } = action;
      return state.merge({
        ay: state.alive && pressed ? -1600 : 700,
      });
      break;

    default:
      return state;
  }

}
