'use strict';

import React, { Image, View } from 'react-native';
import Styles from '../styles';
import Media from '../media';

const CLOUD_WIDTH = 260;
const CLOUD_HEIGHT = 150;

/**
 * Clouds
 */
const Clouds = ({ clouds }) => {

  return (
    <View key="clouds-container"
      style={Styles.container}>
      {
        clouds.asMutable().map(({ x, y, img }) => (
          <Image key={`cloud-image-${img}`}
            style={{
              position: 'absolute',
              left: x, top: y,
              width: CLOUD_WIDTH, height: CLOUD_HEIGHT,
              backgroundColor: 'transparent'
            }}
            source={{ uri: Media[img] }}
          />
        ))
      }
    </View>
  );

};

export default Clouds;