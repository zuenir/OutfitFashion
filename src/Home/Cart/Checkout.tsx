import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Box, Text, useTheme, MyButton } from "../../Components";
import CardComponents, { CardType } from "./components/CardComponents";
import AddCardComponents from "./components/AddCardComponents";
import { CARD_HEIGHT } from "./components/CardLayout";
import LineItem from "./components/LineItem";
import MySwipeButton from "../../Components/Form/MySwipeButton";
import { useNavigation } from "@react-navigation/native";

interface CheckoutProps {
  minHeight: number;
  checkoutState: boolean;
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

const Checkout = ({ minHeight, checkoutState }: CheckoutProps) => {
  const theme = useTheme();
  const navigation = useNavigation();
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
          <Text color="background" variant="title3">
            Delivery address
          </Text>
          <Box flexDirection="row" opacity={0.5} paddingVertical="m">
            <Box flex={1} justifyContent="flex-start" paddingRight="m">
              <Text color="background">
                Unit 15, York Farm Business Centre, Watling St, Towcester
              </Text>
            </Box>
            <Box justifyContent="center" alignItems="center">
              <Text color="background">Change</Text>
            </Box>
          </Box>
          <LineItem label="Total Items" label_value="(6)" value={189.94} />
          <LineItem label="Standard Delivery" value={12.01} />
          <LineItem label="Total Payment" value={201.84} />
        </Box>
        <Box
          paddingVertical="m"
          alignItems="center"
          flex={1}
          justifyContent="flex-end"
        >
          {checkoutState === true ? (
            <MySwipeButton
              label="Swipe to Pay $201.84"
              onPress={() => {
                navigation.navigate("SuccessPopUp");
              }}
            />
          ) : (
            <Box
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              paddingTop="l"
            >
              <Box
                flexDirection="column"
                flex={1}
                justifyContent="flex-start"
                paddingRight="m"
              >
                <Text color="background" style={{ opacity: 0.5 }}>
                  Total Payment:
                </Text>
                <Text variant="title2" color="background">
                  $189,94
                </Text>
              </Box>
              <Box justifyContent="flex-end">
                <MyButton
                  variant="primary"
                  label="Go to checkout"
                  style={{ width: 181 }}
                  onPress={() => true}
                />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Checkout;
