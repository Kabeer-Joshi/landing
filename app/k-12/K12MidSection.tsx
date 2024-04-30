import { Image } from '@chakra-ui/next-js';
import { Flex } from '@chakra-ui/react';
import K12MidImg from '../../assets/images/k12MidImg.png';
import K12Card1 from '../../components/K12Cards/K12Card1';
import K12Card2 from '../../components/K12Cards/K12Card2';
import K12Card3 from '../../components/K12Cards/K12Card3';
import { K12MidSectionData } from '../../data/data';
const K12MidSection = () => {
	return (
		<Flex
			direction={'column'}
			gap={12}
			my={12}
			w={'full'}
			justify={'center'}
			align={'center'}>
			<K12Card1 {...K12MidSectionData[0]} />
			<Flex
				px={{ base: 3, lg: 24 }}
				gap={16}
				direction={{ base: 'column', lg: 'row' }}
				w={'full'}
				my={16}>
				<K12Card2 {...K12MidSectionData[1]} />
				<K12Card3 {...K12MidSectionData[2]} />
			</Flex>
			<K12Card1 {...K12MidSectionData[3]} inverted={true} />
			<Flex
				px={{ base: 0, lg: 12 }}
				gap={12}
				my={16}
				w={'full'}
				direction={{ base: 'column', lg: 'row' }}>
				<K12Card3 {...K12MidSectionData[4]} />
				<Flex
					direction={'column'}
					flex={1}
					justify={'space-around'}
					align={'center'}
					w={'full'}
					gap={6}
					px={{ base: 10, md: 0 }}>
					<Image rounded={'lg'} w={500} src={K12MidImg} />
				</Flex>
			</Flex>
			<Flex
				px={{ base: 0, lg: 12 }}
				gap={12}
				my={16}
				w={'full'}
				direction={{ base: 'column', lg: 'row' }}>
				<Flex
					direction={'column'}
					flex={1}
					justify={'space-around'}
					align={'center'}
					w={'full'}
					gap={6}
					px={{ base: 10, md: 0 }}>
					<Image rounded={'lg'} w={500} src={K12MidSectionData[5].image} />
				</Flex>
				<K12Card3 {...K12MidSectionData[5]} />
			</Flex>
		</Flex>
	);
};

export default K12MidSection;
