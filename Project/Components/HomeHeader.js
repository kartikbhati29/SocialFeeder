import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import { Animated } from 'react-native';

import { heightPixel, widthPixel } from './responsive';
import { Chip } from './Chips';
import { modalitiesData } from './sampleData';

const HEADER_HEIGHT = heightPixel(36);
const HEADER_MARGIN = heightPixel(24);

const HomeHeader = ({ animatedValue }) => {
  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [HEADER_HEIGHT, 0],
    extrapolate: 'clamp',
  });
  const headerMargin = animatedValue.interpolate({
    inputRange: [0, HEADER_MARGIN],
    outputRange: [HEADER_MARGIN, 0],
    extrapolate: 'clamp',
  });
  return (
    <View style={[styles.wrapperContainer]}>
      <View style={[styles.container]}>
        <Animated.View
          style={[
            styles.topContainer,
            { height: headerHeight, marginBottom: headerMargin },
          ]}
        >
          <View>
            <View>
              <Text style={styles.topContainerTitle}>COMMUNITY</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.topContainerSelect}>All Communities</Text>
              <Image
                source={require('../assets/images/angle-down.png')}
                resizeMode={'contain'}
              />
            </View>
          </View>
          <View>
            <Image
              source={require('../assets/images/profileImage.png')}
              resizeMode={'contain'}
            />
          </View>
        </Animated.View>

        <View style={[styles.middleContainer]}>
          <View style={styles.leftBox}>
            <TextInput
              style={{ flex: 1, color: 'black' }}
              placeholderTextColor="#A5B1C2"
              placeholder={'Search posts and members'}
              fontSize={12}
              height={34}
            />
            <View>
              <Image
                source={require('../assets/images/search.png')}
                style={{
                  width: widthPixel(13),
                  height: heightPixel(13),
                  paddingRight: widthPixel(10),
                }}
                resizeMode={'contain'}
              />
            </View>
          </View>
          <Image
            source={require('../assets/images/bell.png')}
            style={{
              width: widthPixel(14),
              height: heightPixel(17),
              marginRight: widthPixel(5),
            }}
            resizeMode={'contain'}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {modalitiesData.map((data, index) => {
            return (
              <Chip selected={data.selected} title={data.title} key={index} />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperContainer: {
    paddingVertical: heightPixel(10),
    backgroundColor: '#FFFFFF',
    width: widthPixel(360),
  },
  container: {
    paddingVertical: heightPixel(17),
    paddingHorizontal: widthPixel(15),
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  middleContainer: {
    width: '100%',
    height: heightPixel(32),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomContainer: {
    marginLeft: widthPixel(10),
    width: '100%',
    height: heightPixel(26),
  },
  topContainerTitle: {
    fontFamily: 'Proxima Nova',
    fontSize: heightPixel(12),
    lineHeight: heightPixel(13.46),
    letterSpacing: widthPixel(1),
    color: '#A5B1C2',
  },
  topContainerSelect: {
    fontFamily: 'Proxima Nova',
    fontSize: heightPixel(16),
    lineHeight: heightPixel(17.95),
    letterSpacing: widthPixel(1),
    color: '#00A981',
  },
  leftBox: {
    width: widthPixel(288),
    height: heightPixel(32),
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#CCEEE6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HomeHeader;
