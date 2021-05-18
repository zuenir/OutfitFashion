import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import {
  PanGestureHandler,
  TapGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { clamp, snapPoint } from "react-native-redash";
import { useTheme } from "..";
import { aspectRatio, Box, SPRING_CONFIG } from "../Theme";

interface BottomActionSheetProps {
  children: ReactNode;
  translateY: Animated.SharedValue<number>;
}

const height = 220;
const minHeight = 0;
const heightBottomSheet = 300;
const snapPoints = [height - minHeight, 0];

const BottomActionSheet = ({
  children,
  translateY,
}: BottomActionSheetProps) => {
  const theme = useTheme();

  const styleUnderlay = useAnimatedStyle(() => ({
    flex: 1,
    backgroundColor: "#000000AA",
    justifyContent: "flex-end",
    zIndex: interpolate(
      translateY.value,
      [0, 299, 300],
      [1, 1, -1],
      Extrapolate.CLAMP
    ),
  }));

  const gestureHandler = useAnimatedGestureHandler<{ y: number }>({
    onStart: (_, ctx) => {
      ctx.y = translateY.value;
    },
    onActive: ({ translationY }, ctx) => {
      translateY.value = clamp(
        ctx.y + translationY,
        snapPoints[0],
        snapPoints[1]
      );
    },
    onEnd: ({ velocityY }) => {
      const dest = snapPoint(translateY.value, velocityY, snapPoints);
      translateY.value = withSpring(dest, { overshootClamping: true }, () => {
        if (translateY.value === 220) {
          translateY.value = withTiming(300, { duration: 150 });
        }
      });
    },
  });

  const style = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Box flex={1} style={StyleSheet.absoluteFill}>
      <TapGestureHandler
        onHandlerStateChange={() => {
          translateY.value = withSpring(heightBottomSheet, SPRING_CONFIG);
        }}
        numberOfTaps={1}
      >
        <Animated.View style={styleUnderlay} />
      </TapGestureHandler>

      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[
            {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 220,
              justifyContent: "flex-end",
              alignItems: "center",
              backgroundColor: "white",
              borderTopLeftRadius: theme.borderRadii.xl,
              borderTopRightRadius: theme.borderRadii.xl,
              zIndex: 100,
            },
            style,
          ]}
        >
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 40,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 7 * aspectRatio,
                backgroundColor: theme.colors.background2,
                width: 60 * aspectRatio,
                borderRadius: 2.5 * aspectRatio,
                marginTop: theme.spacing.m,
              }}
            />
            {children}
          </View>
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

export default BottomActionSheet;
