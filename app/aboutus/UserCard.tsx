import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';
import React from 'react';
import { FaGithubAlt, FaInstagram, FaLinkedin } from 'react-icons/fa';
const UserCard = ({
	name,
	role,
	instagram,
	github,
	image,
	linkedin,
}: {
	name: string;
	role: string;
	instagram: string;
	github: string;
	image: any;
	linkedin: string;
}) => {
	return (
		<Box flex={1} alignSelf={'stretch'} position={'relative'} minW={'280px'}>
			<Flex
				position={'absolute'}
				justifyContent={'center'}
				alignItems={'center'}
				top={'-60px'}
				left={'27%'}>
				<Image
					borderRadius="full"
					boxSize="120px"
					src={image}
					alt="Dan Abramov"
				/>
			</Flex>
			<Flex
				p={14}
				backgroundColor={'brand.100'}
				color={'white'}
				rounded={'lg'}
				boxShadow={'xl'}
				direction={'column'}
				alignItems={'center'}
				textAlign={'center'}>
				<Heading mt={10} display={'block'} as="h2" fontSize={'xl'}>
					{name}
				</Heading>
				<Text
					color={'whiteAlpha.700'}
					display={'block'}
					as="h2"
					fontSize={'md'}>
					{role}
				</Text>
				<Flex mt={7} gap={4} justifyContent={'center'} alignItems={'center'}>
					<Link href={instagram} isExternal>
						<FaInstagram cursor={'pointer'} size={'25px'} />{' '}
					</Link>
					<Link href={linkedin} isExternal>
						<FaLinkedin cursor={'pointer'} size={'25px'} />
					</Link>
					<Link href={github} isExternal>
						<FaGithubAlt cursor={'pointer'} size={'25px'} />
					</Link>
				</Flex>
			</Flex>
		</Box>
	);
};

export default UserCard;
