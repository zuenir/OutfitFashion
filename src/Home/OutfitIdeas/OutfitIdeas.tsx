import React, { useState } from "react";
import { Box, Header } from "../../Components";
import { HomeNavigationProps } from "../../Components/Navigation";
import Background from "./Background";
import Card from "./Card";
import { sub, useDerivedValue } from "react-native-reanimated";
import Categories from "./Categories";
import { useTiming } from "react-native-redash";

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
  const aIndex = useTiming(currentIndex);

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
                index={index}
                aIndex={aIndex}
                step = {step}
                onSwipe={() => setCurrentIndex((prev) => prev + step)}
                {...{ source }}
              />
            )
        )}
      </Box>
    </Box>
  );
};

export default OutfitIdeas;
