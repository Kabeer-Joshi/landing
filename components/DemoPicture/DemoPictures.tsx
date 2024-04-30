import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
	Box,
	Heading,
	Flex,
	IconButton,
	VStack,
	Highlight,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/next-js';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

// import { demoCards } from "../../data/data";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 2,
		slidesToSlide: 2,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
		slidesToSlide: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1,
	},
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
	return (
		<IconButton
			as={ChevronLeftIcon}
			onClick={onClick}
			position="absolute"
			left="0"
			top="50%"
			transform="translateY(-50%)"
			zIndex="10"
			bg="gray.200"
			aria-label="Previous slide"
			{...rest}
		/>
	);
};

const CustomRightArrow = ({ onClick, ...rest }) => {
	return (
		<IconButton
			as={ChevronRightIcon}
			onClick={onClick}
			position="absolute"
			right="0"
			top="50%"
			transform="translateY(-50%)"
			zIndex="10"
			bg="gray.200"
			aria-label="Next slide"
			{...rest}
		/>
	);
};

const DemoPictures = () => {
	return (
		<Box p={4}>
			<Flex justifyContent="center">
				<Heading color={'brand.100'} mb={10}>
					Demo Pictures
				</Heading>
			</Flex>

			<Box>
				<Carousel
					swipeable={true}
					draggable={true}
					responsive={responsive}
					autoPlay={false}
					keyBoardControl={true}
					customTransition="transform 0.8s ease-in-out"
					transitionDuration={800}
					containerClass="carousel-container"
					// removeArrowOnDeviceType={["tablet", "mobile"]}
					dotListClass="custom-dot-list-style"
					itemClass="carousel-item-padding-40-px"
					customLeftArrow={<CustomLeftArrow />}
					customRightArrow={<CustomRightArrow />}>
					{demoCards.map((card, index) => (
						<VStack
							key={index}
							borderWidth="1px"
							alignItems="center"
							p={4}
							flexDirection="column"
							borderRadius="lg"
							rounded="lg"
							bg="brand.100"
							spacing={4}
							marginRight={{ base: '0', md: '20px' }}
							marginLeft={{ base: '0', md: '20px' }}>
							<Heading
								as={'h6'}
								fontSize={30}
								margin={5}
								height={{ base: '100px' }}>
								<Highlight
									query={[card.text.split(' ')[0]]}
									styles={{ color: 'white' }}>
									{card.text}
								</Highlight>
							</Heading>
							<Box>
								<Image
									border="2px"
									src={card.image}
									alt={card.text}
									// height={{ base: "500px", md: "800px" }}
									// width="auto"
									width={200}
									rounded="30"
								/>
							</Box>
						</VStack>
					))}
				</Carousel>
			</Box>
		</Box>
	);
};

export default DemoPictures;
