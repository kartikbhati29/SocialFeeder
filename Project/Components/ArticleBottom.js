import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { heightPixel, widthPixel } from './responsive';

const ArticleBottom = ({
  likePressed,
  likesCount,
  commentsCount,
  onClickShare,
}) => {
  return (
    <>
      <View style={styles.articleBottom}>
        <TouchableOpacity
          onPress={() => {
            likePressed();
          }}
        >
          <View style={styles.articleBottomCount}>
            <Image
              source={require('../assets/images/like.png')}
              style={{
                width: widthPixel(14),
                height: heightPixel(14),
              }}
              resizeMode={'contain'}
            />
            <Text style={styles.articleBottomCountText}>{likesCount}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.articleBottomCount}>
          <Image
            source={require('../assets/images/comment.png')}
            style={{
              width: widthPixel(14),
              height: heightPixel(14),
            }}
            resizeMode={'contain'}
          />
          <Text style={styles.articleBottomCountText}>{commentsCount}</Text>
        </View>
        <Image
          source={require('../assets/images/fav.png')}
          style={{
            width: widthPixel(14),
            height: heightPixel(14),
          }}
          resizeMode={'contain'}
        />
        <TouchableOpacity
          onPress={() => {
            onClickShare();
          }}
        >
          <Image
            source={require('../assets/images/share.png')}
            style={{
              width: widthPixel(14),
              height: heightPixel(14),
            }}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  articleBottom: {
    paddingTop: heightPixel(15),
    paddingBottom: heightPixel(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  articleBottomCount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  articleBottomCountText: {
    marginLeft: widthPixel(7),
    fontFamily: 'Proxima Nova',
    fontSize: heightPixel(12),
    lineHeight: heightPixel(13.5),
    color: '#545B63',
  },
});

export default ArticleBottom;
