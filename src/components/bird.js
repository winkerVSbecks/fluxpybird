'use strict';

import React, { Component, Image } from 'react-native';
import { START } from '../actions/index';
import Media from '../media';

/**
 * Bird
 * (x, y) is position of its center
 */
export default class Bird extends Component {

  componentDidUpdate() {
    const { alive, dispatch } = this.props;

    if (!alive) {
      dispatch({ type: START });
    }
  }

  render() {
    const { x, y, w, h, vx, vy, alive, dispatch } = this.props;
    const rot = Math.max(-25, Math.min(vy / (vy > 0 ? 9 : 6), 50));

    return (
      <Image
        key="bird-image"
        style={{
          position: 'absolute',
          transform: [{ rotate: rot + 'deg' }],
          left: x - w / 2,
          top: y - h / 2,
          width: w,
          height: h,
          backgroundColor: 'transparent'
        }}
        source={{ uri: Media['triangle.png'] }}
      />
    );
  }

}
