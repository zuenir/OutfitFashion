import React from "react";
import { Box, Header, Text, useTheme } from "../../Components";
import { HomeNavigationProps } from "../../Components/Navigation";
import { Dimensions } from "react-native";
import Tabs from './Tabs';
import Configuration from './Configuration';
import PernsonalInfo from './PernsonalInfo';

const { width } = Dimensions.get("window");

const tabs = [
    {id:"configuration", title:"Configuration"},
    {id:"info", title:"Personal info"}
];

interface EditProfileProps {}

const EditProfile = ({ navigation }: HomeNavigationProps<"EditProfile">) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="background">
      <Box flex={0.2} backgroundColor="background">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="xl"
          backgroundColor="secundary"
        >
          <Header
            title="Edit Profile"
            left={{ icon: "arrow-left", onPress: () => navigation.goBack() }}
            dark
          />
        </Box>
      </Box>
      <Box>
        <Box
          position="absolute"
          top={-40}
          left={width / 2 - 40}
          backgroundColor="primary"
          width={80}
          height={80}
          style={{ borderRadius: 50 }}
        />

        <Box
          alignSelf="center"
          alignItems="center"
          marginVertical="m"
          style={{ marginTop: 30 + theme.spacing.m }}
        >
          <Text variant="title1">Zuenir Claudio</Text>
          <Text variant="button">zuenirlima@gmail.com</Text>
        </Box>
      </Box>
      <Tabs tabs={tabs}>
        <Configuration />
        <PernsonalInfo />
      </Tabs>
    </Box>
  );
};

export default EditProfile;
