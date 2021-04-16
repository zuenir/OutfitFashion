import React from "react";
import { Path, Svg } from "react-native-svg";
import { useTheme } from "../../Components";

interface TopCurveProps {
  footerHeight: number;
}

const TopCurve = ({ footerHeight }: TopCurveProps) => {
  const theme = useTheme();
  const SIZE = theme.borderRadii.xl;

  return (
    <Svg
      width={SIZE}
      height={SIZE}
      style={{ 
          position: "absolute", 
          bottom: footerHeight, 
          right:0}}
      viewBox="0 0 1 1"    
    >
      <Path d="M 0 1 A 0 0, 0, 0, 0, 1 0 L 1 1" fill={theme.colors.secundary} />
    </Svg>
  );
};

export default TopCurve;
