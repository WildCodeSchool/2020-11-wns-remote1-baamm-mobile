import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { images, theme } from '../../constants';
const { onboarding1, onboarding2, onboarding3 } = images;

const { COLORS, FONTS, SIZES } = theme;

const onBoardings = [
  {
    title: "Lets's Call us",
    description: 'Amet ex dolore exercitation id.',
    img: onboarding1,
  },
  {
    title: "Lets's Call us",
    description: 'Amet ex dolore exercitation id.',
    img: onboarding2,
  },
  {
    title: "Slowly but surely",
    description: 'Amet ex dolore exercitation id. ',
    img: onboarding3,
  },
];

const OnBoarding = ({navigation} : any) => {

  const scrollX = new Animated.Value(0);

  function renderContent() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        snapToAlignment="center"
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: scrollX } } },
      ], { useNativeDriver: false })}
      >
        {onBoardings.map((item, index) => (
          <View key={index} style={{ width: SIZES.width }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                source={item.img}
                resizeMode="cover"
                style={{
                  width: '100%',
                  height: '50%',
                  marginBottom: 14
                }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: '10%',
                left: 40,
                right: 40,
              }}
            >
              <Text
                style={{
                  ...FONTS.h1,
                  color: COLORS.purple,
                  textAlign: 'center',
                  marginTop: 4
                }}
              >
                {item.title}
              </Text>

              <Text
                style={{
                  ...FONTS.body3,
                  textAlign: 'center',
                  marginTop: SIZES.base,
                  color: COLORS.gray,
                  zIndex: 999999,
                }}
              >
                {item.description}
              </Text>
            </View>
            {/* Button */}
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: 150,
                height: 60,
                paddingLeft: 20,
                justifyContent: 'center',
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
                backgroundColor: COLORS.purple,
              }}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={{ ...FONTS.h2, color: COLORS.white, textAlign: "center" }}>Sign In</Text>
            </TouchableOpacity>
          </View>
        ))}
      </Animated.ScrollView>
    );
  }

  function renderDots() {

    const dotPosition = Animated.divide(scrollX, SIZES.width)

    return (
      <View style={styles.dotContainer}>
        {onBoardings.map((item, index) => {


          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp"
        });

        const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [SIZES.base, 17, SIZES.base],
            extrapolate: "clamp"
        });

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[styles.dot, { width: dotSize, height: dotSize }]}
            ></Animated.View>
          )
        })}
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>{renderContent()}</View>
      <View style={styles.dotsRootContainer}>{renderDots()}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  dot: {
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.purple,
    marginHorizontal: SIZES.radius / 2,
  },
  dotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.padding / 2,
    marginBottom: SIZES.padding * 3,
    height: SIZES.padding,
  },
  dotsRootContainer: {
    position: 'absolute',
    bottom: SIZES.height > 700 ? '16%' : '16%',
},
});

export default OnBoarding;
