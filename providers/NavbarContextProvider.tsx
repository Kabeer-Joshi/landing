'use client';

import { createContext, useState, Dispatch, SetStateAction } from 'react';

type NavbarContextType = {
	navbarActiveLink: string;
	setNavbarActiveLink: Dispatch<SetStateAction<string>>;
};

export const NavbarContext = createContext<NavbarContextType>({
	navbarActiveLink: '/',
	setNavbarActiveLink: () => {},
});

const NavbarContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [navbarActiveLink, setNavbarActiveLink] = useState('/');

	return (
		<NavbarContext.Provider value={{ navbarActiveLink, setNavbarActiveLink }}>
			{children}
		</NavbarContext.Provider>
	);
};

export default NavbarContextProvider;
