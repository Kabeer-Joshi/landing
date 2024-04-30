import { Flex, Text, Heading } from '@chakra-ui/react';

const SubInformationSection = () => {
  return (
    <Flex bg={'blue.50'} align={'center'} justify={'center'} maxW={'full'}>
      <Flex
        gap={12}
        direction={'column'}
        py={24}
        justify={'center'}
        w={'5xl'}
        align={'center'}
        px={3}
      >
        <Heading fontSize={{ base: '2xl', md: '5xl' }} textAlign={'center'}>
          Designed for the busy classroom
        </Heading>
        <Text fontSize={{ base: 'md', md: '2xl' }} textAlign={'center'}>
          By streamlining easy access to resources, our digital classrooms help
          jump-start the learning process. Admins can control the resources
          available, while teachers and students can benefit from the increased
          interactivity, convenience, and flexibility of a digital platform.
        </Text>
      </Flex>
    </Flex>
  );
};

export default SubInformationSection;
