'use client';
import { Button, Flex, Highlight, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';
import { useState } from 'react';
import { AiFillAndroid, AiFillApple } from 'react-icons/ai';
//import HomeBanner from "../../assets/images/Homebanner.jpeg";
import { Link } from '@chakra-ui/next-js';
import HomeBanner from '@/assets/images/EasiestSchoolToManage.png';

const HeadingSection = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e: any) => {
		const width = e.currentTarget.offsetWidth;
		const height = e.currentTarget.offsetHeight;
		const mouseX = e.clientX - (e.currentTarget.offsetLeft + width / 2);
		const mouseY = e.clientY - (e.currentTarget.offsetTop + height / 2);
		const bgX = (mouseX / width) * 30;
		const bgY = (mouseY / height) * 30;

		setPosition({ x: bgX, y: bgY });
	};

	return (
		<Flex
			minH={{ base: screen.height - 100, md: '2xl' }}
			width="100%"
			textAlign="center"
			align="center"
			px={{ base: 8, sm: 16, md: 24 }}
			justify={{
				md: 'center',
			}}
			gap={{ base: 12, lg: 24 }}
			background={'blue.50'}
			py={12}
			direction={{ base: 'column-reverse', lg: 'row' }}>
			{/* Left Section */}
			<Flex
				direction="column"
				align="center"
				justify="center"
				height="100%"
				gap={10}
				flex={1}
				py={8}>
				<Text fontSize={{ base: '2xl', md: '5xl' }} fontWeight="extrabold">
					<Highlight
						query={['Learning', 'Management', 'School']}
						styles={{ color: 'brand.100' }}>
						Your All-in-One School & Learning Management Solution
					</Highlight>{' '}
				</Text>

				<Text fontSize={{ base: 'md', md: 'xl' }} color={'gray.600'}>
					Empower Your Educational Institution with Goreeva&apos;s cloud
					platforms
				</Text>
				<Flex gap={4} direction={['column', 'column', 'row']} mt={6}>
					<Link
						target="_blank"
						href={
							'https://play.google.com/store/apps/details?id=com.goreeva_native'
						}>
						<Button
							w={'full'}
							rounded={'full'}
							leftIcon={<AiFillAndroid color="white" size={24} />}
							bg={'brand.100'}
							color={'white'}>
							Download on Play Store
						</Button>
					</Link>

					<Link
						target="_blank"
						href={'https://apps.apple.com/us/app/goreeva/id6468810844'}>
						<Button
							rounded={'full'}
							leftIcon={<AiFillApple color="white" size={24} />}
							bg={'brand.100'}
							color={'white'}>
							Download on App Store
						</Button>
					</Link>
				</Flex>
			</Flex>

			{/* Right Section */}

			<Flex justify={'center'} align={'center'} flex={1}>
				<Image
					rounded={'2xl'}
					src={HomeBanner}
					alt="Image"
					minW={{ base: 200, md: 600, lg: 500 }}
				/>
			</Flex>
		</Flex>
	);
};

export default HeadingSection;
