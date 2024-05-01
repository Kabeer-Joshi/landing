import { Flex, Heading, Text } from '@chakra-ui/react';

type K12Card3Props = {
	title: string;
	description: string;
	image: any;
	points: string[];
};

const K12Card3 = ({ title, description, image, points }: K12Card3Props) => {
	return (
		<Flex
			background={'blue.50'}
			// background={"brand.bg1"}
			// background={"brand.bg2"}
			justify={'center'}
			align={'center'}
			flex={1}
			direction={'column'}
			px={{ base: 7, lg: 24 }}
			py={8}
			gap={8}
			w={'full'}>
			<Heading fontSize={{ base: '2xl', md: '4xl' }} color={'brand.100'}>
				{title}
			</Heading>
			<Text textColor={'gray.500'} fontSize={{ base: 'md', md: 'xl' }}>
				{description}
			</Text>
			<Flex
				w={'full'}
				justify={'start'}
				direction={'column'}
				align={'start'}
				gap={8}>
				{/*
              {points.map((point, index) => (
                  <>
                      <CheckWithName key={index} point={point} />
                  </>
              ))}
            */}
			</Flex>
		</Flex>
	);
};

export default K12Card3;
