import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ArticleBottom from './ArticleBottom';
import MemberPictures from './MemberPictures';
import ReactionTab from './ReactionTab';
import { heightPixel, widthPixel } from './responsive';

const Feed = ({ data, onClickShare, onClickOptions }) => {
  const [reactionTabVisible, setReactionTabVisible] = useState(false);
  const likePressed = () => {
    setReactionTabVisible(!reactionTabVisible);
  };

  return (
    <>
      <View style={styles.wrapperContainer}>
        {reactionTabVisible && (
          <ReactionTab
            hideTab={() => {
              likePressed();
            }}
          />
        )}
        <View style={styles.topHead}>
          <Text style={styles.topLeftText}>{data.category}</Text>
          <Text style={styles.topLeftText}>{data.time}</Text>
        </View>
        <View style={styles.profileHeader}>
          <View>
            <Image
              source={data.profilePicture}
              style={{
                width: heightPixel(40),
                height: heightPixel(40),
                borderRadius: heightPixel(40),
              }}
              resizeMode={'contain'}
            />
          </View>
          <View style={{ marginLeft: widthPixel(10) }}>
            <View style={styles.topCenterUpperBox}>
              <Text style={styles.name}>{data.username}</Text>
              <Text style={styles.title}>{data.activityName}</Text>
            </View>
            <View style={styles.topCenterLowerBox}>
              <Text style={styles.tag}>{data.tag}</Text>
            </View>
          </View>
          <View style={{ marginLeft: 'auto' }}>
            <TouchableOpacity
              onPress={() => {
                onClickOptions();
              }}
            >
              <Image
                source={require('../assets/images/threeDots.png')}
                style={{
                  width: widthPixel(3.5),
                  height: heightPixel(16),
                }}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
        </View>
        {data.articleTitle.length !== 0 && (
          <View style={styles.articleHeading}>
            <Text style={styles.articleTextStyle}>{data.articleTitle}</Text>
          </View>
        )}
        {data.articleDetails.length !== 0 && (
          <View style={styles.articleDescription}>
            <Text style={styles.descriptionTextStyle}>
              {data.articleDetails}
            </Text>
          </View>
        )}
        {data.photoSection === true && (
          <>
            <Text style={styles.hashtags}>{data.hashtags}</Text>
            <View style={styles.imageContainer}>
              <Image source={data.photo} resizeMode={'cover'} />
            </View>
          </>
        )}
        {data.questionSection === true && (
          <View style={styles.questionContainer}>
            {data.questionData.map((item) => {
              return (
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                  <View
                    style={[
                      styles.floatingQuestionsTab,
                      { width: widthPixel(243 * (item.percentage / 100)) },
                    ]}
                  ></View>
                  <View style={[styles.questionTab]}>
                    <Text>{item.title}</Text>
                  </View>
                  <Text style={styles.percentageStyle}>
                    {item.percentage} %
                  </Text>
                </View>
              );
            })}
            <Text style={styles.polls}>
              {data.pollCount} Votes . Poll Ended
            </Text>
          </View>
        )}

        {data.location.length !== 0 && (
          <View style={styles.articleLocation}>
            <Image
              source={require('../assets/images/location.png')}
              style={{
                width: widthPixel(7.5),
                height: heightPixel(9),
              }}
              resizeMode={'contain'}
            />
            <Text style={styles.locationText}>{data.location}</Text>
          </View>
        )}
        <View style={styles.membersSection}>
          <MemberPictures />
          <Text style={styles.membersText}>24 members have this question</Text>
        </View>
        <ArticleBottom
          likePressed={() => {
            likePressed();
          }}
          likesCount={24}
          commentsCount={24}
          onClickShare={() => {
            onClickShare();
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapperContainer: {
    width: widthPixel(360),
    paddingVertical: heightPixel(17),
    paddingHorizontal: widthPixel(15),
    backgroundColor: '#FFFFFF',
    marginBottom: heightPixel(10),
  },
  topHead: {
    height: heightPixel(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topLeftText: {
    fontFamily: 'Proxima Nova',
    fontSize: heightPixel(12),
    lineHeight: heightPixel(13.46),
    color: '#A5B1C2',
  },
  topRightText: {
    fontFamily: 'Proxima Nova',
    fontSize: heightPixel(12),
    lineHeight: heightPixel(15.5),
    color: '#545B63',
  },
  profileHeader: {
    height: heightPixel(40),
    marginTop: heightPixel(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  topCenterUpperBox: {
    flexDirection: 'row',
  },
  topCenterLowerBox: {
    paddingTop: heightPixel(4),
  },
  name: {
    fontFamily: 'Proxima Nova',
    fontWeight: '700',
    fontSize: heightPixel(14),
    lineHeight: heightPixel(15.5),
    color: '#545B63',
  },
  title: {
    fontFamily: 'Proxima Nova',
    fontWeight: '400',
    fontSize: heightPixel(12),
    lineHeight: heightPixel(15.5),
    color: '#545B63',
  },
  tag: {
    fontFamily: 'Proxima Nova',
    fontSize: heightPixel(10),
    lineHeight: heightPixel(12.18),
    color: '#00A981',
  },
  articleHeading: {
    paddingTop: heightPixel(15),
  },
  articleTextStyle: {
    fontFamily: 'Proxima Nova',
    fontSize: heightPixel(16),
    fontWeight: '900',
    lineHeight: heightPixel(19.5),
    color: '#545B63',
  },
  descriptionTextStyle: {
    fontFamily: 'Proxima Nova',
    fontWeight: '400',
    fontSize: heightPixel(14),
    lineHeight: heightPixel(21),
    color: '#545B63',
  },
  articleDescription: {
    paddingTop: heightPixel(5),
  },
  articleLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: heightPixel(10),
  },
  locationText: {
    marginLeft: widthPixel(8),
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: heightPixel(10),
    lineHeight: heightPixel(12),
    color: '#00A981',
  },
  membersSection: {
    marginTop: heightPixel(10),
    paddingVertical: heightPixel(10),
    height: heightPixel(40),
    borderTopColor: '#E8EBEF',
    borderTopWidth: 1,
    borderBottomColor: '#E8EBEF',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  membersText: {
    marginLeft: widthPixel(10),
    fontFamily: 'Proxima Nova',
    fontWeight: '400',
    fontSize: heightPixel(12),
    lineHeight: heightPixel(14.5),
    color: '#545B63',
  },
  imageContainer: {
    width: '100%',
    height: 'auto',
    paddingBottom: heightPixel(10),
    paddingTop: heightPixel(13),
  },
  hashtags: {
    fontFamily: 'Proxima Nova',
    fontWeight: '400',
    fontSize: heightPixel(16),
    lineHeight: heightPixel(21),
    color: 'blue',
  },
  questionTab: {
    minHeight: heightPixel(31),
    width: widthPixel(243),
    flexDirection: 'row',
    paddingLeft: widthPixel(10),
    paddingVertical: heightPixel(9),
    marginVertical: heightPixel(5),
  },
  questionContainer: {
    marginVertical: heightPixel(20),
    // flexDirection: 'row',
  },
  percentageStyle: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: heightPixel(12),
    lineHeight: heightPixel(16.8),
    color: '#545B63',
    marginLeft: 'auto',
    marginRight: widthPixel(20),
  },
  floatingQuestionsTab: {
    marginVertical: heightPixel(9),
    height: heightPixel(40),
    backgroundColor: '#E8EBEF',
    position: 'absolute',
    // opacity: 0.8,
  },
  polls: {
    fontFamily: 'Proxima Nova',
    fontSize: heightPixel(14),
    lineHeight: heightPixel(18.7),
    color: '#A5B1C2',
  },
});

export default Feed;
