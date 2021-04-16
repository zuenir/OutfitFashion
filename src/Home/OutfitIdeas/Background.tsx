import React from 'react'
import { View, StyleSheet, Image } from 'react-native';
import { Box, useTheme } from '../../Components';
import { palette } from '../../Components/Theme';

interface BackgroundProps {}

const Background = () => {
    const thme = useTheme();

    return (
        <View style={StyleSheet.absoluteFill}>
            <Box flex={1/3} style={{backgroundColor: palette.ligthBlue}}>
                <Box  flex={1} backgroundColor="background" borderBottomRightRadius="xl" />
            </Box>
            <Box flex={1/3}>
                <Box flex={1} backgroundColor="background"/>
                <Box flex={1} backgroundColor="secundary"/>
                <Image 
                    source={require('./assets/background.png')}
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        width: undefined,
                        height:undefined,
                        borderTopLeftRadius: thme.borderRadii.xl,
                        borderBottomRightRadius: thme.borderRadii.xl
                    }}
                />
            </Box>
            <Box flex={1/3} style={{backgroundColor: palette.ligthBlue}}>
                <Box  flex={1} backgroundColor="secundary" borderTopLeftRadius="xl" />
            </Box>
        </View>
    )
}


export default Background;
