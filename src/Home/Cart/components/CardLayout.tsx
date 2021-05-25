import { BoxProps } from '@shopify/restyle';
import React, { ReactNode } from 'react'
import { BorderlessButton } from 'react-native-gesture-handler';
import { Box } from '../../../Components';
import { Theme } from '../../../Components/Theme';

interface CardLayoutProps{
    onPress: () => void;
    children: ReactNode;
    backgroundColor: BoxProps<Theme>["backgroundColor"];
}
export const CARD_HEIGHT = 160;

const CardLayout = ({onPress, children, backgroundColor}: CardLayoutProps) => {
    return (
        <BorderlessButton onPress={onPress}>
            <Box padding="m" marginLeft="m" borderRadius="m" width={120} height={CARD_HEIGHT} backgroundColor={backgroundColor}>
               {children}
            </Box>
        </BorderlessButton>
    );
};

export default CardLayout;
