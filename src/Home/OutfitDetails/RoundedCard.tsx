import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useDerivedValue } from "react-native-reanimated";
import { mixColor } from "react-native-redash";
import { useSharedValue } from "react-native-reanimated";
import { Box, Text } from "../../Components";
import { mix } from "react-native-redash";

interface RoundedCardProps {
  step: number;
  index: number;
  aIndex: Animated.SharedValue<number>;
  title: string;
}

const width = 40;
const height = 40;
const borderRadius = 20;

const RoundedCard = ({ step, index, aIndex, title }: RoundedCardProps) => {
  const position = useDerivedValue(() => index * step - aIndex.value);
  const translateX = mix(position.value, 20, -70);
  const backgroundColor = mixColor(position.value, "#2CB9B0", "#C4C4C4");

  return (
    <View style={{ justifyContent: "center", alignItems: "flex-end" }}>
      <Box
        style={StyleSheet.absoluteFill}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Animated.View
          style={{
            backgroundColor,
            width,
            height,
            borderRadius,
            borderColor: "white",
            borderWidth: 1,
            transform: [{ translateX }],
          }}
        >
          <Box
            justifyContent="center"
            alignItems="center"
            style={{ transform: [{ translateY: 7 }] }}
          >
            <Text variant="button" color="background">
              {title}
            </Text>
          </Box>
        </Animated.View>
      </Box>
    </View>
  );
};

export default RoundedCard;
