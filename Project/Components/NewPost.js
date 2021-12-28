import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { heightPixel, widthPixel } from './responsive';
import Modal from 'react-native-modal';

const NewPost = ({ visible, hideModal }) => {
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
          backgroundColor: '#FFFFFF',
          width: '95%',
          marginHorizontal: widthPixel(10),
          borderTopLeftRadius: heightPixel(16),
          borderTopRightRadius: heightPixel(16),
          borderBottomLeftRadius: heightPixel(16),
          borderBottomRightRadius: heightPixel(16),
        }}
      >
        <View style={styles.shareContainer}>
          <Image
            source={require('../assets/images/create.png')}
            resizeMode={'contain'}
            style={{ marginRight: widthPixel(10) }}
          />
          <View>
            <Text style={styles.shareText}>{'Create a post'}</Text>
            <Text style={styles.shareTextDetails}>
              {'Share your thoughts with the community'}
            </Text>
          </View>
          <Image
            source={require('../assets/images/angle-right.png')}
            resizeMode={'contain'}
            style={{ marginLeft: 'auto' }}
          />
        </View>
        <View style={styles.divider}></View>
        <View style={styles.shareContainer}>
          <Image
            source={require('../assets/images/question.png')}
            resizeMode={'contain'}
            style={{ marginRight: widthPixel(10) }}
          />
          <View>
            <Text style={styles.shareText}>{'Ask a Question'}</Text>
            <Text style={styles.shareTextDetails}>
              {'Any doubts? As the community'}
            </Text>
          </View>
          <Image
            source={require('../assets/images/angle-right.png')}
            resizeMode={'contain'}
            style={{ marginLeft: 'auto' }}
          />
        </View>
        <View style={styles.divider}></View>
        <View style={styles.shareContainer}>
          <Image
            source={require('../assets/images/poll.png')}
            resizeMode={'contain'}
            style={{ marginRight: widthPixel(10) }}
          />
          <View>
            <Text style={styles.shareText}>{'Start a Poll'}</Text>
            <Text style={styles.shareTextDetails}>
              {'Need the opinion of the many? '}
            </Text>
          </View>
          <Image
            source={require('../assets/images/angle-right.png')}
            resizeMode={'contain'}
            style={{ marginLeft: 'auto' }}
          />
        </View>
        <View style={styles.divider}></View>
        <View style={styles.shareContainer}>
          <Image
            source={require('../assets/images/organize.png')}
            resizeMode={'contain'}
            style={{ marginRight: widthPixel(10) }}
          />
          <View>
            <Text style={styles.shareText}>{'Organise an Event'}</Text>
            <Text style={styles.shareTextDetails}>
              Start a meet with people to share your joys
            </Text>
          </View>
          <Image
            source={require('../assets/images/angle-right.png')}
            resizeMode={'contain'}
            style={{ marginLeft: 'auto' }}
          />
        </View>
      </View>
      <View style={{ marginHorizontal: widthPixel(15), width: '94%' }}>
        <TouchableOpacity
          onPress={() => {
            hideModal();
          }}
        >
          <Image
            source={require('../assets/images/Expanded.png')}
            resizeMode={'contain'}
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: heightPixel(20),
              marginBottom: heightPixel(7),
            }}
          />
        </TouchableOpacity>
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
    alignItems: 'flex-start',
    paddingHorizontal: widthPixel(20),
    paddingVertical: heightPixel(24),
  },
  shareText: {
    fontFamily: 'Proxima Nova',
    fontSize: heightPixel(14),
    lineHeight: heightPixel(21),
    fontWeight: '400',
    color: '#00A981',
  },
  shareTextDetails: {
    fontFamily: 'Proxima Nova',
    fontSize: heightPixel(10),
    lineHeight: heightPixel(12.1),
    fontWeight: '400',
    color: '#545B63',
  },
  divider: {
    height: heightPixel(1),
    width: '100%',
    backgroundColor: '#F2F2F2',
  },
});

export default NewPost;
