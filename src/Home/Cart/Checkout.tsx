import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { number } from "yup";
import { Box, MyButton, Text, useTheme } from "../../Components";
import CardComponents, { CardType } from "./CardComponents";
import AddCardComponents from "./AddCardComponents";
import { CARD_HEIGHT } from "./CardLayout";
import LineItem from "./LineItem";

interface CheckoutProps {
  minHeight: number;
}

const cards = [
  {
    id: 0,
    type: CardType.VISA,
    last4Digits: 5467,
    expiration: "05/24",
  },
  {
    id: 1,
    type: CardType.MASTERCARD,
    last4Digits: 3827,
    expiration: "10/23",
  },
];

const Checkout = ({ minHeight }: CheckoutProps) => {
  const theme = useTheme();
  const [selectedCard, setselectedCard] = useState(cards[0].id);
  return (
    <Box flex={1} backgroundColor="secundary" style={{ paddingTop: minHeight }}>
      <Box flex={1} padding="m">
        <Box height={CARD_HEIGHT}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <AddCardComponents />
            {cards.map((card) => (
              <CardComponents
                key={card.id}
                card={card}
                selected={selectedCard === card.id}
                onSelect={() => setselectedCard(card.id)}
              />
            ))}
          </ScrollView>
        </Box>
        <Box marginTop="m">
          <Text color="background" variant="title3">Delivery address</Text>
          <Box flexDirection="row" opacity={0.5} paddingVertical="m">
            <Box flex={1} >
              <Text color="background">
                Unit 15, York Farm Business Centre, Watling St, Towcester
              </Text>
            </Box>
            <Box justifyContent="center" alignItems="center">
              <Text color="background">Change</Text>
            </Box>
          </Box>
          <LineItem label="Total Items (6)" value={189.94}/>
          <LineItem label="Standard Delivery" value={12.00}/>
          <LineItem label="Total Payment" value={201.84}/>
        </Box>
        <Box paddingVertical="m" alignItems="center" flex={1} justifyContent="flex-end">
            <MyButton label="Swipe to Pay $201.84" variant="primary" onPress={()=> true}/>
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
