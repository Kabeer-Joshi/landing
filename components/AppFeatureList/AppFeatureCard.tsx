import { Flex, Icon, Text } from '@chakra-ui/react';

const AppFeatureCard = ({
	icon,
	title,
	description,
}: {
	icon: any;
	title: string;
	description: string;
}) => {
	return (
		<Flex
			width={'full'}
			p={{ base: 4, md: 6 }}
			justifyContent={'center'}
			boxShadow={'md'}
			_hover={{
				transform: 'scale(1.05)',
				boxShadow: 'lg',
				transition: 'all 0.2s ease-out',
				cursor: 'pointer',
			}}
			align={{ base: 'center', md: 'start' }}
			w={'100%'}
			h={'100%'}>
			<Flex w={'10%'} pt={1} px={3} justifyContent={'center'} align={'center'}>
				<Icon color={'brand.100'} fontSize={26} as={icon} />
			</Flex>
			<Flex w={'90%'} px={6} gap={4} align={'start'} direction={'column'}>
				<Text fontSize={{ base: 'md', md: 20 }}>{title}</Text>
			</Flex>
		</Flex>
	);
};

export default AppFeatureCard;
