import { Flex, Heading, useEditable } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FAQData } from '../../data/data';
import FAQCard from '../../components/FAQCard/FAQCard';

const FAQSection = () => {
  const [colorState, setColorState] = useState(
    new Array(FAQData.length).fill(false),
  );
  return (
    <Flex
      px={{ base: 6, md: 24 }}
      py={12}
      justify={'center'}
      direction={'column'}
      align={'center'}
      gap={12}
      w={'full'}
    >
      <Heading
        textAlign={'center'}
        fontSize={{ base: 24, md: 36 }}
        color={'brand.100'}
      >
        Frequently Asked Questions
      </Heading>
      <Flex
        w="full"
        direction={'column'}
        gap={8}
        justify={'center'}
        align={'center'}
      >
        {FAQData.map((faq, index) => (
          <FAQCard
            showSelected={colorState[index]}
            index={index}
            setColorState={setColorState}
            key={index}
            colorState={colorState}
            {...faq}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default FAQSection;
