import { HamburgerIcon } from '@chakra-ui/icons';
import {
	Box,
	Button,
	Drawer,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Image,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/goreevalogo.jpeg';
import { NavbarContext } from '../../context/NavbarContext';

const menuData = [
	{
		name: 'Home',
		path: '/',
	},
	{
		name: 'K-12',
		path: '/k-12',
	},
	{
		name: 'Higher Ed.',
		path: '/higher-ed',
	},
	// {
	//   name: 'Discussion',
	//   path: '/discussion-app',
	// },
	{
		name: 'Pricing',
		path: '/pricing',
	},
	// {
	//     name: "About us",
	//     path: "/aboutus",
	// },
];

const Navbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();
	const [tabIndex, setTabIndex] = useState('/');
	const { navbarActiveLink, setNavbarActiveLink } = useContext(NavbarContext);
	const location = useLocation();

	useEffect(() => {
		console.log(location.pathname);
	}, [location.pathname]);
	return (
		<>
			<Flex
				px={6}
				py={5}
				justifyContent={{ base: 'space-between', md: 'space-evenly' }}
				alignItems={'center'}
				background={'white'}
				backgroundColor={'blue.50'}>
				{/* This is LOGO */}
				<Flex>
					<Text
						fontSize={{ base: '2xl', md: '4xl' }}
						color="brand.100"
						cursor={'pointer'}
						onClick={() => {
							setNavbarActiveLink('/');
							navigate('/');
						}}
						display={{ base: 'none', md: 'flex' }}>
						GOREEVA
					</Text>
					<Image
						src={logo}
						display={{ base: 'flex', md: 'none' }}
						w={{ base: 50, sm: 55 }}
						alt="logo"
					/>
				</Flex>

				{/* This is Menu */}
				<Flex
					gap={6}
					rounded={'full'}
					display={{ base: 'none', md: 'flex' }}
					px={8}
					py={2}
					color={'black'}
					backgroundColor={'blackAlpha.100'}
					fontWeight={'light'}>
					{menuData.map((item, key) => (
						<Text
							key={key}
							_hover={{
								color: 'brand.100',
								animationDuration: '0.3s',
							}}
							fontSize={'md'}
							fontWeight={'bold'}
							cursor={'pointer'}
							onClick={() => {
								setNavbarActiveLink(item.path);
								navigate(item.path);
							}}
							color={navbarActiveLink === item.path ? 'brand.100' : 'black'}>
							{item.name}
						</Text>
					))}
				</Flex>

				{/* This is navigation to app */}
				<Flex>
					<Button
						px={8}
						py={2}
						color={'white'}
						rounded={'full'}
						backgroundColor={'brand.100'}
						onClick={() => {
							setTabIndex(3);
							setNavbarActiveLink('/pricing');
							navigate('/pricing');
						}}
						fontWeight={'bold'}
						_hover={{ opacity: 0.6 }}
						display={{ base: 'none', md: 'flex' }}>
						Contact Us
					</Button>

					{/* This is navigation to app */}

					<HamburgerIcon
						onClick={onOpen}
						display={{ base: 'flex', md: 'none' }}
						color={'brand.100'}
						boxSize={6}
						cursor={'pointer'}
					/>
				</Flex>
			</Flex>

			{/* This is a Drawer */}

			<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent px={7} backgroundColor={'white'} boxShadow={'2xl'}>
					<Flex py={5} justifyContent={'space-between'}>
						<DrawerHeader color={'brand.100'} fontSize={'2xl'}>
							Menu
						</DrawerHeader>
						<DrawerCloseButton color={'brand.100'} />
					</Flex>

					<Flex gap={4} direction={'column'}>
						{/* This is Menu */}

						{menuData.map((item, key) => (
							<Box
								key={key}
								_hover={{
									color: 'brand.100',
									animationDuration: '0.3s',
								}}
								fontSize={'lg'}
								cursor={'pointer'}
								color={navbarActiveLink === item.path ? 'brand.100' : 'black'}
								onClick={() => {
									setNavbarActiveLink(item.path);
									navigate(item.path);
									onClose();
								}}>
								{item.name}
							</Box>
						))}
					</Flex>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default Navbar;
