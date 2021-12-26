import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { heightPixel, widthPixel } from './responsive';
import Modal from 'react-native-modal';

const SharePostModal = ({ visible, hideModal }) => {
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
        <Text style={styles.sharePost}>Share Post</Text>
        <View style={styles.shareContainer}>
          <Image
            source={require('../assets/images/shareIcon.png')}
            resizeMode={'contain'}
            style={{ marginRight: widthPixel(10) }}
          />
          <Text syle={styles.shareText}>Send as a private message</Text>
        </View>
        <View style={styles.shareContainer}>
          <Image
            source={require('../assets/images/shareFeed.png')}
            resizeMode={'contain'}
            style={{ marginRight: widthPixel(10) }}
          />
          <Text syle={styles.shareText}>Share as a post</Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.shareContainer}>
          <Image
            source={require('../assets/images/shareFacebook.png')}
            resizeMode={'contain'}
            style={{ marginRight: widthPixel(10) }}
          />
          <Text syle={styles.shareText}>Share on Facebook</Text>
        </View>
        <View style={styles.shareContainer}>
          <Image
            source={require('../assets/images/shareWhatsapp.png')}
            resizeMode={'contain'}
            style={{ marginRight: widthPixel(10) }}
          />
          <Text syle={styles.shareText}>Send via WhatsApp</Text>
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
    alignItems: 'center',
    marginTop: heightPixel(20),
  },
  shareText: {
    fontFamily: 'Inter',
    fontSize: heightPixel(14),
    lineHeight: heightPixel(21),
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

export default SharePostModal;
