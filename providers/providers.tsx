// app/providers.tsx
'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import NavbarContextProvider from './NavbarContextProvider';

export function Providers({ children }: { children: React.ReactNode }) {
	const [navbarActiveLink, setNavbarActiveLink] = useState('/');

	return (
		<ChakraProvider>
			<NavbarContextProvider>{children}</NavbarContextProvider>
		</ChakraProvider>
	);
}
