import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, RoundedIconButton, Text } from "..";
import { Theme } from "../Theme";

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
  countCart?: number;
}

const Header = ({ title, left, right, dark, countCart }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? "background" : "secundary";
  const backgroundColor = dark ? "primary" : "background";

  return (
    <Box
      justifyContent="space-between"
      flexDirection="row"
      paddingHorizontal="m"
      style={{
        marginTop: insets.top
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
        <Box>
          {countCart && (<Box style={{ position: "absolute", top: 0, right: 0 }}>
            <Box
              backgroundColor={color}
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 20,
                height: 20,
                borderRadius: 10,
              }}
            >
              <Text variant="notifications" color={backgroundColor}>
                {countCart}
              </Text>
            </Box>
          </Box>)}

          <RoundedIconButton
            size={44}
            iconRatio={0.4}
            name={right.icon}
            onPress={right.onPress}
            align={"center"}
            {...{ color }}
          />
        </Box>
      ) : (
        <View style={{ width: 44 }} />
      )}
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};

export default Header;
