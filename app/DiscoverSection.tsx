import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
// import TextDetailsCards from '../../components/Homecards/TextDetailsCards';
import TextDetailsCards from '@/components/Homecards/TextDetailsCards';
import { RiAdminFill } from 'react-icons/ri';
import { ImCheckmark } from 'react-icons/im';
import { PiStudentFill } from 'react-icons/pi';
import { FaHandshake } from 'react-icons/fa';

// const data = [
//     "Streamline administrative tasks and enhance communication.",
//     "Embrace the National Education Policy 2020 with our NEP-compatible platform.",
//     "Elevate student engagement and learning outcomes with interactive features.",
//     "Experience hassle-free implementation and ongoing support.",
// ];

const data = [
	{
		title: 'Streamline administrative tasks and enhance communication.',
		icon: <RiAdminFill size={70} />,
	},
	{
		title:
			'Embrace the National Education Policy 2020 with our NEP-compatible platform.',
		icon: <ImCheckmark size={70} />,
	},
	{
		title:
			'Elevate student engagement and learning outcomes with interactive features.',
		icon: <PiStudentFill size={70} />,
	},
	{
		title: 'Experience hassle-free implementation and ongoing support.',
		icon: <FaHandshake size={70} />,
	},
];

const DiscoverSection = () => {
	return (
		<Flex minH={'lg'}>
			<Flex
				justify={'start'}
				align={'center'}
				w={'100%'}
				flex={1}
				p={8}
				gap={10}
				direction={'column'}
				// bg={"blue.50"}
				// bg={"blue.50"}
				bg={'brand.bg1'}>
				<Text
					color={'blue.900'}
					fontWeight={'bold'}
					fontSize={{ base: '2xl', md: '3xl' }}
					textAlign={'center'}>
					Discover the Future of Education with Goreeva
				</Text>
				<Flex
					py={8}
					direction={{ base: 'column', md: 'row' }}
					justify={'center'}
					gap={6}
					align={'stretch'}>
					{data.map((item, index) => (
						<TextDetailsCards key={index} {...item} />
					))}
				</Flex>
			</Flex>
		</Flex>
	);
};

export default DiscoverSection;
