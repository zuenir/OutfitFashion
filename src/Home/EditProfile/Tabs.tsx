import React, { Children, ReactNode, useState } from "react";
import { Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Box, Text, useTheme } from "../../Components";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useTiming } from "react-native-redash";
import { mix } from "react-native-redash";

const { width } = Dimensions.get("window");

interface Tab {
  id: string;
  title: string;
}

interface TabsProps {
  tabs: Tab[];
  children: ReactNode;
}

const Tabs = ({ tabs, children }: TabsProps) => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);

  const transition = useTiming(index, { duration: 650 });

  const dot = useAnimatedStyle(() => ({
    transform: [
      { translateX: mix(transition.value, width * 0.25, width * 0.75) },
    ],
  }));

  const content = useAnimatedStyle(() => ({
    transform: [{ translateX: -width * transition.value }],
  }));

  return (
    <Box flex={1}>
      <Box flexDirection="row">
        {tabs.map((tab, i) => (
          <RectButton style={{ flex: 1 }} key={i} onPress={() => setIndex(i)}>
            <Box
              padding="m"
              style={{
                paddingBottom: theme.spacing.m + 10,
              }}
            >
              <Text variant="title3" textAlign="center">
                {tab.title}
              </Text>
            </Box>
          </RectButton>
        ))}
        <Animated.View
          style={[
            {
              position: "absolute",
              bottom: 0,
              left: -5,
              backgroundColor: theme.colors.primary,
              width: 10,
              height: 10,
              borderRadius: 5,
            },
            dot,
          ]}
        />
      </Box>
      <Animated.View
        style={[
          {
            flex: 1,
            width: width * tabs.length,
            flexDirection: "row",
          },
          content,
        ]}
      >
        {Children.map(children, (child, i) => (
          <Box flex={1} key={i} width={width}>
            {child}
          </Box>
        ))}
      </Animated.View>
    </Box>
  );
};

export default Tabs;
