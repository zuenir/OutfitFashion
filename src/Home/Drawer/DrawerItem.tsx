import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Box, Theme, Text, useTheme } from "../../Components/Theme";
import { RoundedIcons } from "../../Components";
import { HomeRoutes } from "../../Components/Navigation";
import { useNavigation } from "@react-navigation/core";
import { DrawerNavigationProp } from "@react-navigation/drawer";

interface BaseDrawerItem {
  icon: string;
  label: string;
  color: keyof Theme["colors"];
}

interface ScreenDrawerItem extends BaseDrawerItem {
  screen: keyof HomeRoutes;
}

interface OnPressDrawerItem extends BaseDrawerItem {
  onPress: (navigation: ReturnType<typeof useNavigation>) => void;
}

export type DrawerItemProps = ScreenDrawerItem | OnPressDrawerItem;

const DrawerItem = ({ icon, label, color, ...props }: DrawerItemProps) => {
  const theme = useTheme();
  const navigation = useNavigation<
    DrawerNavigationProp<HomeRoutes, "OutfitIdeas">
  >();

  return (
    <RectButton
      onPress={() =>
        "screen" in props
          ? navigation.navigate(props.screen)
          : props.onPress(navigation)
      }
      style={{ borderRadius: theme.borderRadii.m }}
    >
      <Box flexDirection="row" alignItems="center" padding="s">
        <RoundedIcons
          iconRatio={0.5}
          name={icon}
          size={36}
          backgroundColor={color}
          color="background"
        />
        <Text variant="button" color="secundary" marginLeft="m">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
