import React from 'react'
import { Box, Text } from '../../Components'
import { DataPoint } from './Graph/Graph';
import moment from "moment";

interface TransactionProps {
    transaction: DataPoint;
}

const Transaction = ({transaction}:TransactionProps) => {
    return (
        <Box marginTop="m" flexDirection="row" justifyContent="space-between" alignItems="center">
            <Box>
                <Box flexDirection="row" alignItems="center">
                    <Box backgroundColor={transaction.color} marginRight="s" style={{width:10, height: 10, borderRadius: 5}}/>
                    <Text variant="title3" >{`#${transaction.id}`}</Text>
                </Box>
                <Text color="info">{`$${transaction.value} - ${moment(transaction.date).format("DD MMMM, YYYY")}`}</Text>
            </Box>
            <Box>
                <Text color="secundary" variant="button">See more</Text>
            </Box>
        </Box>
    );
};

export default Transaction;
