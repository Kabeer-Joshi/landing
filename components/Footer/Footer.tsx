import { NavbarContext } from '@/providers/NavbarContextProvider';
import { Link } from '@chakra-ui/next-js';
import { Box, Button, Divider, Flex, Image, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { AiFillAndroid, AiFillApple, AiFillLinkedin } from 'react-icons/ai';
import logo from '../../assets/images/goreevalogo.jpeg';

const socialLinks = [
	// {
	//     name: "Instagram",
	//     icon: <AiFillInstagram size={38} />,
	//     link: "https://www.instagram.com/",
	// },
	{
		name: 'LinkedIn',
		icon: <AiFillLinkedin size={38} />,
		link: 'https://www.linkedin.com/company/goreeva/',
	},
	// {
	//     name: "Twitter",
	//     icon: <AiOutlineTwitter size={38} />,
	//     link: "https://www.twitter.com/",
	// },
	// {
	//     name: "Facebook",
	//     icon: <AiFillFacebook size={38} />,
	//     link: "https://www.facebook.com/",
	// },
	// {
	//     name: "Youtube",
	//     icon: <AiFillYoutube size={38} />,
	//     link: "https://www.youtube.com/",
	// },
];

const Footer = () => {
	const { navbarActiveLink, setNavbarActiveLink } = useContext(NavbarContext);
	return (
		<Flex direction={'column'}>
			<Flex
				backgroundColor={'blackAlpha.100'}
				alignItems={{ base: 'start' }}
				justifyContent={'space-evenly'}
				gap={{ base: 8 }}
				direction={{ base: 'column', md: 'row' }}
				px={{ base: 8, md: 24 }}
				py={{ base: 8 }}>
				{/* Company Description */}
				<Flex
					gap={5}
					direction={'column'}
					justifyContent={'center'}
					alignItems={'start'}
					width={'100%'}>
					{/* <Text
                        fontWeight={"bold"}
                        color={"brand.100"}
                        fontSize={"lg"}
                    >
                        GOREEVA
                    </Text> */}
					<Image src={logo} w={{ base: 50, sm: 78 }} alt="logo" />

					{/*
                      <Text>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                      </Text>
                    */}

					{/* Social icons */}
					<Flex
						width={'100%'}
						justifyContent={'space-between'}
						align={'center'}
						direction={'row'}
						gap={2}>
						{socialLinks.map((socialLink) => (
							<Link
								key={socialLink.name}
								href={socialLink.link}
								target="_blank"
								isExternal
								textAlign={'center'}
								rounded={'full'}>
								{socialLink.icon}
							</Link>
						))}
					</Flex>
				</Flex>

				{/* Company */}

				<Flex gap={3} width={'100%'} direction={'column'}>
					<Text fontWeight={'bold'} color={'brand.100'} fontSize={'lg'}>
						COMPANY
					</Text>
					<Flex gap={2} direction={'column'}>
						<Box>
							{/* <Link
								onClick={() => {
									setNavbarActiveLink("/aboutus");
									window.scrollTo(0, 0);
								}}
							>
								About us
							</Link> */}
						</Box>
						<Box>
							<Link href="https://beige-mame-83.tiiny.site/" target="_blank">
								Privacy Policy
							</Link>
						</Box>
						<Box>
							<Link href={'/'}>Terms and Conditions</Link>
						</Box>
					</Flex>
				</Flex>

				{/* Services Provided */}
				<Flex gap={3} width={'100%'} direction={'column'}>
					<Text fontWeight={'bold'} color={'brand.100'} fontSize={'lg'}>
						SERVICES
					</Text>
					<Flex gap={2} direction={'column'}>
						<Box>
							<Link
								href="/k-12"
								onClick={() => {
									setNavbarActiveLink('/k-12');
									window.scrollTo(0, 0);
								}}>
								K-12
							</Link>
						</Box>
						<Box>
							<Link
								href="/higher-ed"
								onClick={() => {
									setNavbarActiveLink('/higher-ed');
									window.scrollTo(0, 0);
								}}>
								Higher Education
							</Link>
						</Box>
					</Flex>
				</Flex>
				{/* Download the App */}
				<Flex width={'100%'} gap={5} direction={'column'}>
					<Text fontWeight={'bold'} color={'brand.100'} fontSize={'lg'}>
						DOWNLOAD THE APP
					</Text>
					<Flex
						width={'100%'}
						direction={'column'}
						gap={4}
						justifyContent={'center'}
						align={'center'}>
						<Link
							target="_blank"
							href={
								'https://play.google.com/store/apps/details?id=com.goreeva_native'
							}>
							<Button
								fontWeight={'bold'}
								background={'brand.100'}
								px={6}
								rounded={'full'}
								py={4}>
								<AiFillAndroid color="white" size={24} />
								<Text color={'white'} px={3}>
									{' '}
									Download on Google Play
								</Text>
							</Button>
						</Link>
						<Link
							target="_blank"
							href={'https://apps.apple.com/us/app/goreeva/id6468810844'}>
							<Button
								fontWeight={'bold'}
								background={'brand.100'}
								px={6}
								rounded={'full'}
								py={4}>
								<AiFillApple color="white" size={24} />
								<Text color="white" px={3}>
									{' '}
									Download on Apple Store
								</Text>
							</Button>
						</Link>
					</Flex>
				</Flex>
			</Flex>
			<Divider color={'black'} />
			<Flex>
				<Text
					textAlign={'center'}
					width={'100%'}
					py={4}
					color={'blackAlpha.700'}>
					&copy; 2021 GOREEVA. All Rights Reserved.
				</Text>
			</Flex>
		</Flex>
	);
};

export default Footer;
