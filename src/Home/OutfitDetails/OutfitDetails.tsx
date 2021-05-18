import React, { useState } from "react";
import { Dimensions, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Box, Header } from "../../Components";
import { HomeNavigationProps } from "../../Components/Navigation";
import OutfitItem from "./OutfitItem";

interface OutfitDetailsProps {}

const { width } = Dimensions.get("window");

const defaultItems = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const OutfitDetails = ({
  navigation,
}: HomeNavigationProps<"OutfitDetails">) => {
  const [items, setItems] = useState(defaultItems);

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
          padding="xl"
        >
          <Box flex={1} justifyContent="center" alignItems="center">
            <Box
              width={242}
              height={50}
              backgroundColor="info"
              marginVertical="m"
            />
            <View style={{ height: 80, width }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                  <OutfitItem
                    key={item.id}
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
