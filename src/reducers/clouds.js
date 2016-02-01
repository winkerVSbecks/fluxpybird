'use strict';

import Immutable from 'seamless-immutable';
import Styles from '../styles';
import { START, TICK, TOUCH } from '../actions/index';

const cloudImgs = [
  'cloud-1.png',
  'cloud-2.png',
  'cloud-3.png',
  'cloud-4.png',
];

const CLOUD_WIDTH = 283;
const CLOUD_HEIGHT = 142;

const initialState = Immutable(
  cloudImgs.map((img) => ({
    x: Styles.screenW * 3 * Math.random(),
    y: Styles.screenH * Math.random() - CLOUD_HEIGHT / 2,
    vxFactor: 0.1 + 0.2 * Math.random(),
    img
  }))
);

export default function clouds(state = initialState, action) {

  switch (action.type) {

    case START:
      return initialState;
      break;

    case TICK:
      const { dt, vx } = action;

      return Immutable(
        state.map((cloud) => {
          if (cloud.x + CLOUD_WIDTH > 0) {
            return cloud.merge({
              x: cloud.x - cloud.vxFactor * (vx + 65) * dt,
            });
          }
          return cloud.merge({
            x: Styles.screenW * (1 + Math.random()),
            y: Styles.screenH * Math.random() - CLOUD_HEIGHT / 2,
            vxFactor: 0.2 + 0.2 * Math.random(),
          });
        })
      );
      break;

    case TOUCH:
      return state.set('splash', state.splash && !action.pressed);
      break;

    default:
      return state;
  }

}
