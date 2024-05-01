import React from 'react';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { BsCheckCircleFill } from 'react-icons/bs';

type CheckWithNameProps = {
	point: string;
};

const CheckWithName = ({ point }: CheckWithNameProps) => {
	return (
		<Flex direction={'row'} align={'center'} justify={'start'} gap={4}>
			<Icon
				fontSize={{ base: 'lg', md: '2xl' }}
				as={BsCheckCircleFill}
				color={'brand.100'}
			/>

			<Text fontWeight={'bold'} fontSize={{ base: 'md', md: 'xl' }}>
				{point}
			</Text>
		</Flex>
	);
};

export default CheckWithName;
