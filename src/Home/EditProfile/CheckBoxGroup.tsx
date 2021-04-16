import React, { useState } from "react";
import { Box, MyButton, useTheme } from "../../Components";

interface CheckBoxGroupProps {
  options: { value: string; label: string }[];
  radio?: boolean;
}

const CheckBoxGroup = ({ options, radio }: CheckBoxGroupProps) => {
  const theme = useTheme();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  return (
    <Box
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      marginTop="s"
    >
      {options.map(({ label, value }) => {
        const index = selectedValues.indexOf(value);
        const isSelected = index !== -1;

        return (
          <MyButton
            key={value}
            variant={isSelected ? "primary" : "default"}
            label={label}
            onPress={() => {
              if (radio) {
                setSelectedValues([value]);
              } else {
                if (isSelected) {
                  selectedValues.splice(index, 1);
                } else {
                  selectedValues.push(value);
                }
                setSelectedValues([...selectedValues]);
              }
            }}
            style={{
              width: "auto",
              height: "auto",
              padding: 16,
              marginBottom: theme.spacing.m,
              marginRight: theme.spacing.s,
            }}
          />
        );
      })}
    </Box>
  );
};

export default CheckBoxGroup;
