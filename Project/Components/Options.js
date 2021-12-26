import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { heightPixel, widthPixel } from './responsive';
import Modal from 'react-native-modal';

const Options = ({ visible, hideModal }) => {
  return (
    <Modal
      style={{ width: '100%', marginLeft: 0, marginBottom: 0 }}
      isVisible={visible}
      hasBackdrop={true}
      onBackdropPress={() => {
        hideModal();
      }}
    >
      <View
        style={{
          marginTop: 'auto',
          backgroundColor: 'white',
          width: '100%',
          paddingHorizontal: widthPixel(15),
          paddingBottom: heightPixel(20),
          borderTopLeftRadius: heightPixel(16),
          borderTopRightRadius: heightPixel(16),
        }}
      >
        <Image
          source={require('../assets/images/Trigger.png')}
          resizeMode={'contain'}
          style={{
            alignSelf: 'center',
            marginTop: heightPixel(10),
            marginBottom: heightPixel(20),
          }}
        />
        <View style={styles.shareContainer}>
          <Image
            source={require('../assets/images/hide.png')}
            resizeMode={'contain'}
            style={{ marginRight: widthPixel(15) }}
          />
          <View>
            <Text style={styles.shareText}>{'Hide <Post type>'}</Text>
            <Text style={styles.shareTextDetails}>
              {'See fewer posts like this'}
            </Text>
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.shareContainer}>
          <Image
            source={require('../assets/images/unfollow.png')}
            resizeMode={'contain'}
            style={{ marginRight: widthPixel(10) }}
          />
          <View>
            <Text style={styles.shareText}>{'Unfollow <username>'}</Text>
            <Text style={styles.shareTextDetails}>
              {'See fewer posts like this'}
            </Text>
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.shareContainer}>
          <Image
            source={require('../assets/images/exclamation.png')}
            resizeMode={'contain'}
            style={{ marginRight: widthPixel(10) }}
          />
          <View>
            <Text style={styles.shareText}>{'Report <Post type>'}</Text>
            <Text style={styles.shareTextDetails}>
              {'See fewer posts like this'}
            </Text>
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.shareContainer}>
          <Image
            source={require('../assets/images/copyLink.png')}
            resizeMode={'contain'}
            style={{ marginRight: widthPixel(10) }}
          />
          <View>
            <Text style={styles.shareText}>{'Copy <post type> link'}</Text>
            <Text style={styles.shareTextDetails}>
              {'See fewer posts like this'}
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  blurBackground: {
    flex: 1,
  },
  sharePost: {
    fontFamily: 'Proxima Nova',
    fontSize: heightPixel(14),
    lineHeight: heightPixel(19.6),
    fontWeight: '700',
    color: '#545B63',
    alignSelf: 'center',
  },
  shareContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: heightPixel(20),
  },
  shareText: {
    fontFamily: 'Inter',
    fontSize: heightPixel(14),
    lineHeight: heightPixel(21),
    fontWeight: '400',
    color: '#545B63',
  },
  shareTextDetails: {
    fontFamily: 'Inter',
    fontSize: heightPixel(10),
    lineHeight: heightPixel(12.1),
    fontWeight: '400',
    color: '#545B63',
  },
  divider: {
    marginTop: heightPixel(20),
    height: heightPixel(1),
    width: '100%',
    backgroundColor: '#F2F2F2',
  },
});

export default Options;
