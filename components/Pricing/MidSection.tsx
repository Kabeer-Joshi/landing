'use client';
import { Container, Flex, Box } from '@chakra-ui/react';
import Details from './Details';
import Form from './ContactForm';

export default function MidSection() {
	return (
		<Container maxW="full" mt={0} overflow="hidden" p={4} bg={'blue.50'}>
			<Flex
				direction={{ base: 'column', md: 'row' }}
				justifyContent="space-between"
				w="full"
				gap={4}>
				<Box w={{ base: '100%', md: '48%' }} mb={{ base: 4, md: 0 }}>
					<Details />
				</Box>
				<Box w={{ base: '100%', md: '48%' }}>
					<Form />
				</Box>
			</Flex>
		</Container>
	);
}
