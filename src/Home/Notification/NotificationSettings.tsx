import React, { useState } from 'react'
import { Switch } from 'react-native-gesture-handler';
import { Box, Text, useTheme } from '../../Components';

interface NotificationSettingsProps {
    title: string;
    description: string;
}

const NotificationSettings = ({title,description}:NotificationSettingsProps) => {
    const [toggled, setToggled] = useState(false);
    const theme = useTheme();

    return (
        <Box flexDirection="row" marginBottom="m">
           <Box flex={1} justifyContent="center">
               <Text variant="title3">{title}</Text>
               <Text variant="body">{description}</Text>
            </Box>
            <Box paddingVertical="m">
                <Switch value={toggled} onValueChange={setToggled} trackColor={{true : theme.colors.primary, false: theme.colors.background2}}/>
            </Box> 
        </Box>
    );
};

export default NotificationSettings;
