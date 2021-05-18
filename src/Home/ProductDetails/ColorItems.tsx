import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Box, Theme } from "../../Components/Theme";

export interface DataColor {
  color: keyof Theme["colors"];
  id: number;
}

interface ColorItemsProps {
  data: DataColor[];
  width: number;
}

const ColorItems = ({ data, width }: ColorItemsProps) => {
  return (
    <View style={{ height: 86, width, marginTop: 16 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <Box
            key={item.id}
            width={86}
            height={86}
            backgroundColor={item.color}
            borderRadius="m"
            marginHorizontal="m"
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ColorItems;
