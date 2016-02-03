'use strict';

import React, { Component } from 'react-native';
import { TICK } from '../actions/index';

/**
 * The Game Clock
 */
export default class Clock extends Component {

  componentDidMount() {
    this._requestTick();
    this.props.dispatch({ type: 'ADD_PIPES' });
  }

  componentWillUnmount() {
    if (this._tickRequestID) {
      window.cancelAnimationFrame(this._tickRequestID);
    }
  }

  _requestTick() {
    if (!this._lastTickTime) {
      this._lastTickTime = Date.now();
    }
    this._tickRequestID = requestAnimationFrame(() => this._tick());
  }

  _tick() {
    this._tickRequestID = undefined;
    const currTime = Date.now();
    this.tick(Math.min(0.05, 0.001 * (currTime - this._lastTickTime)));
    this._lastTickTime = currTime;
    this._requestTick();
  }

  tick(dt) {
    const { splash, dispatch, vx } = this.props;
    dispatch({ type: TICK, dt, splash, vx: vx });
  }

  render() {
    return null;
  }

}
