import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('screen');

const SLIDER_HEIGHT = Dimensions.get('screen').height * 0.27

const SlideItem = ({item}) => {
  const translateYImage = new Animated.Value(40);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{uri: item.thumbnail}}
        resizeMode="contain"
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />

     
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height: SLIDER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#332B2B'
  },
  image: {
    flex: 1,
    width: '90%',
  },
  content: {
    flex: 0.3,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center'
  },
  description: {
    textAlign: 'center'
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});