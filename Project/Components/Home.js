import React, { useState, useRef } from 'react';
import { ScrollView, StyleSheet, Animated } from 'react-native';

import { heightPixel } from './responsive';
import HomeHeader from './HomeHeader';
import Feed from './Feed';
import BottomTabs from './BottomTabs';
import { feedData } from './sampleData';
import LatestArticles from './LatestArticles';
import SharePostModal from './SharePostModal';
import Options from './Options';
import NewPost from './NewPost';
import SafeAreaView from 'react-native-safe-area-view';

const Home = () => {
  const offset = useRef(new Animated.Value(0)).current;

  const [feedsData, setFeedsData] = useState(feedData);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [newPost, setNewPost] = useState(false);

  const onClickShare = () => {
    setShowShareModal(!showShareModal);
  };

  const onClickNew = () => {
    setNewPost(!newPost);
  };

  const onClickOptions = () => {
    setShowOptionsModal(!showOptionsModal);
  };

  const updateFeed = (data) => {
    console.log('update feed called', data);
    var newData = feedsData.map((item) => {
      if (item.id === data.id) {
        return {
          ...item,
          selfLiked: !item.selfLiked,
          likesCount: item.selfLiked
            ? item.likesCount - 1
            : item.likesCount + 1,
        };
      } else {
        return item;
      }
    });
    console.log(newData);
    setFeedsData(newData);
  };

  return (
    <SafeAreaView>
      <SharePostModal
        visible={showShareModal}
        hideModal={() => {
          onClickShare();
        }}
      />
      <Options
        visible={showOptionsModal}
        hideModal={() => {
          onClickOptions();
        }}
      />
      <NewPost
        visible={newPost}
        hideModal={() => {
          onClickNew();
        }}
      />

      <HomeHeader animatedValue={offset} />
      <ScrollView
        style={styles.container}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: offset },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        bounces={false}
      >
        {feedsData.map((item, index) => {
          if (index === 3) {
            return <LatestArticles />;
          } else {
            return (
              <Feed
                data={item}
                onClickShare={() => {
                  onClickShare();
                }}
                onClickOptions={() => {
                  onClickOptions();
                }}
                feedUpdated={(data) => {
                  updateFeed(data);
                }}
              />
            );
          }
        })}
      </ScrollView>
      <BottomTabs
        onClickNew={() => {
          onClickNew();
        }}
        newPost={newPost}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#E5E5E5',
  },
  topContainer: {
    width: '100%',
    height: '15%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    fontSize: heightPixel(50),
  },
  center: {
    alignItems: 'center',
  },
  headingStyle: {
    fontSize: heightPixel(30),
    color: '#2D82B7',
  },
  scoreStyle: {
    fontSize: heightPixel(50),
    color: 'white',
  },
});

export default Home;
