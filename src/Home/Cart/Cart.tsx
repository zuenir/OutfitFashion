import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Box, Header, MyButton, useTheme } from "../../Components";
import CartContainer from "./CartContainer";
import Item from "./components/Item";
import { Path, Svg } from "react-native-svg";
import { aspectRatio, SPRING_CONFIG, Text } from "./../../Components/Theme";
import Checkout from "./Checkout";
import { HomeNavigationProps } from "../../Components/Navigation";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import BottomActionSheet from "../../Components/Form/BottomActionSheet";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import CheckBoxGroup from "./../EditProfile/CheckBoxGroup";
import MySwipeButton from "../../Components/Form/MySwipeButton";

const heightBottomSheet = 0;
const height = 100 * aspectRatio;
const d = "M 0 0 A 50 50 0 0 0 50 50 H 325 A 50 50 0 0 1 375 100 V 0 2";
const defaultItems = [
  { key: "1", title: "Short Sleeve Organic Top", price: 29.99, size: "M, L" },
  { key: "2", title: "Crew Neck Sweatshirt", price: 18.79, size: "M, L" },
  { key: "3", title: "No Broken Hearts Shirt", price: 45.09, size: "M, XL" },
  { key: "4", title: "Cubano Shirt", price: 21.15, size: "S,M" },
];
const defaultSize = [
  { value: "s", label: "S" },
  { value: "m", label: "M" },
  { value: "l", label: "l" },
  { value: "xl", label: "XL" },
  { value: "xxl", label: "XXL" },
];

const Cart = ({ navigation }: HomeNavigationProps<"Cart">) => {
  const theme = useTheme();
  const [items, setItems] = useState(defaultItems);
  const [toggleState, setToggleState] = useState(false);
  const translateY = useSharedValue(300);

  const handleToggle = (value) => {
    setToggleState(value);
    if (toggleState === true) {
      translateY.value = withSpring(heightBottomSheet, SPRING_CONFIG);
    }
  };

  return (
    <Box flex={1}>
      <CartContainer CheckoutComponent={Checkout}>
        <Box>
          <Box backgroundColor="primary">
            <Header
              dark
              title="Shopping Cart"
              left={{
                icon: "arrow-left",
                onPress: () => navigation.goBack(),
              }}
              right={{
                icon: "shopping-bag",
                onPress: () => true,
              }}
              countCart={4}
            />
          </Box>
        </Box>
        <Box flex={1} style={{ paddingHorizontal: 16 }}>
          <ScrollView
            style={{
              flex: 1,
              borderBottomLeftRadius: theme.borderRadii.xl,
              borderBottomRightRadius: theme.borderRadii.xl,
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 50 * aspectRatio }}
          >
            {items.map((item, index) => (
              <Item
                key={item.key}
                item={item}
                onDelete={() => {
                  items.splice(index, 1);
                  setItems(items.concat());
                }}
                onToggle={handleToggle}
              />
            ))}
          </ScrollView>

          <Box
            style={{
              position: "absolute",
              top: -3,
              left: 0,
              right: 0,
              height,
            }}
          >
            <Svg style={StyleSheet.absoluteFill} viewBox="0 0 375 100">
              <Path d={d} fill={theme.colors.primary} />
            </Svg>
            <Text variant="title2" textAlign="center" color="background">
              4 Items added
            </Text>
          </Box>
        </Box>
      </CartContainer>

      {toggleState && (
        <BottomActionSheet translateY={translateY}>
          <Box paddingVertical="m" alignItems="center">
            <Text variant="title1">Change item size</Text>
            <CheckBoxGroup options={defaultSize} radio />
            <Box style={{ marginTop: 10 }}>
              <MySwipeButton
                label="Swipe to applay changes"
                onPress={() => {
                  if (toggleState === true) {
                    translateY.value = withSpring(300, SPRING_CONFIG);
                  }
                }}
              />
            </Box>
          </Box>
        </BottomActionSheet>
      )}
    </Box>
  );
};

export default Cart;

//https://www.youtube.com/watch?v=Mm30RFp0qhc&list=PLkOyNuxGl9jyhndcnbFcgNM81fZak7Rbw&index=5

//https://www.youtube.com/watch?v=1d8a_NZ9l1E&t=1691s
