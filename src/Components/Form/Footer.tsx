import React from "react";
import SocialLogin from './SocialLogin';
import { Box, Text } from '../Theme';
import { BorderlessButton } from "react-native-gesture-handler";

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer = ({ onPress, title, action }: FooterProps) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center" marginTop="s" style={{marginBottom:10}}>
        <BorderlessButton {...{onPress}}>
          <Text variant="button">
            <Text color="background">{`${title} `}</Text>
            <Text color="primary">{action}</Text>
          </Text>
        </BorderlessButton>
      </Box>
    </>
  );
};

export default Footer;