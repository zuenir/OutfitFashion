import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Box, Header, Text, useTheme } from "../../Components";

interface OutfitItemProps {
  onPress: () => void;
}

const OutfitItem = ({ onPress }: OutfitItemProps) => {
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
            <Text variant="body">Hoxton Woven Jacket</Text>
            <Text variant="title3" opacity={0.5}>
              Blue - 100% Polyester
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
