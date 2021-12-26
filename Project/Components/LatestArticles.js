import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { heightPixel, widthPixel } from './responsive';
import { cardData } from './sampleData';

const LatestArticles = () => {
  return (
    <>
      <Text style={styles.title}>LATEST ARTICLES</Text>
      <ScrollView
        style={styles.wrapper}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {cardData.map((data) => {
          return (
            <View style={styles.articleCard}>
              <View style={styles.topContainer}>
                <View style={[styles.imgContainer]}>
                  <Image
                    source={data.profilepicture}
                    resizeMode={'cover'}
                    style={{ width: heightPixel(24), width: widthPixel(24) }}
                  />
                </View>
                <Text style={styles.name}>{data.name}</Text>
              </View>
              <View style={styles.description}>
                <Text syle={styles.descriptionText}>{data.details}</Text>
              </View>
              <View style={styles.divider}></View>
              <View style={styles.bottomContainer}>
                <Text style={styles.bottomText}>READ ARTICLE</Text>
                <Image
                  source={require('../assets/images/arrow.png')}
                  resizeMode={'cover'}
                  style={{ width: heightPixel(8), width: heightPixel(8) }}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: heightPixel(25),
  },
  title: {
    paddingLeft: widthPixel(15),
    paddingTop: heightPixel(25),
    pad: heightPixel(15),
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: heightPixel(12),
    lineHeight: heightPixel(13),
    color: '#545B63',
  },
  articleCard: {
    width: widthPixel(268),
    marginLeft: widthPixel(15),
    paddingHorizontal: widthPixel(10),
    paddingVertical: heightPixel(10),
    backgroundColor: '#FFFFFF',
    shadowColor: '#A5B1C2',
    borderRadius: heightPixel(8),
  },
  imgContainer: {
    width: heightPixel(24),
    height: heightPixel(24),
    borderRadius: heightPixel(24),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginLeft: widthPixel(10),
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: heightPixel(16),
    lineHeight: heightPixel(19.2),
    color: '#545B63',
  },
  divider: {
    width: '100%',
    height: heightPixel(2),
    backgroundColor: '#E8EBEF',
    marginVertical: heightPixel(10),
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomText: {
    fontFamily: 'Proxima Nova',
    fontSize: heightPixel(14),
    lineHeight: heightPixel(15.7),
    color: '#00A981',
  },
  descriptionText: {
    fontFamily: 'Proxima Nova',
    fontWeight: '400',
    fontSize: heightPixel(12),
    lineHeight: heightPixel(16.8),
    color: '#00A981',
  },
});

export default LatestArticles;
