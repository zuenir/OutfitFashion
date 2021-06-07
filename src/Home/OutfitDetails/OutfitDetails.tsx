import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useTiming } from "react-native-redash";
import { Box, Header, Text } from "../../Components";
import { HomeNavigationProps } from "../../Components/Navigation";
import OutfitItem from "./OutfitItem";
import RoundedCard from "./RoundedCard";

interface OutfitDetailsProps {}

const { width } = Dimensions.get("window");

const defaultItems = [
  {
    key: "1",
    title: "Short Sleeve Organic Top",
    price: 29.99,
    size: "M, L",
    subTitle: "Blue - 100% Polyester",
  },
  {
    key: "2",
    title: "Crew Neck Sweatshirt",
    price: 18.79,
    size: "M, L",
    subTitle: "Red - 50% Polyester",
  },
  {
    key: "3",
    title: "No Broken Hearts Shirt",
    price: 45.09,
    size: "M, XL",
    subTitle: "Red - 25% Polyester",
  },
  {
    key: "4",
    title: "Cubano Shirt",
    price: 21.15,
    size: "S,M",
    subTitle: "Red - 5% Polyester",
  },
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

const OutfitDetails = ({
  navigation,
}: HomeNavigationProps<"OutfitDetails">) => {
  const [items, setItems] = useState(defaultItems);
  const [currentIndex, setCurrentIndex] = useState(0);
  const aIndex = useTiming(currentIndex);

  return (
    <Box flex={1} backgroundColor="background">
      <Box
        backgroundColor="primaryLight"
        height={420}
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
          padding="l"
        >
          <Box flex={1} justifyContent="center" alignItems="center">
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
              <Box width={140} height={50} justifyContent="center" alignItems="center" style={{marginLeft: 10}}>
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
              <Box
                width={150}
                height={50}
                justifyContent="center"
              >
                <Text variant="body">
                  Mike Peter and 12 others like this outfit
                </Text>
              </Box>
            </View>
            <View style={{ height: 80, width }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                  <OutfitItem
                    key={item.key}
                    item={item}
                    onPress={() => navigation.navigate("ProductDetails")}
                  />
                ))}
              </ScrollView>
            </View>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OutfitDetails;
