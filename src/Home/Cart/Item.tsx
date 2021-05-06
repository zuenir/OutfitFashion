import React, { ReactEventHandler, useState } from "react";
import {
  TapGestureHandler,
  State,
  TapGestureHandlerStateChangeEvent,
} from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { Box, Text, useTheme } from "../../Components";
import { SwipeableRow } from "./SwipeableRow";

interface ItemProps {
  onDelete: () => void;
  onToggle: (value) => void;
}

const Item = ({ onDelete, onToggle }: ItemProps) => {
  const theme = useTheme();
  const height = 120 + theme.spacing.m * 2;

  return (
    <Box padding="m" flexDirection="row">
      <Box
        width={120}
        height={120}
        borderRadius="m"
        style={{ backgroundColor: "#BFEAF5" }}
      />
      <Box padding="m" flex={1} justifyContent="center">
        <TapGestureHandler onHandlerStateChange={() => onToggle(true)} numberOfTaps={1}>
          <Box flexDirection="row">
            <Text variant="body">Size: </Text>
            <Text variant="body" color="primary">
              M, L
            </Text>
          </Box>
        </TapGestureHandler>
        <Text variant="title3" marginBottom="s">
          Short Sleeve Organic
        </Text>
        <Text variant="title3" color="primary">
          $29.99
        </Text>
      </Box>
      <Box justifyContent="center">
        <Box
          backgroundColor="secundary"
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 24,
            height: 24,
            borderRadius: 12,
          }}
        >
          <Text variant="header" color="background">
            x2
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Item;
