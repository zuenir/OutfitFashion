import React from "react";
import {
  StyleSheet,
  Dimensions,
  ImageRequireSource,
} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, { add, Extrapolate, interpolateNode } from "react-native-reanimated";
import {
  mix,
  mixColor,
  usePanGestureHandler,
  withSpring
} from "react-native-redash/lib/module/v1";
import { Box } from "../../Components";
import { useSpring } from "./Animations";

interface CardProps {
  position: Animated.Adaptable<number>;
  onSwipe: () => void;
  source: ImageRequireSource;
  step: number;
}

const { width: Wwidth } = Dimensions.get("window");
const width = Wwidth * 0.60;
const height = width * (425 / 294);
const borderRadius = 24;

const Card = ({ position, onSwipe, source, step }: CardProps) => {
  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();
  const backgroundColor = mixColor(position, "#C9E9E7", "#74BCBB");
  const translateYOffset = mix(position, 0, -50);
  const scale = mix(position, 1, 0.9);
  const imageScale = interpolateNode(position, {
      inputRange: [0, step],
      outputRange: [1.2, 1],
      extrapolate: Extrapolate.CLAMP
  });
  const translateX = useSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-Wwidth, 0, Wwidth],
    onSnap: ([x]) => x !== 0 ?? onSwipe(),
  });
  const translateY = add(
    translateYOffset,
    withSpring({
      value: translation.y,
      velocity: velocity.y,
      state,
      snapPoints: [0],
    })
  );

  return (
    <Box
      style={StyleSheet.absoluteFill}
      justifyContent="center"
      alignItems="center"
    >
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            backgroundColor,
            width,
            height,
            borderRadius,
            transform: [{ translateY }, { translateX }, { scale }],
            overflow: "hidden",
          }}
        >
          <Animated.Image
            {...{ source }}
            style={{
              ...StyleSheet.absoluteFillObject,
              width: undefined,
              height: undefined,
              transform: [{ scale: imageScale }],
            }}
          />
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

export default Card;
