import React, { FC, ReactNode, useState } from "react";
import { Dimensions, View } from "react-native";
import { Box, useTheme } from "../../Components";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { clamp, snapPoint } from "react-native-redash";
import { withSpring } from "react-native-reanimated";

const { width } = Dimensions.get("window");
const aspectRatio = width / 375;
const height = 560 * aspectRatio;
const minHeight = 128 * aspectRatio;
const snapPoints = [-(height - minHeight), 0];

interface CartProps {
  children: ReactNode;
  CheckoutComponent: FC<{ minHeight: number; checkoutState: boolean }>;
}

const Cart = ({ children, CheckoutComponent}: CartProps) => {
  const theme = useTheme();
  const translateY = useSharedValue(0);
  const [toggleState, setToggleState] = useState(false);
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
        if (translateY.value < -350) {
          setToggleState(true);
        } else if (translateY.value == 0) {
          setToggleState(false);
        }
      });
    },
  });

  const style = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Box flex={1}>
      <CheckoutComponent minHeight={minHeight} checkoutState={toggleState} />
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[
            {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height,
              backgroundColor: "white",
              borderBottomLeftRadius: theme.borderRadii.xl,
              borderBottomRightRadius: theme.borderRadii.xl,
            },
            style,
          ]}
        >
          {children}
          <View
            style={{
              bottom: 0,
              left: 0,
              right: 0,
              height: 40,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 7 * aspectRatio,
                backgroundColor: theme.colors.background2,
                width: 60 * aspectRatio,
                borderRadius: 2.5 * aspectRatio,
                marginBottom: theme.spacing.m,
              }}
            />
          </View>
        </Animated.View>
      </PanGestureHandler>
    </Box>
  );
};

export default Cart;
