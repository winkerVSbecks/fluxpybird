'use strict';

import React, { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scoreContainer: {
    position: 'absolute',
    top: 42,
    left: 30,
    paddingRight: 2,
    paddingLeft: 5,
    paddingTop: 2,
    backgroundColor: '#transparent'
  },
  score: {
    color: '#081E25',
    fontSize: 33,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    margin: -1
  }
});

/**
 * Score
 */
const Score = ({ visible, score }) => {

  if (!visible) {
    return (<View>{null}</View>);
  }

  return (
    <View style={styles.scoreContainer}>

      <Text key="score-text"
        style={ styles.score }>
        { Math.floor(score) }
      </Text>

    </View>
  );

};


export default Score;