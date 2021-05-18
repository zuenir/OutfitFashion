import React from "react";
import { HomeNavigationProps } from "../../Components/Navigation";
import {
  Box,
  Container,
  MyButton,
  RoundedIconButton,
  RoundedIcons,
  Text,
} from "../../Components";

const SIZE = 80;

const SuccessPopUp = ({ navigation }: HomeNavigationProps<"SuccessPopUp">) => {
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
            onPress={() =>  navigation.navigate("OutfitIdeas")}
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
        Congrats! Order successfully placed
      </Text>
      <Text variant="body" textAlign="center" marginBottom="s">
        Order should arrive within 4 working days.
      </Text>

      <Box>
        <Box alignItems="center" marginTop="m">
          <MyButton
            variant="primary"
            label="Back to outfits"
            onPress={() => navigation.navigate("OutfitIdeas")}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default SuccessPopUp;
