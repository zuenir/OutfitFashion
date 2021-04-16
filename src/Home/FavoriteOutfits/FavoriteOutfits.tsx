import React, { useRef, useState } from "react";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native";
import { Header } from "../../Components";
import { HomeNavigationProps } from "../../Components/Navigation";
import { Box, useTheme } from "./../../Components/Theme";
import Footer from "./Footer";
import Outfit from "./Outfit";
import {
  Transitioning,
  Transition,
  TransitioningView,
} from "react-native-reanimated";
import TopCurve from "./TopCurve";

const { width: Wwidth } = Dimensions.get("window");

interface FavoriteOutfitsProps {}

const defaultOutifts = [
  {
    id: 1,
    color: "#BEECC4",
    aspectRatio: 200 / 145,
    selected: false,
  },
  {
    id: 2,
    color: "#BFEAF5",
    aspectRatio: 145 / 145,
    selected: false,
  },
  {
    id: 3,
    color: "#FFDDDD",
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 4,
    color: "#FFE4D9",
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 5,
    color: "#F3F0EF",
    aspectRatio: 120 / 145,
    selected: false,
  },
  {
    id: 6,
    color: "#BFEAF5",
    aspectRatio: 150 / 145,
    selected: false,
  },
  {
    id: 7,
    color: "#DEEFC4",
    aspectRatio: 210 / 145,
    selected: false,
  },
  {
    id: 8,
    color: "#D5C3BB",
    aspectRatio: 160 / 145,
    selected: false,
  },
];

const FavoriteOutfits = ({
  navigation,
}: HomeNavigationProps<"FavoriteOutfits">) => {
  const transition = (
    <Transition.Together>
      <Transition.Out type="fade" durationMs={100} />
      <Transition.In type="fade" durationMs={100} />
    </Transition.Together>
  );

  const list = useRef<TransitioningView>(null);
  const [outfits, setOutfits] = useState(defaultOutifts);
  const theme = useTheme();
  const width = (Wwidth - theme.spacing.m * 3) / 2;
  const [footerHeight, setFooterHeight] = useState(0);

  return (
    <Box flex={1} backgroundColor="background">
      <Header
        title="Favorite outfits"
        left={{ icon: "arrow-left", onPress: () => navigation.goBack() }}
        right={{ icon: "edit", onPress: () => true }}
      />
      <Box flex={1}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: theme.spacing.m,
            paddingBottom: footerHeight,
          }}
        >
          <Transitioning.View ref={list} transition={transition}>
            <Box flexDirection="row">
              <Box marginRight="m">
                {outfits
                  .filter((_, i) => i % 2 !== 0)
                  .map((outfit) => (
                    <Outfit key={outfit.id} outfit={outfit} width={width} />
                  ))}
              </Box>
              <Box>
                {outfits
                  .filter((_,i) => i % 2 === 0)
                  .map((outfit) => (
                    <Outfit key={outfit.id} outfit={outfit} width={width} />
                  ))}
              </Box>
            </Box>
          </Transitioning.View>
        </ScrollView>
        <TopCurve footerHeight={footerHeight} />
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          onLayout={({
            nativeEvent: {
              layout: { height },
            },
          }) => setFooterHeight(height)}
        >
          <Footer
            onPress={() => {
              list?.current.animateNextTransition();
              setOutfits(outfits.filter((outfit) => !outfit.selected));
            }}
            label="Add more to favorites"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FavoriteOutfits;
