import React from "react";
import { Box } from "./../../Components/Theme";
import MyButton from "./../../Components/Form/MyButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface FooterProps {
  label: string;
  onPress: () => void;
}

const Footer = ({ label, onPress }: FooterProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Box backgroundColor="secundary" padding="m" borderTopLeftRadius="xl">
      <Box
        justifyContent="center"
        alignItems="center"
        style={{ paddingBottom: insets.bottom }}
      >
        <MyButton variant="primary" {...{ onPress, label }} />
      </Box>
    </Box>
  );
};

export default Footer;
