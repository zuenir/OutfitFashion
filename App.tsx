import React from "react";
import { LoadAssets } from "./src/Components";
import { ThemeProvider } from "./src/Components/Theme";
import {
  assets as authenticationAssets,
  AuthenticationNavigator,
} from "./src/Authentication";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from '@react-navigation/stack';

import {HomeNavigator, assets as HomeAssets} from './src/Home';
import { AppRoutes } from './src/Components/Navigation';

const assets = [...authenticationAssets, ...HomeAssets];

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.ttf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.ttf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.ttf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Bold.ttf"),
};

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <ThemeProvider>
      <LoadAssets assets={assets} fonts={fonts}>
        <SafeAreaProvider>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen name="Authentication" component={AuthenticationNavigator}/>
            <AppStack.Screen name="Home" component={HomeNavigator}/>
          </AppStack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}

//Outfitr - Fashion UI Kit
//#1 Boilerplate
//#2 Slider
//#3 Restyle
//#4 Welcome 
//#5 Login
//#6 Text Inputs 
//#7 Formik
//#8 SignUp
//#9 Forgot Password
//#10 Nested Navigator
//#11 Drawer 
//#12 Cards
//#13 Swipe Animations
//#14 Custom Tap Gesture
//#15 Masonry 
//#16 Transitions
//#17 Charts
//#18 Massaging the Octopus
//#19 Graph Animation
//#20 Edit Profile
//#21 Settings
//#22 Cart
//#23 Swipeable Rows
//#24 Checkout
//#25 Reanimated 2 Update 
