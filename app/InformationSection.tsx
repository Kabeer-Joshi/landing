import {
	Flex,
	Heading,
	Highlight,
	Text,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	Divider,
	TabPanel,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';
import React from 'react';
// import { informationData } from "../../data/data";
import InformationDetailsCard from '../../components/Homecards/InformationDetailsCard';
import Tab1Img from '../../assets/images/Tab1Img.png';
import { homeMidSectionTabData } from '@/data/data';

const InformationSection = () => {
	return (
		<Flex
			direction={'column'}
			justify={'center'}
			align={'center'}
			w={'100%'}
			px={{ base: 6, md: 6, lg: 24 }}
			mt={24}
			mb={16}
			gap={12}>
			{/* {informationData.map((data) => (
                <InformationDetailsCard {...data} key={data.id} />
            ))} */}

			<Heading fontSize={{ base: '2xl', md: '5xl' }} textAlign={'center'}>
				More Ways Goreeva helps you
			</Heading>

			<Flex maxW={'7xl'}>
				<Tabs w={'full'}>
					<TabList w={'full'}>
						<Flex
							w={'full'}
							boxShadow={'lg'}
							py={2}
							justifyContent={'space-around'}
							borderTopRadius={'xl'}>
							{/* {homeMidSectionTabData.map((tabData, index) => (
                                <>
                                    <Tab
                                        fontSize={{ base: 12, md: 24 }}
                                        _selected={{ color: "black" }}
                                        color={"gray.300"}
                                        fontWeight={"semibold"}
                                        textAlign={"center"}
                                        key={index}
                                    >
                                        {tabData.name}
                                    </Tab>
                                    {index !==
                                        homeMidSectionTabData.length - 1 && (
                                        <Divider orientation="vertical" />
                                    )}
                                </>
                            ))} */}

							<Tab
								fontSize={{ base: 12, md: 24 }}
								_selected={{ color: 'black' }}
								color={'gray.300'}
								fontWeight={'semibold'}
								textAlign={'center'}>
								Identity and Security
							</Tab>
							<Divider orientation="vertical" />
							<Tab
								fontSize={{ base: 12, md: 24 }}
								_selected={{ color: 'black' }}
								color={'gray.300'}
								fontWeight={'semibold'}>
								Speed Grading
							</Tab>
							<Divider orientation="vertical" />
							<Tab
								fontSize={{ base: 12, md: 24 }}
								_selected={{ color: 'black' }}
								color={'gray.300'}
								fontWeight={'semibold'}>
								Interoperability
							</Tab>
						</Flex>
					</TabList>
					<TabPanels>
						{/* Tab Panel 1 */}
						{homeMidSectionTabData.map((tabData, index) => (
							<TabPanel key={index}>
								<Flex
									w={'full'}
									justify={'space-around'}
									align={'center'}
									py={12}
									gap={12}
									direction={{ base: 'column', md: 'row' }}>
									<Flex
										flex={1}
										gap={{ base: 10, md: 16 }}
										direction={'column'}>
										<Text
											lineHeight={{ base: 7, md: 9 }}
											fontSize={{ base: 'md', md: 'xl' }}>
											{tabData.text1}
										</Text>
										<Text
											lineHeight={{ base: 7, md: 9 }}
											fontSize={{ base: 'md', md: 'xl' }}>
											{tabData.text2}
										</Text>
									</Flex>

									<Image
										flex={1}
										src={tabData.image}
										alt="tab image 1"
										w={500}
										rounded={'2xl'}
									/>
								</Flex>
							</TabPanel>
						))}
					</TabPanels>
				</Tabs>
			</Flex>
		</Flex>
	);
};

export default InformationSection;
