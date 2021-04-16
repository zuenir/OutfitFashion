import React from "react";
import { Box, Text } from './../../Components/Theme';
import { RectButton, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";

interface CloseButtonProps {
  onPress: () => void;
}

const SIZE = 60;

const CloseButton = ({ onPress }: CloseButtonProps) => {
  return (
    <>
      <Box 
        style={{height: SIZE, width:SIZE, borderRadius: SIZE/2, backgroundColor:"white"}}
        justifyContent="center"
        alignItems="center">
        <RectButton {...{onPress}}>
            <Text color="secundary" textAlign="center">
                <Icon name="x" size={45}/>
            </Text>
        </RectButton>
      </Box>
    </>
  );
};

export default CloseButton;