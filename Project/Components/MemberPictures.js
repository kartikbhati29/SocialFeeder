import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { heightPixel, widthPixel } from './responsive';

const MemberPictures = () => {
  return (
    <View style={styles.overlap}>
      <View style={[styles.imgContainer, { marginRight: widthPixel(-5) }]}>
        <Image
          source={require('../assets/images/priya.png')}
          resizeMode={'cover'}
        />
      </View>
      <View
        style={[
          styles.imgContainer,
          { marginRight: widthPixel(-5), zIndex: -1 },
        ]}
      >
        <Image
          source={require('../assets/images/member.png')}
          resizeMode={'cover'}
        />
      </View>
      <View style={[styles.imgContainer, { zIndex: -2 }]}>
        <Image
          source={require('../assets/images/rohit.png')}
          resizeMode={'cover'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgContainer: {
    width: heightPixel(20),
    height: heightPixel(20),
    borderRadius: heightPixel(20),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MemberPictures;
