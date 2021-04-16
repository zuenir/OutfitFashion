import React, { useState } from "react";
import { useTransition } from "react-native-redash/lib/module/v1";
import { Box, Header } from "../../Components";
import { HomeNavigationProps } from "../../Components/Navigation";
import Background from "./Background";
import Card from "./Card";
import { sub } from "react-native-reanimated";
import Categories from "./Categories";
import { View } from "react-native";

interface OutfitIdeasProps {}

const cards = [
  {
    index: 3,
    source: require("../../../assets/4.png"),
  },
  {
    index: 2,
    source: require("../../../assets/3.png"),
  },
  {
    index: 1,
    source: require("../../../assets/2.png"),
  },
  {
    index: 0,
    source: require("../../../assets/1.png"),
  },
];

const step = 1 / (cards.length - 1);

const OutfitIdeas = ({ navigation }: HomeNavigationProps<"OutfitIdeas">) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const aIndex = useTransition(currentIndex);

  return (
    <Box flex={1} backgroundColor="background">
      <Header
        title="Outfit Ideas"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => navigation.navigate("Cart") }}
      />
     
      <Categories />
      <Box flex={1}>
        <Background />
        {cards.map(
          ({ index, source }) =>
            currentIndex < step + step &&
            index >= currentIndex && (
              <Card
                key={index}
                position={sub(index * step, aIndex)}
                onSwipe={() => setCurrentIndex((prev) => prev + step)}
                {...{ source, step }}
              />
            )
        )}
      </Box>
    </Box>
  );
};

export default OutfitIdeas;
