import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { heightPixel } from './responsive';

const BottomTabs = ({ onClickNew, newPost }) => {
  return (
    <View style={styles.wrapperContainer}>
      <View style={styles.iconsContainer}>
        <Image
          source={require('../assets/images/feedSelected.png')}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.iconsContainer}>
        <Image
          source={require('../assets/images/library.png')}
          resizeMode={'contain'}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          onClickNew();
        }}
      >
        <View style={styles.iconContainer}>
          <Image
            source={require('../assets/images/CirclePlus.png')}
            resizeMode={'contain'}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <Image
          source={require('../assets/images/messages.png')}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.iconsContainer}>
        <Image
          source={require('../assets/images/services.png')}
          resizeMode={'contain'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperContainer: {
    marginTop: 'auto',
    height: heightPixel(66),
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  iconContainer: {
    marginTop: heightPixel(9),
    marginBottom: heightPixel(15),
    height: heightPixel(42),
    width: heightPixel(42),
  },
  iconsContainer: {
    marginTop: heightPixel(1),
    marginBottom: heightPixel(5),
    height: heightPixel(60),
    width: heightPixel(60),
  },
});

export default BottomTabs;
