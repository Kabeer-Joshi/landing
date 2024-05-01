import { Flex } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';
import HEdCard1 from '../../components/HigherEdCards/HEdCard1';
import K12Card2 from '../../components/K12Cards/K12Card2';
import K12Card3 from '../../components/K12Cards/K12Card3';
import { HigherEdMidSectionData } from '../../data/data';
const HigherEdMidSection = () => {
	return (
		<Flex
			w={'full'}
			justify={'center'}
			align={'center'}
			direction={'column'}
			gap={12}
			my={12}>
			<HEdCard1
				title={HigherEdMidSectionData[0].title}
				description={HigherEdMidSectionData[0].description}
				image={HigherEdMidSectionData[0].image}
				points={HigherEdMidSectionData[0].points}
			/>
			<Flex
				px={{ base: 3, lg: 24 }}
				gap={16}
				direction={{ base: 'column', lg: 'row' }}
				w={'full'}
				my={16}>
				<K12Card2 {...HigherEdMidSectionData[1]} />
				<K12Card3 {...HigherEdMidSectionData[2]} />
			</Flex>
			<Flex
				px={{ base: 3, lg: 24 }}
				gap={16}
				direction={{ base: 'column', lg: 'row' }}
				w={'full'}
				my={16}>
				<K12Card3 {...HigherEdMidSectionData[3]} />
				<K12Card2 {...HigherEdMidSectionData[4]} />
			</Flex>
			<HEdCard1 {...HigherEdMidSectionData[5]} />

			<Flex
				px={{ base: 0, lg: 24 }}
				gap={12}
				my={16}
				w={'full'}
				direction={{ base: 'column', lg: 'row' }}>
				<K12Card3 {...HigherEdMidSectionData[6]} />
				<Flex
					direction={'column'}
					flex={1}
					justify={'space-around'}
					align={'center'}
					w={'full'}
					gap={6}
					px={5}>
					<Image
						rounded={'lg'}
						alt="Nothing"
						w={500}
						src={HigherEdMidSectionData[6].image}
					/>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default HigherEdMidSection;
