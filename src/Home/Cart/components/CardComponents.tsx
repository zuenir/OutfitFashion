import React from "react";
import { Image, View } from "react-native";
import { Text } from "../../../Components";
import CardLayout from "../components/CardLayout";

export enum CardType {
  VISA,
  MASTERCARD,
}

export interface CardModel {
  id: number;
  type: CardType;
  last4Digits: number;
  expiration: string;
}

interface CardComponentsProps {
  card: CardModel;
  selected: boolean;
  onSelect: () => void;
}

const visaLogo = require("../../Cart/assets/visa-logo.png");
const masterCardLogo = require("../../Cart/assets/mastercard-logo.png");
const patternVisa = require("../../Cart/assets/pattern-visa.png");
const patternMasterCard = require("../../Cart/assets/pattern-mastercard.png")


const CardComponents = ({ card, selected, onSelect }: CardComponentsProps) => {
  return (
    <CardLayout
      onPress={onSelect}
      backgroundColor={selected ? "primary" : "background2"}
    >
      <View style={{ height: 20 }}>
        <Image
          style={
            card.type === CardType.VISA
              ? { width: 39, height: 13 }
              : { width: 32, height: 20 }
          }
          source={card.type === CardType.VISA ? visaLogo : masterCardLogo}
        />
      </View>
      <Text
        variant="title3"
        marginTop="m"
        marginBottom="s"
        color={selected ? "background" : "text"}
      >
        **** {card.last4Digits}
      </Text>
      <Text opacity={0.5}>Expiration</Text>
      <Text
        color={selected ? "background" : "text"}
      >
        {card.expiration}
      </Text>
      <View style={{ height: 22, marginTop: 10 }}>
        <Image
          style={
            card.type === CardType.VISA
              ? { width: 99, height: 22 }
              : { width: 99, height: 20 }
          }
          source={card.type === CardType.VISA ? patternVisa : patternMasterCard}
        />
      </View>
    </CardLayout>
  );
};

export default CardComponents;
