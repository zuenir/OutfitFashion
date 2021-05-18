import React from "react";
import { StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { clamp } from "react-native-redash";
import { Text } from "..";

interface MySwipeButtonProps {
  label: string;
  onPress: () => void;
}

const BUTTON_WIDTH = 300;
const BUTTON_HEIGHT = 50;
const BUTTON_PADDING = 5;
const MINBUTTON_WIDTH = 50;
const FINALDESTINATION = BUTTON_WIDTH - MINBUTTON_WIDTH;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;

const H_SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;

const snapPoints = [0, BUTTON_WIDTH - MINBUTTON_WIDTH];

const iconSwipe = require("../../../assets/Icons/icon-swipe.png");

const MySwipeButton = ({ label, onPress }: MySwipeButtonProps) => {
  const translateX = useSharedValue(0);
  const InterpolateXInput = [0, H_SWIPE_RANGE];
  const gestureHandler = useAnimatedGestureHandler<{ x: number }>({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
    },
    onActive: ({ translationX }, ctx) => {
      translateX.value = clamp(
        ctx.x + translationX,
        snapPoints[0],
        snapPoints[1]
      );
    },
    onEnd: () => {
      if (translateX.value < BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS / 2) {
        translateX.value = withSpring(0, { overshootClamping: true });
      } else {
        translateX.value = withSpring(
          H_SWIPE_RANGE,
          {
            overshootClamping: true,
          },
          () => {
            if (translateX.value === FINALDESTINATION) {
              translateX.value = withTiming(
                FINALDESTINATION,
                { duration: 1 },
                () => onPress()
              );
            }
          }
        );
      }
    },
  });

  const AnimatedStyles = {
    swipeable: useAnimatedStyle(() => {
      return {
        transform: [{ translateX: translateX.value }],
      };
    }),
    swipeText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          translateX.value,
          InterpolateXInput,
          [1, 0],
          Extrapolate.CLAMP
        ),
      };
    }),
  };

  return (
    <Animated.View style={styles.swipeCont}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.swipeable, AnimatedStyles.swipeable]}>
          <Animated.Image
            style={{ width: 15, height: 15 }}
            source={iconSwipe}
          />
        </Animated.View>
      </PanGestureHandler>
      <Animated.Text
        style={[
          { justifyContent: "center", alignItems: "center" },
          AnimatedStyles.swipeText,
        ]}
      >
        <Text variant="button" color="background">
          {label}
        </Text>
      </Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  swipeCont: {
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    padding: BUTTON_PADDING,
    backgroundColor: "#2CB9B0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: BUTTON_HEIGHT,
  },
  swipeable: {
    position: "absolute",
    left: BUTTON_PADDING,
    height: SWIPEABLE_DIMENSIONS,
    width: SWIPEABLE_DIMENSIONS,
    borderRadius: SWIPEABLE_DIMENSIONS,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 3,
  },
});

export default MySwipeButton;
