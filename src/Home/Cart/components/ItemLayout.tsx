import React from "react";
import { StyleSheet } from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";
import { Box, Text } from "../../../Components";

export const HEIGHT = 64;
const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 16,
    height: HEIGHT,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#e2e3e4",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    backgroundColor: "#e2e3e4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    fontFamily: "UberMoveMedium",
    fontSize: 16,
    width: 30,
    height: 30,
  },
  title: {
    fontFamily: "UberMoveMedium",
    fontSize: 16,
  },
  price: {
    fontFamily: "UberMoveRegular",
    fontSize: 16,
    marginRight: 8,
  },
});

export interface ItemModel {
  key: string;
  title: string;
  subTitle?:string;
  price?: number;
  size?: string;
}

interface ItemLayoutProps {
  item: ItemModel;
  onToggle: (value) => void;
}

const ItemLayout = ({
  item: { title, price, size },
  onToggle,
}: ItemLayoutProps) => {
  return (
    <Box padding="m" flexDirection="row">
      <Box
        width={120}
        height={120}
        borderRadius="m"
        style={{ backgroundColor: "#BFEAF5" }}
       
      />
      <Box padding="m" flex={1} justifyContent="center">
        <TapGestureHandler
          onHandlerStateChange={() => onToggle(true)}
          numberOfTaps={1}
        >
          <Box flexDirection="row">
            <Text variant="body">Size: </Text>
            <Text variant="body" color="primary">
              {size}
            </Text>
          </Box>
        </TapGestureHandler>

        <Text variant="title3" marginBottom="s">
          {title}
        </Text>
        <Text variant="title3" color="primary">
          {`$${price}`}
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

export default ItemLayout;
