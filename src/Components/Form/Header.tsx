import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, RoundedIconButton, Text } from "..";

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  right?: {
    icon: string;
    onPress: () => void;
  };
  dark: boolean;
}

const Header = ({ title, left, right, dark }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? "background" : "secundary";
  //const backgroundColor = dark ? "secundary" : undefined;

  return (
    <Box
      justifyContent="space-between"
      flexDirection="row"
      paddingHorizontal="m"
      style={{
        marginTop: insets.top,
      }}
    >
      <RoundedIconButton
        size={44}
        iconRatio={0.4}
        name={left.icon}
        onPress={left.onPress}
        align={"center"}
        {...{ color }}
      />

      <Text variant="header" {...{ color }}>
        {title.toUpperCase()}
      </Text>
      {right ? (
        <RoundedIconButton
          size={44}
          iconRatio={0.4}
          name={right.icon}
          onPress={right.onPress}
          align={"center"}
          {...{ color}}
        />
      ) : <View style={{width: 44}} />}
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};

export default Header;
