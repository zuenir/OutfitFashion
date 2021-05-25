import React, { ReactNode } from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Animated as AnimatedEffect,
  I18nManager,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { aspectRatio, Box, useTheme } from "../../../Components/Theme";
import { RoundedIconButton, RoundedIcons } from "../../../Components";
import Swipeable from "react-native-gesture-handler/Swipeable";

interface SwipeableRowProps {
  children: ReactNode;
  onDelete?: () => void;
  onAdd?: () => void;
  onSub?: () => void;
}

const { width } = Dimensions.get("window");
const finalDestination = width;
const editWidth = 85 * aspectRatio;

const RenderLeftActions = ({ _progress, dragX }) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  return (
    <View style={styles.leftAction}>
      <AnimatedEffect.View style={[{ transform: [{ scale }] }]}>
        <View style={{ flex: 1 }}>
          <Box
            justifyContent="space-evenly"
            alignItems="center"
            flex={1}
            width={editWidth}
            padding="m"
          >
            <RoundedIcons
              name="x"
              size={24}
              color="background"
              backgroundColor="danger"
            />
          </Box>
        </View>
      </AnimatedEffect.View>
    </View>
  );
};
const RenderRightActions = ({ _progress, dragX, onAdd, onSub }) => {
  const scale = dragX.interpolate({
    inputRange: [-80, 0],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  return (
    <View style={styles.rightAction}>
      <AnimatedEffect.View style={[{ transform: [{ scale }] }]}>
        <View style={{ flex: 1 }}>
          <Box
            justifyContent="space-evenly"
            alignItems="center"
            alignSelf="flex-end"
            flex={1}
            width={editWidth}
            padding="m"
          >
            <RoundedIconButton
              onPress={onAdd}
              name="plus"
              size={24}
              color="background"
              backgroundColor="primary"
            />
            <RoundedIconButton
              onPress={onSub}
              name="minus"
              size={24}
              color="background"
              backgroundColor="danger"
            />
          </Box>
        </View>
      </AnimatedEffect.View>
    </View>
  );
};

export const SwipeableRow = ({
  children,
  onDelete,
  onAdd,
  onSub,
}: SwipeableRowProps) => {
  return (
    <View>
      <Swipeable
        friction={1}
        leftThreshold={100}
        rightThreshold={80}
        renderLeftActions={(_progress, dragX) => (
          <RenderLeftActions _progress={_progress} dragX={dragX}/>
        )}
        renderRightActions={(_progress, dragX) => (
          <RenderRightActions
            _progress={_progress}
            dragX={dragX}
            onAdd={onAdd}
            onSub={onSub}
          />
        )}
        onSwipeableLeftOpen={() => onDelete()}
      >
        {children}
      </Swipeable>
    </View>
  );
};

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: I18nManager.isRTL ? "row" : "row-reverse",
  },
  rightAction: {
    alignItems: "center",
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    justifyContent: "flex-end",
  },
});
