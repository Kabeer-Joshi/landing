import {
	Flex,
	Grid,
	Text,
	Heading,
	GridItem,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	Button,
	ModalCloseButton,
} from '@chakra-ui/react';
import React from 'react';
import AppFeatureCard from './AppFeatureCard';
import { AppFeatureData, fullAppFeatureData } from '../../data/data';
import AppFeatureImage from '../../assets/images/featureListImage.svg';

const AppFeatureList = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Flex
			width={'full'}
			direction={'column'}
			justify={'center'}
			align={'center'}
			gap={20}
			h={'full'}
			my={20}>
			<Heading
				fontSize={{ base: '2xl', md: '4xl' }}
				textAlign={'center'}
				color={'brand.100'}>
				App Features
			</Heading>
			<Flex
				direction={{ base: 'column', lg: 'row' }}
				justify={'space-evenly'}
				align={'stretch'}
				gap={12}
				w={'full'}
				px={{ base: 2, md: 20 }}
				h={'full'}>
				<Flex gap={8} flex={2} direction={'column'}>
					<Grid
						gap={6}
						w={'full'}
						justifyContent={'center'}
						templateColumns={{
							base: '1fr',
							md: '1fr 1fr',
							lg: '1fr 1fr 1fr',
						}}
						gridAutoRows={'1fr'}
						gridAutoColumns={'1fr'}>
						{AppFeatureData.map((data, index) => (
							<GridItem width={'full'} key={index}>
								{' '}
								<AppFeatureCard {...data} />
							</GridItem>
						))}
					</Grid>
					<Text
						cursor={'pointer'}
						as="u"
						color={'brand.100'}
						textAlign={'end'}
						fontSize={{ base: 'md', md: '2xl' }}
						onClick={onOpen}
						textUnderlineOffset={10}>
						Show more...
					</Text>
				</Flex>

				{/* This is for Image */}
				{/* <Flex
                    w={"full"}
                    direction={"column"}
                    flex={1}
                    justify={"center"}
                    align={"center"}
                    h={"2xl"}
                >
                    <Image
                        w={{ base: 200, md: 350 }}
                        src={AppFeatureImage}
                    ></Image>
                </Flex> */}
			</Flex>
			<Modal
				motionPreset="slideInBottom"
				isCentered
				isOpen={isOpen}
				onClose={onClose}
				size={'6xl'}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Features</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Grid
							gap={4}
							templateColumns={{
								base: '1fr',
								md: '1fr 1fr',
								lg: '1fr 1fr 1fr',
							}}>
							{fullAppFeatureData.map((data, index) => (
								<GridItem key={index}>
									{' '}
									<AppFeatureCard {...data} />
								</GridItem>
							))}
						</Grid>
					</ModalBody>

					<ModalFooter>
						<Button color={'brand.100'} mr={3} onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Flex>
	);
};

export default AppFeatureList;
