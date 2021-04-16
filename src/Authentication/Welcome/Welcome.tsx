import React from "react";
import { Image, Dimensions } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { MyButton } from "../../Components";
import { AuthNavigationProps } from "../../Components/Navigation";
import { Box, Text, useTheme } from "../../Components/Theme";

interface WelcomeProps {}

const { width } = Dimensions.get("window");

const picture = {
  src: require("../../../assets/5.png"),
  width: 3383,
  height: 3074,
};

export const assets = [picture.src];

const Welcome = ({ navigation }: AuthNavigationProps<"Welcome">) => {
  const theme = useTheme();

  return (
    <Box flex={1} backgroundColor="background">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="background2"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.s) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="background2"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        >
          <Box
            flex={1}
            backgroundColor="background"
            borderTopLeftRadius="xl"
            justifyContent="space-evenly"
            alignItems="center"
            padding="s"
          >
            <Text variant="title2">Let’s get started</Text>
            <Text variant="body" textAlign="center">
              Login to your account below or signup for an amazing experience
            </Text>
            <MyButton
              variant="primary"
              label="Have an account? Login"
              onPress={() => navigation.navigate("Login")}
            />

            <MyButton
              variant="default"
              label="Join us, it’s Free"
              onPress={() => navigation.navigate("SignUp")}
            />

            <BorderlessButton
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text variant="button" color="secundary">Forgot password?</Text>
            </BorderlessButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
