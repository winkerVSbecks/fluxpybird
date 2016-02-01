'use strict';

import React, { Image, View } from 'react-native';
import Media from '../media';
import Styles from '../styles';

/**
 * Pipes
 * A pipe's (x, y) is where the left corner of its 'surface' is
 * (bottom edge for top-pipe, top edge for bottom-pipe)
 */
const Pipes = ({ cursor, pipes }) => {

  const pipeImages = pipes.asMutable().map(({ x, y, w, h, bottom }, idx) => {
    return (
      <Image key={ `pipe-image-${idx}` }
        style={{
          position: 'absolute',
          left: x, top: bottom ? y : y - h,
          width: 58, height: 800,
          backgroundColor: 'transparent'
        }}
        source={{ uri: Media['pipe1.png'] }}
      />
    );
  });

  return (
    <View key="pipes-container"
      style={ Styles.container }>
      { pipeImages }
    </View>
  );

};


export default Pipes;
