import React from 'react';
import { Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';
import { BsCheckCircleFill } from 'react-icons/bs';

type HedCard1Props = {
	title: string;
	description: string;
	image: any;
	points: string[];
	inverted?: boolean;
};

const HEdCard1 = ({
	title,
	description,
	image,
	points,
	inverted = false,
}: HedCard1Props) => {
	return (
		<Flex gap={16} justify={'center'} align={'center'} direction={'column'}>
			<Heading
				fontSize={{ base: '2xl', md: '4xl' }}
				textAlign={'center'}
				color={'brand.100'}
				px={3}>
				{title}
			</Heading>
			<Flex
				px={{ base: 10, lg: inverted ? 24 : 36 }}
				gap={inverted ? 32 : 12}
				direction={
					inverted
						? {
								base: 'column-reverse',
								md: 'row-reverse',
								lg: 'row-reverse',
						  }
						: { base: 'column', md: 'row', lg: 'row' }
				}
				justify={'space-around'}
				align={'start'}>
				{/* FOR POints and description */}

				<Flex gap={10} direction={'column'} flex={1}>
					<Text textColor={'gray.500'} fontSize={{ base: 'md', md: 'xl' }}>
						{description}
					</Text>
					<Flex direction={'column'} gap={8}>
						{points.map((point, index) => {
							return (
								<Flex
									direction={'row'}
									align={'center'}
									justify={'start'}
									key={index}
									gap={4}>
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
						})}
					</Flex>
				</Flex>

				{/* For IMage and a bit descripion */}
				<Flex
					direction={'column'}
					justify={'center'}
					align={'start'}
					flex={1}
					gap={8}>
					<Image
						alt="
                    hed-card-1
                    "
						rounded={'2xl'}
						w={800}
						src={image}
					/>
					<Text textColor={'gray.500'} fontSize={{ base: 'md', md: 'xl' }}>
						{description}
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default HEdCard1;
