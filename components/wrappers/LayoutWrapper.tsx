'use client';

import { Flex } from '@chakra-ui/react';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

import React from 'react';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<Flex minH={'6xl'} direction={'column'} justifyContent={'space-between'}>
			<Flex w={'auto'} direction={'column'} minH={'auto'}>
				<Navbar />
				{children}
			</Flex>

			{/* This is Footer */}
			<Footer />
		</Flex>
	);
};

export default LayoutWrapper;
