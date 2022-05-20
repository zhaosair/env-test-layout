import React from 'react';
import { Flex, Center, Box, VStack, Spacer } from "@chakra-ui/react";
require('./index.less');

/**
 * 
 */
export default function (props) {

    const { label, value, index=0 } = props;

    return (
        <VStack spacing='10px' w={120}>
            <Center w="120">
                {label}
            </Center>
            <Center axis='vertical' >
                {value}
            </Center>
            <Center w="10px">
            </Center>
        </VStack>
        
    )

}