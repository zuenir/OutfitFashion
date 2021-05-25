import React from "react";
import { Box, Text } from "../../../Components";


interface LineItemProps {
  label: string;
  label_value?: string;
  value: number;
}

const LineItem = ({ label, label_value, value }: LineItemProps) => {
  return (
    <Box flexDirection="row" paddingVertical="s">
      <Box flex={1} flexDirection="row">
        <Text color="background" variant="title3">
          {label}
        </Text>
        {label_value && (
          <Box opacity={0.5} style={{ marginLeft: 5 }}>
            <Text color="background" variant="title3">
              {label_value}
            </Text>
          </Box>
        )}
      </Box>
      <Box justifyContent="center" alignItems="center">
        <Text color="primary" variant="title3">
          ${value}
        </Text>
      </Box>
    </Box>
  );
};

export default LineItem;
