import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Box,Text} from "../../Components";
import { ItemModel } from "../Cart/components/ItemLayout";

interface OutfitItemProps {
  onPress: () => void;
  item: ItemModel;
}

const OutfitItem = ({
  onPress,
  item: { title, subTitle, price, size },
}: OutfitItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress} style={{ borderRadius: 10 }}>
        <View style={styles.button}>
          <Box
            width={60}
            height={60}
            backgroundColor="info"
            borderRadius="m"
            marginRight="l"
          />
          <Box justifyContent="center" alignItems="center">
            <Text variant="body">{title}</Text>
            <Text variant="title3" opacity={0.5}>
              {subTitle}
            </Text>
          </Box>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    width: 295,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    flexDirection: "row",
    borderRadius: 10,
  },
});
export default OutfitItem;
