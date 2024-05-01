import { Heading, Flex, Highlight, Icon } from '@chakra-ui/react';
import React from 'react';

type CatchyBannerProps = {
	title: string;
	icon: any;
};

const CatchyBanner = ({ title, icon }: CatchyBannerProps) => {
	return (
		<Flex
			background={'blue.50'}
			minH={'md'}
			direction={{ base: 'column', md: 'row' }}
			justify={'center'}
			align={'center'}
			gap={8}
			my={8}>
			<Icon as={icon} fontSize={{ base: 58 }} />
			<Heading fontSize={{ base: 24, md: 32 }} textAlign={'center'}>
				<Highlight query={['K-12']} styles={{ color: 'brand.100' }}>
					{title}
				</Highlight>
			</Heading>
		</Flex>
	);
};

export default CatchyBanner;
