import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Box, Header, useTheme } from "../../Components";
import { HomeNavigationProps } from "../../Components/Navigation";
import CartContainer from "./CartContainer";
import Item from "./Item";
import { Path, Svg } from "react-native-svg";
import { aspectRatio, Text } from "./../../Components/Theme";
import Checkout from "./Checkout";

const { width } = Dimensions.get("window");
const height = 100 * aspectRatio;
const d = "M 0 0 A 50 50 0 0 0 50 50 H 325 A 50 50 0 0 1 375 100 V 0 2";

const defaultItems = [{id:1},{id:2},{id:3}];

const Cart = ({ navigation }: HomeNavigationProps<"Cart">) => {
  const theme = useTheme();
  const [items, setItems] = useState(defaultItems);
  return (
    <CartContainer CheckoutComponent={Checkout}>
      <Box>
        <Box backgroundColor="primary">
          <Header
            dark
            title="Shopping Cart"
            left={{
              icon: "arrow-left",
              onPress: () => navigation.openDrawer(),
            }}
            right={{
              icon: "shopping-bag",
              onPress: () => true,
            }}
          />
        </Box>
      </Box>
      <Box>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 50 * aspectRatio}}
          style={{
            borderBottomLeftRadius: theme.borderRadii.xl,
            borderBottomRightRadius: theme.borderRadii.xl,
          }}
        >
          {items.map((item, index) => (<Item key={item.id} onDelete={() => {
            items.splice(index, 1);
            setItems(items.concat());
          }} />))}
        </ScrollView>
        <Box
          style={{
            position: "absolute",
            top:0,
            left: 0,
            right: 0,
            height,
          }}
        >
          <Svg style={StyleSheet.absoluteFill} viewBox="0 0 375 100">
            <Path d={d} fill={theme.colors.primary} />
          </Svg>
          <Text variant="title2" textAlign="center" color="background">
            3 Items added
          </Text>
        </Box>
      </Box>
    </CartContainer>
  );
};

export default Cart;
