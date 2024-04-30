import { Flex, Heading, Text } from '@chakra-ui/react';
import { AboutUsData } from '../../data/data';
import UserCard from './UserCard';
const AboutUs = () => {
	return (
		<Flex
			pt={16}
			direction={'column'}
			alignItems={'center'}
			justifyContent={'center'}
			bg={'blue.50'}>
			<Heading color={'brand.100'} as={'h1'} fontSize={'6xl'} my={9}>
				{' '}
				About Us{' '}
			</Heading>
			<Text
				textAlign={'center'}
				fontSize={'xl'}
				my={7}
				maxW={'800px'}
				as={'h2'}
				fontWeight={'bold'}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit.
			</Text>

			<Text textAlign={'center'} my={3} maxW={'800px'} as={'h3'}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia animi
				quidem sit quasi labore fugit, expedita numquam in facilis repellat
				voluptas aliquid culpa tempora eius natus assumenda itaque earum
				ratione!
			</Text>
			<Text textAlign={'center'} my={3} maxW={'800px'} as={'h3'}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ducimus,
				ut aut optio magnam, consequatur nihil beatae sequi blanditiis,
				laboriosam nam! Nulla nisi illum hic. Perferendis modi quod eum
				inventore!
			</Text>
			{/* <Text
				textAlign={"center"}
				fontSize={"xl"}
				my={7}
				maxW={"800px"}
				as={"h2"}
				fontWeight={"bold"}
			>
				Built Using
				<Flex mt={5} gap={5}>
					<Box
						p={3}
						backgroundColor={"brand.100"}
						rounded={"lg"}
						boxShadow={"lg"}
						color={"whiteAlpha.900"}
					>
						{" "}
						<DiReact size={"3rem"} />{" "}
					</Box>
					<Box
						p={3}
						backgroundColor={"brand.100"}
						rounded={"lg"}
						boxShadow={"lg"}
						color={"whiteAlpha.900"}
					>
						<SiChakraui size={"3rem"} />
					</Box>
				</Flex>
			</Text> */}

			<Heading color={'brand.100'} as={'h1'} fontSize={'5xl'} mt={16} mb={24}>
				{' '}
				Our Team{' '}
			</Heading>

			<Flex
				gap={{ base: 28, lg: 12 }}
				direction={{ base: 'column', lg: 'row' }}
				alignItems={'stretch'}
				mb={12}>
				{AboutUsData.map((item, index) => (
					<UserCard
						key={index}
						name={item.name}
						role={item.role}
						image={item.image}
						instagram={item.instagram}
						github={item.github}
						linkedin={item.linkedin}
					/>
				))}
			</Flex>
		</Flex>
	);
};

export default AboutUs;
