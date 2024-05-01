'use client';
import { FAQData } from '@/data/data';
import {
	Box,
	Container,
	Flex,
	Heading,
	Radio,
	RadioGroup,
	Stack,
	Text,
	VStack,
	useBreakpointValue,
	useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
const Faq = () => {
	const [selectedAnswer, setSelectedAnswer] = useState(
		'Certainly! Unlock the power of GOREEVA with our free trial option. Experience the platform firsthand by filling out the contact form, and gain invaluable insights into its capabilities and impact on your institution. Seamless integration awaits!'
	);
	const layoutDirection = useBreakpointValue({ base: 'column', md: 'row' });
	const { isOpen, onToggle } = useDisclosure();

	const handleQuestionChange = (value: any) => {
		const selectedFAQ = FAQData.find((faq) => faq.question === value);
		setSelectedAnswer(selectedFAQ ? selectedFAQ.answer : '');
	};

	return (
		<Container maxW="full">
			<Heading color={'brand.100'} textAlign={'center'} my={12}>
				Frequently Asked Questions
			</Heading>
			<Flex
				direction={{ base: 'column', md: 'row' }}
				// spacing={8}
				w="100%"
				minH={{ base: 'auto', md: '500px' }}
				alignItems="stretch"
				p={{ base: 0, md: 8 }}>
				<VStack
					spacing={4}
					w="100%"
					minH="100%"
					overflowY="auto"
					// bg={"blue.50"}
					bg={'brand.bg2'}
					p={6}
					alignItems="flex-start"
					borderLeftRadius={{ base: 'lg', md: 'lg' }}
					borderRightRadius={{ base: 'lg', md: 'none' }}>
					<Heading
						fontSize={{ base: '2xl', md: '3xl' }}
						w={'full'}
						textAlign={'center'}
						color={'black'}
						mb={3}>
						Questions
					</Heading>
					<RadioGroup onChange={handleQuestionChange}>
						<Stack direction="column" gap={5}>
							{FAQData.map((faq) => (
								<Flex
									gap={3}
									key={faq.question}
									bg={selectedAnswer === faq.answer ? 'black' : 'transparent'}
									borderRadius="md"
									py={{ base: 4, md: 2 }}
									px={5}
									direction={'column'}
									transition={'all 0.5s ease'}>
									<Radio
										value={faq.question}
										colorScheme={
											selectedAnswer === faq.answer ? 'white' : 'red'
										}
										isInvalid={selectedAnswer !== faq.answer}
										_invalid={{
											borderColor: 'brand.100',
										}}>
										<Text
											fontSize={{ base: 'md', md: 'lg' }}
											color={selectedAnswer === faq.answer ? 'white' : 'black'}
											pl={2}>
											{faq.question}
										</Text>
									</Radio>

									{/* Answer below the question for small screen */}
									{layoutDirection === 'column' &&
										selectedAnswer === faq.answer && (
											<Flex
												// minH={{ base: "200px", md: "auto" }}
												w="100%"
												p={4}
												// bg={"blue.50"}
												bg={'brand.bg2'}
												rounded={'lg'}>
												<Text
													fontSize={{
														base: 'sm',
														md: 'sm',
													}}>
													{selectedAnswer}
												</Text>
											</Flex>
										)}
								</Flex>
							))}
						</Stack>
					</RadioGroup>
				</VStack>

				{/* Answer for large screen*/}
				{layoutDirection !== 'column' && (
					<Box borderRightRadius={'lg'} minH="100%" w="100%" bg="white" p={6}>
						<Flex px={8} gap={5} direction="column" h="100%">
							<Heading textAlign={'center'} color={'black'} mb={3} as={'u'}>
								Answer
							</Heading>
							<Flex p={6} rounded={'lg'} bg={'brand.bg2'} h="75%">
								<Text color={'black'} fontSize={'xl'}>
									{selectedAnswer}
								</Text>
							</Flex>
						</Flex>
					</Box>
				)}
			</Flex>
		</Container>
	);
};

export default Faq;
