import React from "react";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { RoundedIcons } from "..";
import { RoundedIconsProps } from "./RoundedIcons";

interface RoundedIconButtonProps extends RoundedIconsProps {
  onPress: () => void;
}

const RoundedIconButton = ({ onPress, ...props }: RoundedIconButtonProps) => {
  return (
    <BorderlessButton
      style={{
        borderRadius: props.size / 2,
        width: props.size,
        height: props.size,
      }}
      {...{ onPress }}
    >
      <RoundedIcons {...props} />
    </BorderlessButton>
  );
};

RoundedIconButton.defaultProps = {
  ...RoundedIcons.defaultProps,
};

export default RoundedIconButton;
