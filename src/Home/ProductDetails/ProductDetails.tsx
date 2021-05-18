import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { Box, Header, useTheme, Text } from "../../Components";
import { HomeNavigationProps } from "../../Components/Navigation";
import ProductDetailsContainer from "./ProductDetailsContainer";
import MySwipeButton from "./../../Components/Form/MySwipeButton";
import RoundedCheckBoxGroup from "./../EditProfile/RoundedCheckBoxGroup";
import ColorItems, { DataColor } from "./ColorItems";

interface ProductDetailsProps {}


const clothingSize = [
  { value: "s" },
  { value: "m" },
  { value: "l" },
  { value: "xl" },
  { value: "xxl" },
];

const data: DataColor[] = [
  { id: 1, color: "drawer1" },
  { id: 2, color: "drawer2" },
  { id: 3, color: "drawer3" },
  { id: 4, color: "drawer4" },
];

const { width } = Dimensions.get("window");

const ProductDetails = ({
  navigation,
}: HomeNavigationProps<"ProductDetails">) => {
  const theme = useTheme();

  return (
    <Box flex={1} backgroundColor="background">
      <Box
        backgroundColor="primaryLight"
        height={300}
        borderBottomRightRadius="xl"
      >
        <Header
          title=""
          left={{ icon: "arrow-left", onPress: () => navigation.goBack() }}
          right={{
            icon: "shopping-bag",
            onPress: () => navigation.navigate("Cart"),
          }}
        />
      </Box>
      <Box flex={1} backgroundColor="primaryLight">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="background"
          borderTopLeftRadius="xl"
          justifyContent="center"
          overflow="hidden"
        >
          <ScrollView
            style={{}}
            showsVerticalScrollIndicator={true}
            contentContainerStyle={{
              width,
              backgroundColor: "#0C0D34",
            }}
          >
            <ProductDetailsContainer>
              <Box flex={1} justifyContent="center" alignItems="center">
                <Box opacity={0.5}>
                  <Text variant="header">LONG PANTS</Text>
                </Box>
                <Box
                  justifyContent="space-evenly"
                  alignItems="center"
                  marginTop="s"
                >
                  <Text variant="title1">Hoxton Woven Jacket</Text>
                  <Text variant="title1" color="primary">
                    $39.99
                  </Text>
                </Box>
                <Box
                  justifyContent="center"
                  alignItems="center"
                  marginTop="s"
                  padding="m"
                  opacity={0.5}
                >
                  <Text variant="body">
                    Step out in a street-ready look with this men's Hoxton Woven
                    Tracksuit from Nike. In a blue colourway, this loose-fit
                    suit is made from lightweight taffeta fabric with a knit
                    mesh lining for a breathable feel.
                  </Text>
                </Box>
                <Box
                  height={91}
                  marginTop="l"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text variant="title2">Select your size</Text>
                  <Box marginTop="s">
                    <RoundedCheckBoxGroup options={clothingSize} />
                  </Box>
                </Box>
                <Box
                  height={137}
                  marginTop="l"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text variant="title2">More colors available</Text>
                  <ColorItems data={data} width={width} />
                </Box>
                <Box marginTop="s">
                  <Box
                    width={242}
                    height={50}
                    backgroundColor="info"
                    marginVertical="m"
                  />
                  {/*
                    https://code.likeagirl.io/creating-tinder-like-swipe-component-with-react-native-3bf15e6be7e3
                  */}
                </Box>
              </Box>
            </ProductDetailsContainer>
            <Box
              flex={1}
              justifyContent="center"
              alignItems="center"
              paddingVertical="m"
            >
              <MySwipeButton label="Swipe to add to bag" onPress={() => true} />
            </Box>
          </ScrollView>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;
