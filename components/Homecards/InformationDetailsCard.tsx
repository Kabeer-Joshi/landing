import React from 'react';
import { Flex, Heading, Highlight, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

const InformationDetailsCard = ({
	questionTitle,
	answer,
	textColor,
	bgColor,
	imageSection,
}: {
	questionTitle: string;
	answer: string;
	textColor: string;
	bgColor: string;
	imageSection: any;
}) => {
	return (
		<Flex
			background={bgColor}
			w={'full'}
			py={12}
			px={10}
			justify={{ base: 'center', md: 'space-around' }}
			rounded={'xl'}
			align={'start'}
			gap={8}
			direction={{ base: 'column', md: 'row' }}>
			<Flex flex={2} direction={'column'} gap={6}>
				<Heading as={'h5'} fontSize={30}>
					<Highlight query={['SIS', 'LMS']} styles={{ color: textColor }}>
						{questionTitle}
					</Highlight>
				</Heading>
				<Text fontSize={'lg'}>{answer}</Text>
			</Flex>
			<Flex justify="center" align={'center'} w={'full'} flex={1}>
				<Image
					alt="image-section"
					rounded={'xl'}
					w={300}
					h={300}
					src={imageSection}></Image>
			</Flex>
		</Flex>
	);
};

export default InformationDetailsCard;
