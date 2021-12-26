import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { heightPixel, widthPixel } from './responsive';
import { reactionData } from './sampleData';

const ReactionTab = ({ hideTab }) => {
  return (
    <>
      <View style={styles.tabStyle}>
        {reactionData.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => {
                hideTab();
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Image source={item.image} resizeMode={'contain'} />
                <Text style={{ marginLeft: widthPixel(12) }}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    height: heightPixel(50),
    width: widthPixel(240),
    borderRadius: heightPixel(33),
    bottom: heightPixel(50),
    left: widthPixel(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    zIndex: 1,
  },
});

export default ReactionTab;
