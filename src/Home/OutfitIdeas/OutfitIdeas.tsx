import React, { useState } from "react";
import { Box, Header, RoundedIconButton } from "../../Components";
import { HomeNavigationProps } from "../../Components/Navigation";
import Background from "./Background";
import Card from "./Card";
import Categories from "./Categories";
import { useTiming } from "react-native-redash";
import { Dimensions, Share } from "react-native";

const { width } = Dimensions.get("window");

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

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box flex={1} backgroundColor="background">
      <Header
        title="Outfit Ideas"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{
          icon: "shopping-bag",
          onPress: () => navigation.navigate("Cart"),
        }}
      />

      <Box flex={1}>
        <Background />
        {cards.map(
          ({ index, source }) =>
            currentIndex < index * step + step && (
              <Card
                key={index}
                index={index}
                aIndex={aIndex}
                step={step}
                onSwipe={() => setCurrentIndex((prev) => prev + step)}
                onPress={()=> navigation.navigate("OutfitDetails")}
                {...{ source }}
              />
            )
        )}
      </Box>
      <Box style={{ position: "absolute", top: 71, left: 0, right: 0 }}>
        <Categories />
      </Box>
      <Box
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          flex: 1,
          width,
          height: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            borderRadius: 25,
            height: 50,
            width: 195,
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
          }}
          flexDirection="row"
        >
          <RoundedIconButton
            size={44}
            iconRatio={0.4}
            name="arrow-left"
            onPress={() => true}
            align={"center"}
            {...{ color: "secundary" }}
          />

          <RoundedIconButton
            size={44}
            iconRatio={0.4}
            name="share"
            onPress={onShare}
            align={"center"}
            {...{ color: "secundary" }}
          />

          <RoundedIconButton
            size={44}
            iconRatio={0.4}
            name="arrow-right"
            onPress={() => true}
            align={"center"}
            {...{ color: "secundary" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default OutfitIdeas;
