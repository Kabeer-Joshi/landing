import { Flex, Heading, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';

type K12Card1Props = {
	title: string;
	description: string;
	image: any;
	points: string[];
	inverted?: boolean;
};

const K12Card1 = ({
	title,
	description,
	image,
	points,
	inverted = false,
}: K12Card1Props) => {
	return (
		<Flex gap={16} justify={'center'} align={'center'} direction={'column'}>
			<Heading
				textAlign={'center'}
				fontSize={{ base: '2xl', md: '4xl' }}
				color={'brand.100'}>
				{title}
			</Heading>
			<Flex
				px={{ base: 10, lg: inverted ? 24 : 36 }}
				gap={inverted ? 32 : 12}
				direction={
					inverted
						? {
								base: 'column-reverse',
								md: 'row-reverse',
								lg: 'row-reverse',
						  }
						: { base: 'column', md: 'row', lg: 'row' }
				}
				justify={'space-around'}
				align={{ base: 'start', md: 'center' }}>
				{/* FOR POints and description */}

				<Flex
					justifyContent={'center'}
					align={'center'}
					gap={10}
					direction={'column'}
					flex={1}
					h={'full'}>
					<Text textColor={'gray.500'} fontSize={{ base: 'md', md: '2xl' }}>
						{description}
					</Text>
					{/*
                      <Flex direction={"column"} gap={8}>
                          {points.map((point, index) => {
                              return (
                                  <Flex
                                      direction={"row"}
                                      align={"center"}
                                      justify={"start"}
                                      key={index}
                                      gap={4}
                                  >
                                      <Icon
                                          fontSize={{ base: "lg", md: "2xl" }}
                                          as={BsCheckCircleFill}
                                          color={"brand.100"}
                                      />

                                      <Text
                                          fontWeight={"bold"}
                                          fontSize={{ base: "md", md: "xl" }}
                                      >
                                          {point}
                                      </Text>
                                  </Flex>
                              );
                          })}
                      </Flex>
                    */}
				</Flex>

				{/* For IMage and a bit descripion */}
				<Flex
					direction={'column'}
					justify={'center'}
					align={'start'}
					flex={1}
					gap={12}>
					<Image
						alt="
                    k12-card-1
                    "
						rounded={'2xl'}
						w={500}
						src={image}></Image>

					{/* <Text
                      textColor={"gray.500"}
                      fontSize={{ base: "md", md: "lg" }}
                  >
                      {description}
                  </Text> */}
				</Flex>
			</Flex>
		</Flex>
	);
};

export default K12Card1;
