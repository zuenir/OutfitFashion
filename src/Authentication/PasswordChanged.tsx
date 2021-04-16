import React from "react";
import {
  Container,
  RoundedIconButton,
  RoundedIcons,
  MyButton,
} from "../Components";
import { Box, Text } from "../Components/Theme";
import { AuthNavigationProps } from "./../Components/Navigation";

const SIZE = 80;

const PasswordChanged = ({
  navigation,
}: AuthNavigationProps<"PasswordChanged">) => {
  return (
    <Container
      pattern={0}
      footer={
        <Box
          flexDirection="row"
          justifyContent="center"
          style={{ marginTop: 10, marginBottom: 15 }}
        >
          <RoundedIconButton
            backgroundColor="background"
            color="secundary"
            name="x"
            size={60}
            onPress={() => navigation.pop()}
          />
        </Box>
      }
    >
      <Box alignSelf="center">
        <RoundedIcons
          name="check"
          size={SIZE}
          backgroundColor="primaryLight"
          color="primary"
        />
      </Box>

      <Text variant="title1" textAlign="center" marginBottom="s">
        Your password was successfully changed
      </Text>
      <Text variant="body" textAlign="center" marginBottom="s">
        Close this window and login again
      </Text>

      <Box>
        <Box alignItems="center" marginTop="m">
          <MyButton
            variant="primary"
            label="Login again"
            onPress={() => navigation.navigate("Login")}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;