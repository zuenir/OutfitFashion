import React from "react";
import { Dimensions, View } from "react-native";
import { Box, useTheme } from "../../../Components";
import { Theme } from "../../../Components/Theme";
import { lerp } from "./Scale";
import Underlay, { MARGIN } from "./Underlay";
import moment from "moment";
import Animated, { divide, multiply, sub, Transition, Transitioning, TransitioningView } from "react-native-reanimated";
import { useIsFocused } from "@react-navigation/core";
import { useTransition } from 'react-native-redash/lib/module/v1';

const { width: wWidth } = Dimensions.get("window");

const aspectRatio = 200 / 450;

const AnimatedBox = Animated.createAnimatedComponent(Box)

const transition = (
  <Transition.Together>
    <Transition.In type="slide-bottom" durationMs={650} interpolation="easeInOut"/>
  </Transition.Together>
);

export interface DataPoint {
  date: number;
  value: number;
  color: keyof Theme["colors"];
  id: number;
}

interface GraphProps {
  data: DataPoint[];
  startDate: number;
  numberOfMonths: number;
}

const Graph = ({ data, startDate, numberOfMonths }: GraphProps) => {
  const isFocused = useIsFocused();
  const transition = useTransition(isFocused, {duration:650});

  const theme = useTheme();
  const canvaswidth = wWidth - theme.spacing.m * 2;
  const canvasheight = canvaswidth * aspectRatio;
  const width = canvaswidth - theme.spacing[MARGIN];
  const height = canvasheight - theme.spacing[MARGIN];
  const step = width / numberOfMonths;
  const values = data.map((p) => p.value);
  //const dates = data.map((p) => p.date);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);

  return (
    <Box marginTop="xl" paddingBottom={MARGIN} paddingLeft={MARGIN}>
      <Underlay
        minY={minY}
        maxY={maxY}
        startDate={startDate}
        numberOfMonths={numberOfMonths}
        step={step}
      />

      <View
        style={{ width, height, overflow:"hidden" }}
      >
        {data.map((point) => {
          const i = Math.round(
            moment
              .duration(moment(point.date).diff(moment(startDate)))
              .asMonths()
          );

          const totalHeight = lerp(0, height, point.value / maxY);
          const currentHeight = multiply(totalHeight, transition);
          const translateY = divide(sub (totalHeight, currentHeight),2);

          return (
            <AnimatedBox
              key={point.id}
              position="absolute"
              left={i * step}
              bottom={0}
              width={step}
              height={totalHeight}
              style={{transform:[{translateY},{scaleY: transition}]}}
            >
              <Box
                position="absolute"
                top={0}
                bottom={0}
                left={theme.spacing.m}
                right={theme.spacing.m}
                backgroundColor={point.color}
                opacity={0.1}
                borderTopLeftRadius="m"
              />

              <Box
                backgroundColor={point.color}
                position="absolute"
                top={0}
                height={25}
                left={theme.spacing.m}
                right={theme.spacing.m}
                borderRadius="m"
              />
            </AnimatedBox>
          );
        })}
      </View>
    </Box>
  );
};

export default Graph;
