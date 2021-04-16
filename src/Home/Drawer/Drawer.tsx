import { CommonActions, DrawerActions } from "@react-navigation/core";
import React from "react";
import { Dimensions, Image } from "react-native";
import { Box, Header,Text, useTheme } from "../../Components";
import DrawerItem, { DrawerItemProps } from "./DrawerItem";

const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;

export const assets = [require("../../Home/Drawer/assets/drawer.png")];

const items: DrawerItemProps[] = [
  {
    icon: "zap",
    label: "Outfit Ideas",
    screen: "OutfitIdeas",
    color: "primary",
  },
  {
    icon: "heart",
    label: "Favorite Outfits",
    screen: "FavoriteOutfits",
    color: "drawer1",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "EditProfile",
    color: "drawer2",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "drawer3",
  },
  {
    icon: "bell",
    label: "Notifications Settings",
    screen: "Notification",
    color: "drawer4",
  },
  {
    icon: "log-out",
    label: "Logout",
    onPress: (navigation) => navigation.dispatch(CommonActions.reset({
      index: 0,
      routes: [
        {name: 'Authentication'},
      ],
    })),
    color: "secundary",
  }
];

const Drawer = (props) => {
  
  //const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="background">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="xl"
          backgroundColor="secundary"
        >
          <Header
            title="My Profile"
            left={{ icon: "x", onPress: () => props.navigation.closeDrawer()}}
            right={{ icon: "shopping-bag", onPress: () => props.navigation.dispatch(DrawerActions.jumpTo('Cart'))}}
            dark
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secundary" />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="background"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          justifyContent="center"
          padding="xl"
        >
          <Box
            position="absolute"
            top={-50}
            left={DRAWER_WIDTH / 2 - 40}
            backgroundColor="primary"
            width={70}
            height={70}
            style={{ borderRadius: 50 }}
          />

          <Box alignSelf="center" alignItems="center" marginVertical="s">
            <Text variant="title1">Zuenir Claudio</Text>
            <Text variant="button">zuenirlima@gmail.com</Text>
          </Box>
          {items.map((item) => (
            <DrawerItem key={item.icon} {...item} />
          ))}
        </Box>
      </Box>

      <Box
        flex={0.2}
        backgroundColor="background"
        width={DRAWER_WIDTH}
        overflow="hidden"
        height={height * 0.61}
      >
        <Image
          source={assets[0]}
          style={{
            width: DRAWER_WIDTH,
            height,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;
