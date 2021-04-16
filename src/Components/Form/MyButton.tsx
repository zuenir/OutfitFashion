import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { useTheme } from '@shopify/restyle';
import { Text, Theme } from '../Theme';

interface MyButtonProps{
    variant: "default" | "primary";
    label?: string;
    onPress: () => void;
    style?: RectButtonProperties["style"];
};

const MyButton = ({variant, label, onPress, style}:MyButtonProps) => {
    const theme = useTheme<Theme>();
    const backgroundColor = 
        variant ===  "primary" 
            ? theme.colors.primary 
            : theme.colors.background2; 
    const color = variant === "primary" ? theme.colors.background : theme.colors.secundary;

    return (
        <RectButton 
        style={[styles.container, style, {backgroundColor}]}
        {...{onPress}}>
            <Text variant="button" style={{color}}>{label}</Text> 
        </RectButton>
    );
};

MyButton.defaultProps = { variant: "defualt"};

const styles = StyleSheet.create({
    container:{
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent:"center",
        alignItems:"center"
    },
});

export default MyButton;