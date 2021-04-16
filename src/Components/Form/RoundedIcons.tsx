import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Text, Theme } from "../Theme";

export interface RoundedIconsProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor?: keyof Theme["colors"];
  iconRatio: number;
  align: "center" | "flex-start" | "flex-end";
}

const RoundedIcons = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio,
  align
}: RoundedIconsProps) => {

  const iconSize = size * iconRatio;

  return (
    <Box
      height={size}
      width={size}
      borderRadius="m"
      justifyContent="center"
      alignItems= {align}
      style={{ borderRadius: size / 2 }}
      {...{ backgroundColor }}
    >
      <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
        <Icon
          size={iconSize}
          {...{ name }}
        />
      </Text>
    </Box>
  );
};

RoundedIcons.defaultProps = {
  iconRatio: 0.7,
  align: "center"
};

export default RoundedIcons;
