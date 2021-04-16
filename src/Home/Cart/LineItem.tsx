import React from "react";
import { Box, Text } from "../../Components";

interface LineItemProps {
  label: string;
  value: number;
}

const LineItem = ({ label, value }: LineItemProps) => {
  return (
    <Box flexDirection="row" paddingVertical="s">
      <Box flex={1} >
        <Text color="background" variant="title3">
          {label}
        </Text>
      </Box>
      <Box justifyContent="center" alignItems="center">
        <Text color="primary" variant="title3">${value}</Text>
      </Box>
    </Box>
  );
};

export default LineItem;
