import React from "react";
import { ScrollView, StyleSheet, Dimensions } from "react-native";
import { Box, ScrollableContent, Header, Text } from "../../Components";
import { HomeNavigationProps } from "../../Components/Navigation";
import { makeStyles, Theme } from "../../Components/Theme";
import Graph, { DataPoint } from "./Graph/Graph";
import Transaction from "./Transaction";

const startDate = new Date("2019-09-01").getTime();
const numberOfMonths = 6;

const footerHeight = Dimensions.get("window").width / 5;

const data: DataPoint[] = [
  {
    date: new Date("2019-10-01").getTime(),
    value: 139.42,
    color: "primary",
    id: 245671,
  },
  {
    date: new Date("2019-12-01").getTime(),
    value: 281.23,
    color: "graph1",
    id: 245672,
  },
  {
    date: new Date("2020-02-01").getTime(),
    value: 198.54,
    color: "graph2",
    id: 245673,
  },
];

interface TransactionHistoryProps {}

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<"TransactionHistory">) => {
  const styles = useStyles();

  return (
    <ScrollableContent>
      <Box flex={1} backgroundColor="background">
        <Header
          title="Transaction History"
          left={{ icon: "arrow-left", onPress: () => navigation.goBack() }}
          right={{ icon: "share", onPress: () => true }}
        />

        <Box padding="m" flex={1}>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Box>
              <Text variant="header" color="secundary" opacity={0.3}>
                TOTAL SPENT
              </Text>
              <Text variant="title1" color="secundary">
                $619,19
              </Text>
            </Box>
            <Box backgroundColor="primaryLight" borderRadius="m" padding="m">
              <Text color="primary">All Time</Text>
            </Box>
          </Box>

          <Graph
            data={data}
            startDate={startDate}
            numberOfMonths={numberOfMonths}
          />
          <ScrollView
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            {data.map((transaction) => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))}
          </ScrollView>
        </Box>
      </Box>
    </ScrollableContent>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  scrollView: {
    paddingBottom: footerHeight,
  },
}));

export default TransactionHistory;
