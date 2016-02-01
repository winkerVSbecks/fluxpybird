'use strict';

import React, {Image, View} from 'react-native';
import Media from '../media';
import Styles from '../styles';

/**
 * Splash
 */
const Splash = ({ visible }) => {

  if (!visible) {
    return <View key="splash-empty">{null}</View>;
  }

  const w = 398;
  const h = 202;

  return (
    <Image
      key="splash-image"
      style={{
        position: 'absolute',
        left: (Styles.screenW - w) / 2, top: 100,
        width: w, height: h,
        backgroundColor: 'transparent'
      }}
      source={{ uri: Media['splash.png'] }}
    />
  );
};


export default Splash;