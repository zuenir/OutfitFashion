import React from "react";
import { Box} from "../../Components";
import CardLayout from "./CardLayout";
import { Feather as Icon } from "@expo/vector-icons";

const AddCardComponents = () => {
  return (
    <CardLayout onPress={() => true} backgroundColor="secundary">
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        borderRadius="m"
        style={{ backgroundColor: "rgba(255,255,255, 0.05)"}}
      >
        <Icon size={32} name="plus" color="white" />
      </Box>
    </CardLayout>
  );
};

export default AddCardComponents;
