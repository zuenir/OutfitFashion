import React, { useState } from "react";
import { Box, RoundedIcons} from "../../Components";
import { BorderlessButton } from 'react-native-gesture-handler';

interface OutiftProps {
  outfit: { id: number; color: string; aspectRatio: number, selected:boolean; };
  width: number;
}

const Outfit = ({
  outfit,
  width,
}: OutiftProps) => {
  const [selected, setSelected] = useState(false);
  return (
    <BorderlessButton onPress={() => {
        setSelected((prev) => !prev);
        outfit.selected = !outfit.selected;
      }}>
      <Box
        borderRadius="m"
        marginBottom="m"
        alignItems="flex-end"
        padding="m"
        style={{ backgroundColor: outfit.color, width, height: width * outfit.aspectRatio }}
      >
        {selected && (
          <RoundedIcons
            name="check"
            backgroundColor="primary"
            color="background"
            size={24}
          />
        )}
      </Box>
    </BorderlessButton>
  );
};

export default Outfit;
