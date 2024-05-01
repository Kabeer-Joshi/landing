import { Image } from '@chakra-ui/next-js';
import { Flex } from '@chakra-ui/react';

type K12Card2Props = {
	title: string;
	description: string;
	image: any;
	points: string[];
	inverted?: boolean;
};

const K12Card2 = ({ title, description, image, points }: K12Card2Props) => {
	return (
		<Flex
			flex={1}
			direction={'column'}
			gap={10}
			justify={'center'}
			px={{ base: 5 }}
			// align={"start"}
		>
			<Image alt="k12-card-2" rounded={'2xl'} w={500} src={image} />
			{/*
              <Heading
                  fontSize={{ base: "2xl", md: "4xl" }}
                  textAlign={"center"}
                  color={"brand.100"}
              >
                  {title}
              </Heading>
              <Text textColor={"gray.500"} fontSize={{ base: "md", md: "xl" }}>
                  {description}
              </Text>
            */}

			{/* <Text
                textUnderlineOffset={8}
                fontSize={"lg"}
                color={"brand.100"}
                as={"u"}
                cursor={"pointer"}
            >
                {" "}
                Learn More{" "}
            </Text> */}
		</Flex>
	);
};

export default K12Card2;
