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
import { useTiming } from "react-native-redash";
import RoundedCard from "../OutfitDetails/RoundedCard";

interface ProductDetailsProps {}

const clothingSize = [
  { value: "s" },
  { value: "m" },
  { value: "l" },
  { value: "xl" },
  { value: "xxl" },
];

const data: DataColor[] = [
  { id: 1, color: "primaryLight" },
  { id: 2, color: "primaryLight" },
  { id: 3, color: "primaryLight" },
  { id: 4, color: "primaryLight" },
];

const cards = [
  {
    index: 3,
    title: "",
  },
  {
    index: 2,
    title: "",
  },
  {
    index: 1,
    title: "",
  },
  {
    index: 0,
    title: "+13",
  },
];
const step = 1 / (cards.length - 1);

const { width } = Dimensions.get("window");

const ProductDetails = ({
  navigation,
}: HomeNavigationProps<"ProductDetails">) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const aIndex = useTiming(currentIndex);

  return (
    <Box flex={1} backgroundColor="background">
      <Box
        backgroundColor="primaryLight"
        height={300}
        borderBottomLeftRadius="xl"
      >
        <Header
          title=""
          left={{ icon: "arrow-left", onPress: () => navigation.goBack() }}
          right={{
            icon: "shopping-bag",
            onPress: () => navigation.navigate("Cart"),
          }}
          countCart={4}
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
          borderTopRightRadius="xl"
          justifyContent="center"
          overflow="hidden"
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              width,
              backgroundColor: "#0C0D34",
            }}
          >
            <ProductDetailsContainer>
              <Box
                flex={1}
                justifyContent="center"
                alignItems="center"
                marginTop="m"
              >
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
                  flex={1}
                  height={137}
                  marginTop="l"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text variant="title2">More colors available</Text>
                  <ColorItems data={data} width={width} />
                </Box>
                <Box flex={1}>
                  <View
                    style={{
                      flex: 1,
                      width: 300,
                      height: 50,
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      width={140}
                      height={50}
                      justifyContent="center"
                      alignItems="center"
                      style={{ marginLeft: 10 }}
                    >
                      {cards.map(
                        ({ index, title }) =>
                          currentIndex < index * step + step && (
                            <RoundedCard
                              key={index}
                              index={index}
                              aIndex={aIndex}
                              step={step}
                              title={title}
                            />
                          )
                      )}
                    </Box>
                    <Box width={150} height={50} justifyContent="center">
                      <Text variant="body">
                        Mike Peter and 12 others like this outfit
                      </Text>
                    </Box>
                  </View>
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
