import { Flex, Heading, Collapse, Box, useDisclosure } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import React from 'react';

type FaqCardProps = {
	question: string;
	answer: string;
	colorState: boolean[];
	setColorState: React.Dispatch<React.SetStateAction<boolean[]>>;
	showSelected: boolean;
	index: number;
};

const FAQCard = ({
	question,
	answer,
	colorState,
	setColorState,
	showSelected,
	index,
}: FaqCardProps) => {
	const { isOpen, onToggle } = useDisclosure();
	return (
		<Flex
			background={'blackAlpha.50'}
			w={'full'}
			rounded={'md'}
			direction={'column'}
			px={6}
			gap={4}
			py={8}
			onClick={() => {
				onToggle();
				setColorState(
					colorState.map((item, i) => (i === index ? !item : item))
				);
			}}
			cursor={'pointer'}
			_hover={{
				color: 'brand.100',
				transition: 'all 0.1s ease',
			}}>
			<Flex
				justify={'space-between'}
				align={'center'}
				backdropBlur={isOpen ? 'blur(4px)' : 'blur(0px)'}
				backdropContrast={isOpen ? '0.5' : '1'}
				w={'full'}
				color={showSelected ? 'brand.100' : 'black'}
				_hover={{
					color: 'brand.100',
					transition: 'all 0.1s ease',
				}}>
				<Heading fontSize={{ base: 18 }}>{question}</Heading>
				<Flex>
					{isOpen ? (
						<MinusIcon transition={'all 0.8s ease'} />
					) : (
						<AddIcon transition={'all 0.8s ease'} />
					)}
				</Flex>
			</Flex>
			<Collapse in={isOpen} animateOpacity>
				<Box color="black">{answer}</Box>
			</Collapse>
		</Flex>
	);
};

export default FAQCard;
