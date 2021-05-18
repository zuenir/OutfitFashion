import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeRoutes } from "../Components/Navigation";
import DrawerContent, { DRAWER_WIDTH } from "./Drawer/Drawer";
export { assets } from "./Drawer";
import OutfitIdeas from "./OutfitIdeas";
import OutfitDetails from "./OutfitDetails";
import ProductDetails from "./ProductDetails";
import FavoriteOutfits from "./FavoriteOutfits";
import EditProfile from "./EditProfile";
import TransactionHistory from "./TransactionHistory";
import Notification from "./Notification";
import Logout from "./Logout";
import SuccessPopUp from "./SuccessPopUp";
import Cart from "./Cart";

const Drawer = createDrawerNavigator<HomeRoutes>();

export const HomeNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
    drawerStyle={{
      width: DRAWER_WIDTH,
    }}
  >
    <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    <Drawer.Screen name="OutfitDetails" component={OutfitDetails} />
    <Drawer.Screen name="ProductDetails" component={ProductDetails} />

    <Drawer.Screen name="Cart" component={Cart} />
    <Drawer.Screen name="FavoriteOutfits" component={FavoriteOutfits} />

    <Drawer.Screen name="EditProfile" component={EditProfile} />
    <Drawer.Screen name="TransactionHistory" component={TransactionHistory} />
    <Drawer.Screen name="Notification" component={Notification} />

    <Drawer.Screen name="SuccessPopUp" component={SuccessPopUp} />

    <Drawer.Screen name="Logout" component={Logout} />
  </Drawer.Navigator>
);
