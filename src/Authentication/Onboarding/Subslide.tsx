import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {MyButton, Text} from '../../Components';

interface SubslideProps{
    subtitle: string;
    description: string;
    last?: boolean;
    onPress: () => void;
};

const {width} = Dimensions.get("window");

const Subslide = ({subtitle, description,last, onPress}: SubslideProps) => {
    return (
        <View style={styles.container}>
            <Text variant="title2" style={styles.subtitle}>{subtitle}</Text>
            <Text variant="body" style={styles.description}>{description}</Text>
            <MyButton 
                label={last ? "Let´s get started" : "Next"} 
                variant={last ? "primary" : "default"}
                {...{onPress}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
        padding: 44,
        width,
    },
    subtitle: {
        color:"#0C0D34",
        textAlign:"center", 
        marginBottom: 12,
    },
    description: {       
        color:"#0C0D34",
        textAlign:"center", 
        marginBottom: 40,
    }
})

export default Subslide;