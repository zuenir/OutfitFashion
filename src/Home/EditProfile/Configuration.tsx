import React from 'react'
import { ScrollView } from 'react-native';
import { Box, Text } from '../../Components';
import CheckBoxGroup from './CheckBoxGroup';
import RoundedCheckBoxGroup from './RoundedCheckBoxGroup';

interface ConfiguratioProps {}

const outfitTye = [
    {value: "men", label:"For man"},
    {value:"women", label:"For Women"},
    {value:"both", label:"Both"}
];

const preferredBrands = [
    {value: "adidas", label:"Adidas"},
    {value:"nike", label:"Nike"},
    {value:"converse", label:"Converse"},
    {value: "tommy-hilfiger", label:"Tommy Hilfiger"},
    {value:"billionaire-boys-club", label:"Billionaire Boys Club"},
    {value:"jordan", label:"Jordan"},
    {value:"le_coq-sportif", label:"Le Coq Sportif"}
];

const clothingSize = [
    {value: "s"},
    {value:"m"},
    {value:"l"},
    {value: "xl"},
    {value:"xxl"},   
]

const clothingColors = [
    {value: "#0C0D34"},
    {value:"#FF0058"},
    {value:"#50B9DE"},
    {value: "#00D99A"},
    {value:"#FE5E33"},
]


const Configuration = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Box padding="m">
                <Text variant="body">What type of outfit you usually wear?</Text>
                <CheckBoxGroup options={outfitTye} radio/>
                <Text variant="body">What is your clothing size?</Text>
                <RoundedCheckBoxGroup options={clothingSize}/>
                <Text variant="body">My preferred clothing colors</Text>
                <RoundedCheckBoxGroup options={clothingColors} valueIsColor/>
                <Text variant="body">My preferred brands</Text>
                <CheckBoxGroup options={preferredBrands}/>
            </Box>
        </ScrollView>
    );
};

export default Configuration;
