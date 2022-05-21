import React from 'react';
import { ChakraProvider, Flex, Box, VStack } from "@chakra-ui/react";
import { AutoLayout } from 'zero-element-boot';

import layout from './layout';

export default function Index (props) {

  const { data = [], layoutJson = layout } = props;

  /**
   * 页面配置
   */
  const config = {
    items: data.length > 0 ? data : [],
    layout: layoutJson
  };

  const onJarItemClick = (item) => {
    //TODO
    console.log(item, ' === item')
  }

  return (
    <ChakraProvider>
      <Flex>
        <Box>
          <VStack spacing='3px'>
            <AutoLayout {...config} onItemClick={onJarItemClick} />
          </VStack>
        </Box>
      </Flex>
    </ChakraProvider>
  )
}