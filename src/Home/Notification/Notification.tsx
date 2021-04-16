import React from "react";
import { Box, ContentFooter, Header } from "../../Components";
import { HomeNavigationProps } from "../../Components/Navigation";
import NotificationSettings from "./NotificationSettings";

interface NotificationProps {}

const Notification = ({ navigation }: HomeNavigationProps<"Notification">) => {
  return (
    <ContentFooter>
      <Box backgroundColor="background">
        <Header
          title="Notifications"
          left={{ icon: "arrow-left", onPress: () => navigation.goBack() }}
        />
        <Box padding="m">
          <NotificationSettings
            title="Outfit Ideias"
            description="Receive daily notifications"
          />
          <NotificationSettings
            title="Discount & Sales"
            description="Buy the stuff you love for less"
          />
          <NotificationSettings
            title="Stock Notifications"
            description="If the product you comes back in Stock"
          />
          <NotificationSettings
            title="New Stuff"
            description="Hear it first, wear it first"
          />
        </Box>
      </Box>
    </ContentFooter>
  );
};

export default Notification;
