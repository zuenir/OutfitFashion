import React, { forwardRef } from "react";
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Box, RoundedIcons, useTheme } from "..";
import { Feather as Icon } from "@expo/vector-icons";

interface MyTextInputProps extends RNTextInputProps {
  icon: string;
  touched?: boolean;
  error?: string;
}

const MyTextInput = forwardRef<RNTextInput, MyTextInputProps>(
  ({ icon, error, touched, ...props }, ref) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2.5;
    const reColor = !touched ? "text" : error ? "danger" : "primary";
    const color = theme.colors[reColor];

    return (
      <Box
        flexDirection="row"
        height={48}
        alignItems="center"
        borderRadius="s"
        borderWidth={StyleSheet.hairlineWidth}
        borderColor={reColor}
        padding="s"
      >
        <Box padding="s">
          <Icon name={icon} size={16} {...{ color }} />
        </Box>
        <Box flex={1}>
          <RNTextInput
            underlineColorAndroid="transparent"
            placeholderTextColor={color}
            {...{ ref }}
            {...props}
          />
        </Box>

        {touched && (
          <RoundedIcons 
            name={!error ? "check" : "x"}
            size={SIZE}
            backgroundColor={!error ? "primary" : "danger"}
            color="background"
          />
        )}
      </Box>
    );
  }
);

export default MyTextInput;