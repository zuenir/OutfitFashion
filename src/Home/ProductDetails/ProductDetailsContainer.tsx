import React, { ReactNode } from "react";
import { Dimensions, View } from "react-native";
import Animated from "react-native-reanimated";
import { Box, useTheme } from "../../Components";
import MySwipeButton from "./../../Components/Form/MySwipeButton";

interface ProductDetailsContainerProps {
  children: ReactNode;
}

const { width } = Dimensions.get("window");
const aspectRatio = width / 375;
const height = 760 * aspectRatio; //821
const minHeight = 128 * aspectRatio;

const ProductDetailsContainer = ({children}:ProductDetailsContainerProps) => {
  const theme = useTheme();

  return (
    <Box flex={1}  height={height}>
      <View
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
          ,
        ]}
      >
        {children}
        <View
          style={{
            position:"absolute",
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
      </View>
    </Box>
  );
};

export default ProductDetailsContainer;
